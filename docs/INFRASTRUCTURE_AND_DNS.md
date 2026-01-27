# 🏗️ Infraestructura y DNS - Akamara S.U.R.L.

Este documento detalla la configuración técnica del dominio, DNS y despliegue del proyecto.

---

## 🌐 Dominio Principal

**Dominio:** `akamara-surl.com`
**Registrador:** IONOS
**Fecha de Registro:** 26/01/2026
**Renovación:** 26/01/2027 (Pack 1€ - Revisar precio antes de renovar)

### Dominios Adicionales (Pack)
El paquete incluye las siguientes extensiones (actualmente sin uso activo):
*   `akamara-surl.es`
*   `akamara-surl.info`
*   `akamara-surl.store`
*   `akamara-surl.eu` (si aplica)

---

## ☁️ Hosting y Despliegue

**Proveedor:** Cloudflare Pages
**Proyecto:** `akamara-surl`
**URL Técnica:** `https://akamara-surl.pages.dev`
**Repositorio Conectado:** GitHub (rama `main` / `master`)

---

## 🔧 Configuración DNS (IONOS)

Para permitir el funcionamiento con Cloudflare Pages sin transferir el dominio completo (Nameservers en IONOS), se ha aplicado la siguiente configuración:

| Tipo | Host | Valor | Estado | Notas |
| :--- | :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `akamara-surl.pages.dev` | ✅ Activo | **Principal**. Apunta el tráfico web. |
| **TXT** | `@` | `akamara-surl.pages.dev` | ℹ️ Info | Placeholder. IONOS no permite CNAME en raíz. |
| **A / AAAA** | `@` | (Eliminados) | 🗑️ Borrados | Se eliminaron las IPs de "Default Site" de IONOS. |

### 🚨 Acción Requerida en Cloudflare
Para finalizar la vinculación, se debe añadir el dominio en el panel de Cloudflare:
1.  Ir a **Workers & Pages** > **akamara-surl** > **Custom Domains**.
2.  Añadir `www.akamara-surl.com`.
3.  Cloudflare validará automáticamente el certificado SSL al detectar el CNAME.

---

## 🔄 Estrategia de Migración (Futuro)

*   **Corto Plazo (2026):** Mantener dominio en IONOS (1€) y DNS apuntando a Cloudflare.
*   **Largo Plazo (Enero 2027):** Transferir dominio a **Cloudflare Registrar** antes de la renovación en IONOS para evitar subida de precio.

---
*Última actualización: 26/01/2026*
