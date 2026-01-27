
/**
 * @file escribano_logger.js
 * @description Script para el rol de "Escribano". Registra eventos con fecha y hora en un Google Doc.
 * @usage node scripts/escribano_logger.js "Mensaje a registrar"
 * @requires GOOGLE_APPLICATION_CREDENTIALS (path al json) en .env
 * @requires GOOGLE_DOC_ID (id del documento) en .env
 */

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Configuración de entorno
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const SCOPES = ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive.file'];

async function main() {
  const message = process.argv[2];
  if (!message) {
    console.error('❌ Error: Debes proporcionar un mensaje. Ejemplo: node scripts/escribano_logger.js "Hola Mundo"');
    process.exit(1);
  }

  // Validar credenciales
  const keyFilePath = process.env.GOOGLE_APPLICATION_CREDENTIALS || 'escribano_key.json';
  const docId = process.env.GOOGLE_DOC_ID;

  if (!fs.existsSync(keyFilePath) && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error(`❌ Error: No se encuentra el archivo de credenciales: ${keyFilePath}`);
    console.error('💡 Solución: Define GOOGLE_APPLICATION_CREDENTIALS en .env o pon el archivo "escribano_key.json" en la raíz.');
    process.exit(1);
  }

  if (!docId) {
    console.error('❌ Error: No se ha definido el ID del documento.');
    console.error('💡 Solución: Añade GOOGLE_DOC_ID=tu_id_del_doc en el archivo .env');
    process.exit(1);
  }

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: SCOPES,
    });

    const docs = google.docs({ version: 'v1', auth });
    
    // Obtener fecha y hora actual
    const now = new Date();
    const timestamp = now.toLocaleString('es-ES', { 
      timeZone: 'America/Havana', // Ajustar a la zona horaria del cliente si es necesario
      dateStyle: 'medium', 
      timeStyle: 'medium' 
    });

    const entryText = `[${timestamp}] ${message}\n`;

    // Obtener el final del documento para insertar texto
    // Nota: Insertar al final suele ser index = 1 si está vacío, o el 'endIndex' del body - 1.
    // Para simplificar, obtenemos el documento primero.
    const doc = await docs.documents.get({ documentId: docId });
    const endIndex = doc.data.body.content[doc.data.body.content.length - 1].endIndex;

    // Realizar la escritura
    const requests = [
      {
        insertText: {
          text: entryText,
          location: {
            index: endIndex - 1, // Insertar justo antes del último carácter de salto de línea
          },
        },
      },
    ];

    await docs.documents.batchUpdate({
      documentId: docId,
      requestBody: { requests },
    });

    console.log(`✅ Escribano: Nota registrada exitosamente a las ${timestamp}`);

  } catch (error) {
    console.error('❌ Error del Escribano:', error.message);
    if (error.message.includes('insufficient permissions')) {
      console.error('💡 Tip: Asegúrate de haber compartido el Google Doc con el email del Service Account (client_email en el JSON).');
    }
  }
}

main();
