
import { google } from 'googleapis';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Configuración básica
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const KEY_FILE = path.join(__dirname, '../escribano_key.json');

async function findSharedDocs() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });
    
    console.log('🔍 Buscando documentos compartidos con escribano-bot...');
    
    const res = await drive.files.list({
      pageSize: 10,
      fields: 'files(id, name, owners)',
      // Buscamos archivos que NO sean propiedad del bot (porque se los compartieron)
      // o simplemente listamos todo.
    });

    const files = res.data.files;
    if (files.length === 0) {
      console.log('⚠️ No se encontraron archivos. ¿Seguro que compartiste el doc con el email del bot?');
    } else {
      console.log('✅ Archivos encontrados:');
      files.forEach((file) => {
        console.log(`- [${file.name}] ID: ${file.id}`);
      });
    }
  } catch (error) {
    console.error('❌ Error al buscar archivos:', error.message);
  }
}

findSharedDocs();
