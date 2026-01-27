
import { google } from 'googleapis';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const KEY_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS || 'escribano_key.json';
const DOC_ID = process.env.GOOGLE_DOC_ID;

async function readDoc() {
  if (!DOC_ID) {
    console.error('❌ Error: No se encontró GOOGLE_DOC_ID en .env');
    return;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ['https://www.googleapis.com/auth/documents.readonly'],
    });

    const docs = google.docs({ version: 'v1', auth });
    const res = await docs.documents.get({ documentId: DOC_ID });
    
    console.log(`📜 Contenido del Documento: "${res.data.title}"\n`);
    
    // Función simple para extraer texto de los elementos estructurales
    const content = res.data.body.content;
    let fullText = '';
    
    content.forEach(element => {
      if (element.paragraph) {
        element.paragraph.elements.forEach(c => {
          if (c.textRun) {
            fullText += c.textRun.content;
          }
        });
      }
    });

    console.log(fullText);
    console.log('\n✅ Fin del reporte.');

  } catch (error) {
    console.error('❌ Error al leer:', error.message);
  }
}

readDoc();
