
/**
 * ⚡️ PREFETCH ROUTES UTILITY
 * -------------------------
 * Optimiza la navegación cargando dinámicamente los componentes 
 * cuando el usuario pasa el cursor sobre los enlaces.
 */

export const prefetchMap: Record<string, () => Promise<any>> = {
    '/': () => import('../pages/public/Home'),
    '/catalogo': () => import('../pages/public/Catalog'),
    '/contact': () => import('../pages/public/Contact'),
    '/politicas': () => import('../pages/Policies'),
    '/servicios': () => import('../pages/public/Home'),
    '/legal': () => import('../pages/public/Home'),
};

/**
 * Dispara la carga del chunk asociado a una ruta.
 */
export const prefetchRoute = (path: string) => {
    // Si la ruta tiene un parámetro dinámico (/division/123), normalizar para el mapa
    const normalizedPath = path.startsWith('/division/') ? '/division/:id' : path;
    
    // Añadir entrada dinámica para divisiones si no existe
    if (path.startsWith('/division/') && !prefetchMap['/division/:id']) {
        prefetchMap['/division/:id'] = () => import('../pages/divisions/DivisionDetail');
    }

    const loader = prefetchMap[normalizedPath];
    if (loader) {
        loader().catch(err => console.warn(`[Prefetch] Failed for ${path}:`, err));
    }
};
