# 📜 Guía de Activación: Escribano Google Docs

Esta guía explica cómo configurar las credenciales de Google Cloud para permitir que el script automático ("El Escribano") escriba en tus documentos de Google Docs.

---

## 🚀 Paso 1: Obtener la Llave Maestra (Service Account)

1.  Ve a la **[Consola de Google Claud](https://console.cloud.google.com/)**.
2.  Crea un **Nuevo Proyecto** (ej: "Akamara Escribano").
3.  En el menú lateral, ve a **APIs y Servicios** > **Biblioteca**.
4.  Busca y **Habilita** la **"Google Docs API"**.
5.  Ve a **IAM y administración** > **Cuentas de servicio**.
6.  Haz clic en **"Crear cuenta de servicio"**.
    *   Nombre: `escribano-bot`
    *   Dale a "Crear y continuar".
    *   Rol (Opcional): "Editor" (aunque lo importante es compartir el Doc después).
7.  Una vez creada, haz clic en la cuenta (email estilo `escribano-bot@akamara-....iam.gserviceaccount.com`).
8.  Ve a la pestaña **Claves** > **Agregar clave** > **Crear nueva clave** > **JSON**.
9.  Se descargará un archivo `.json` a tu ordenador.

---

## 🔐 Paso 2: Instalación en el Proyecto

1.  Toma el archivo JSON descargado y renómbralo a `escribano_key.json`.
2.  Muévelo a la carpeta raíz de este proyecto (junto a `package.json`).
    *   *Nota: Asegúrate de que `escribano_key.json` esté en `.gitignore` para no subirlo a GitHub.*

---

## 🤝 Paso 3: Dar Permiso al Escribano

Para que el bot pueda escribir en TU documento, debes invitarlo como si fuera una persona:

1.  Abre tu archivo `.json` y copia el correo `client_email` (ej: `escribano-bot@akamara....iam.gserviceaccount.com`).
2.  Ve a tu **Google Doc** objetivo.
3.  Haz clic en **Compartir**.
4.  Pega el correo del bot y dale permisos de **Editor**.
5.  Copia el **ID del Documento** de la URL.
    *   URL: `docs.google.com/document/d/ESTE_ES_EL_ID/edit`

---

## ⚙️ Paso 4: Configuración Final

Abre tu archivo `.env` en este proyecto y añade:

```bash
# Credenciales del Escribano
GOOGLE_DOC_ID=tú_id_del_documento_aquí
# Opcional si no usas el nombre por defecto:
# GOOGLE_APPLICATION_CREDENTIALS=ruta/a/tu/clave.json
```

---

## ✍️ Uso

Ahora puedes invocar al escribano desde la terminal:

```bash
node scripts/escribano_logger.js "Inicio de operaciones del día"
```

El script añadirá automáticamente: `[26/01/2026, 19:30:00] Inicio de operaciones del día`.
