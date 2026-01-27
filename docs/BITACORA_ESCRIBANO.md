# 📜 Bitácora del Escribano (CHANGELOG)

Registro histórico de cambios, hitos y decisiones técnicas del proyecto Akamara S.U.R.L.

## [2026-01-26] - Puesta en Marcha Digital & Hardening 🚀

### 🌟 Hitos
*   **Adquisición de Identidad Digital:** Compra del dominio `akamara-surl.com` (Pack IONOS 1€).
*   **Despliegue de Infraestructura:** Vinculación exitosa entre IONOS y Cloudflare Pages.
*   **Auditoría de Seguridad Integral:** Realizada por AntiGravity en los proyectos PIFLUX, Welux_Events y Welux_Admin.
*   **Remediación de Vulnerabilidades:** Eliminación de secretos en texto plano y migración a `.env`.

### 🔧 Cambios Técnicos
*   **DNS:**
    *   Limpieza de registros default de IONOS (IPs eliminadas).
    *   Configuración de `CNAME www` -> `akamara-surl.pages.dev`.
    *   Inyección de registro `TXT @` como referencia técnica.
*   **Documentación:**
    *   Creación de `docs/INFRASTRUCTURE_AND_DNS.md` con el mapa de la red.
    *   Creación de esta Bitácora.

### 📝 Notas del Escribano
> "Se ha procedido con la estrategia de bajo coste (1€) para el primer año. La infraestructura queda lista para operar sobre la red global de Cloudflare, garantizando velocidad y seguridad desde el día uno. Queda pendiente únicamente el 'visto bueno' final (clic de activación) en el panel de control de Cloudflare por parte de la administración."

---
