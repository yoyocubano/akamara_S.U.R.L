import { useTranslation } from 'react-i18next';
import { ROUTE_META } from './routeMeta';

export interface SeoData {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    canonical?: string;
}

export function useSeo(path: string, params?: Record<string, string>): SeoData | null {
    const { t } = useTranslation();

    const meta = ROUTE_META.find(m => {
        if (m.path.includes(':')) {
            // Basic regex matching for paths with params like /division/:id
            const pattern = new RegExp('^' + m.path.replace(/:[^\s/]+/g, '([\\w-]+)') + '$');
            return pattern.test(path);
        }
        return m.path === path;
    });

    if (!meta) return null;

    // Handle template interpolation for dynamic routes (e.g., divisions.mobiliario.fullTitle)
    const interpolate = (key: string) => {
        let finalKey = key;
        if (params) {
            Object.entries(params).forEach(([k, v]) => {
                finalKey = finalKey.replace(`{{${k}}}`, v);
                finalKey = finalKey.replace(`:${k}`, v);
            });
        }
        return finalKey;
    };

    const titleKey = interpolate(meta.titleKey);
    const descriptionKey = interpolate(meta.descriptionKey);

    const title = t(titleKey);
    const description = t(descriptionKey);
    const ogTitle = meta.ogTitleKey ? t(interpolate(meta.ogTitleKey)) : title;
    const ogDescription = meta.ogDescriptionKey ? t(interpolate(meta.ogDescriptionKey)) : description;

    return { 
        title, 
        description, 
        ogTitle, 
        ogDescription, 
        canonical: meta.canonical 
    };
}
