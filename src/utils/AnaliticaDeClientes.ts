
/**
 * 🕵️‍♂️ HERRAMIENTA: ANALÍTICA DE CLIENTES (VERSIÓN PRO)
 * ---------------------------------------
 * Esta utilidad gestiona el rastreo de visitantes de forma anónima pero persistente.
 * Ahora incluye detección de dispositivo y vinculación de sesión.
 */

import { databases, APPWRITE_CONFIG, account } from '../lib/appwrite';
import { ID } from 'appwrite';

const STORAGE_KEY = 'client_analytics_id';

export const AnaliticaDeClientes = {
    /**
     * Detector de dispositivo ultra-ligero y País (estimado)
     */
    getDeviceInfo: () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "Tablet";
        if (/Mobile|android|iphone|ipod|blackberry|iemobile|kindle/i.test(ua)) return "Móvil";
        return "Escritorio";
    },

    getCountry: () => {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[0] || 'Desconocido';
        } catch {
            return 'Desconocido';
        }
    },

    /**
     * Obtiene el nombre del navegador simplificado
     */
    getBrowserName: () => {
        const ua = navigator.userAgent;
        if (ua.includes("Chrome")) return "Chrome";
        if (ua.includes("Firefox")) return "Firefox";
        if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
        if (ua.includes("Edge")) return "Edge";
        return "Buscador";
    },

    /**
     * Obtiene o genera un ID único para el visitante actual.
     */
    getVisitorId: () => {
        try {
            let id = localStorage.getItem(STORAGE_KEY);
            if (!id) {
                id = 'vis_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36).substring(4);
                localStorage.setItem(STORAGE_KEY, id);
            }
            return id;
        } catch {
            return 'anonymous_' + Date.now();
        }
    },

    /**
     * Intenta obtener el email si el usuario está logueado
     */
    getUserEmail: async () => {
        try {
            const user = await account.get();
            return user.email;
        } catch {
            return null;
        }
    },

    /**
     * Registra una visita o evento en la base de datos con identidad enriquecida.
     */
    trackAction: async (action: string, metadata: any = {}) => {
        const visitorId = AnaliticaDeClientes.getVisitorId();
        const email = await AnaliticaDeClientes.getUserEmail();
        const device = AnaliticaDeClientes.getDeviceInfo();
        const browser = AnaliticaDeClientes.getBrowserName();
        const country = AnaliticaDeClientes.getCountry();
        
        const payload = {
            visitor_id: visitorId,
            user_email: email || 'Anónimo',
            page: action,
            device_info: `${device} (${browser})`,
            screen_size: `${window.innerWidth}x${window.innerHeight}`,
            country: country,
            ...metadata
        };

        try {
            await databases.createDocument(
                APPWRITE_CONFIG.DATABASE_ID,
                APPWRITE_CONFIG.COLLECTIONS.ANALYTICS,
                ID.unique(),
                payload
            );
        } catch (error) {
            console.warn('⚠️ Analítica Error:', error);
        }
    },

    trackVisit: (path: string) => AnaliticaDeClientes.trackAction(path),
    trackEvent: (eventName: string) => AnaliticaDeClientes.trackAction(eventName)
};
