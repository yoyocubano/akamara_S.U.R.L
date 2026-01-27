export type RouteMeta = {
    path: string;
    titleKey: string;
    descriptionKey: string;
    ogTitleKey?: string;
    ogDescriptionKey?: string;
    canonical?: string;
    lang?: string;
};

export const ROUTE_META: RouteMeta[] = [
    { 
        path: '/', 
        titleKey: 'seo.home.title', 
        descriptionKey: 'seo.home.description', 
        ogTitleKey: 'seo.home.title', 
        ogDescriptionKey: 'seo.home.description', 
        canonical: '/' 
    },
    { 
        path: '/catalogo', 
        titleKey: 'seo.catalog.title', 
        descriptionKey: 'seo.catalog.description' 
    },
    { 
        path: '/contact', 
        titleKey: 'seo.contact.title', 
        descriptionKey: 'seo.contact.description' 
    },
    { 
        path: '/politicas', 
        titleKey: 'seo.legal.title', 
        descriptionKey: 'seo.legal.description' 
    },
    { 
        path: '/legal', 
        titleKey: 'seo.legal.title', 
        descriptionKey: 'seo.legal.description',
        canonical: '/politicas'
    },
    { 
        path: '/division/:id', 
        titleKey: 'divisions.{{id}}.fullTitle', // We'll handle interpolation in the hook
        descriptionKey: 'divisions.{{id}}.vision' 
    }
];
