
import { Resend } from 'resend';
import { Client, Databases, ID } from 'node-appwrite';

const resend = new Resend(process.env.RESEND_API_KEY);

// Config Appwrite Servidor
const client = new Client()
    .setEndpoint(process.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(process.env.VITE_APPWRITE_PROJECT_ID || '696075130002ba18c0ac')
    .setKey(process.env.APPWRITE_API_KEY); // ADMIN KEY Necesaria para escribir sin Auth de usuario

const databases = new Databases(client);

// IDs (Hardcoded por seguridad o extraídos de config)
const DB_ID = 'main';
const COLLECTION_ID = 'messages';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, company, division } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    // 1. Guardar en Appwrite (Base de Datos)
    console.log('Guardando en Appwrite...');
    try {
        await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
            name,
            email,
            phone,
            message,
            company,
            division,
            read: false,
            date: new Date().toISOString()
        });
    } catch (dbError) {
        console.error('Error guardando en Appwrite:', dbError);
        // No bloqueamos el email si falla la DB, pero lo registramos
    }

    // 2. Enviar Email con Resend
    console.log('Enviando email...');
    const data = await resend.emails.send({
      from: 'Akamara Web <contact@resend.dev>', // Usar dominio verificado si tienes
      to: ['akamarasurl@gmail.com'],
      reply_to: email, // Para responder directo al cliente
      subject: `Nuevo Mensaje Web: ${division} - ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #d97706; margin-top:0;">Nuevo Contacto Recibido</h2>
            <p style="color: #555;">Has recibido un mensaje desde el formulario web de Akamara.</p>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            
            <p><strong>👤 Nombre:</strong> ${name}</p>
            <p><strong>🏢 Empresa:</strong> ${company || '-'}</p>
            <p><strong>📂 División:</strong> ${division || 'General'}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📱 Teléfono:</strong> ${phone || '-'}</p>
            
            <div style="background-color: #fffbeb; border-left: 4px solid #d97706; padding: 15px; margin-top: 20px;">
              <p style="margin: 0; font-style: italic; color: #333;">"${message}"</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #999; text-align: center;">Sistema Automático Akamara</p>
          </div>
        </div>
      `
    });

    return res.status(200).json({ success: true, id: data.id });

  } catch (error) {
    console.error('Error general:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
