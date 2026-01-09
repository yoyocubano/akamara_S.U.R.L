
import { Resend } from 'resend';
import { Client, Databases, ID } from 'node-appwrite';

export const onRequestPost = async (context) => {
  try {
    const { request, env } = context;
    const body = await request.json();
    const { name, email, phone, message, company, division } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Inicializar clientes con variables de entorno de Cloudflare (env)
    const resend = new Resend(env.RESEND_API_KEY);

    const client = new Client()
        .setEndpoint(env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
        .setProject(env.VITE_APPWRITE_PROJECT_ID || '696075130002ba18c0ac')
        .setKey(env.APPWRITE_API_KEY);

    const databases = new Databases(client);
    
    // IDs de Appwrite
    const DB_ID = 'main';
    const COLLECTION_ID = 'messages';

    // 1. Guardar en Appwrite
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
        console.error('Error Appwrite:', dbError);
        // Continuamos para enviar el email
    }

    // 2. Enviar Email con Resend
    const data = await resend.emails.send({
      from: 'Akamara Web <contact@resend.dev>', // O tu dominio verificado
      to: ['akamarasurl@gmail.com'],
      reply_to: email,
      subject: `Nuevo Mensaje Web: ${division} - ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #d97706; margin-top:0;">Nuevo Contacto Recibido</h2>
            <p><strong>👤 Nombre:</strong> ${name}</p>
            <p><strong>📂 División:</strong> ${division}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📱 Teléfono:</strong> ${phone || '-'}</p>
            <div style="background-color: #fffbeb; border-left: 4px solid #d97706; padding: 15px; margin-top: 20px;">
              <p style="margin: 0; font-style: italic;">"${message}"</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #999; text-align: center;">Sistema Akamara (Cloudflare Worker)</p>
          </div>
        </div>
      `
    });

    return new Response(JSON.stringify({ success: true, id: data.id }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
    });
  }
};
