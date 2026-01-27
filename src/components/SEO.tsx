import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import { useSeo } from '../seo/useSeo';
import { useParams, useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    titleKey?: string;
    descriptionKey?: string;
    image?: string;
    url?: string;
    type?: string;
    keywords?: string[] | string;
    schema?: Record<string, any>; 
    path?: string;
}

/**
 * SEO Component based on best practices.
 * Handles standard meta tags, Open Graph (Facebook/WhatsApp), and Twitter cards.
 */
export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    titleKey,
    descriptionKey,
    image,
    url,
    type = 'website',
    keywords,
    schema,
    path
}) => {
    const { t, i18n } = useTranslation();
    const params = useParams();
    const location = useLocation();
    
    // HashRouter handling
    const currentPath = path || location.pathname || '/';
    
    // Use registry if no explicit props are provided
    const registrySeo = useSeo(currentPath, params as Record<string, string>);

    const siteTitle = 'Akamara S.U.R.L.';
    const baseUrl = 'https://akamara.surl.cu';
    
    const metaUrl = url || `${baseUrl}/#${currentPath}`;
    
    const displayTitle = titleKey ? t(titleKey) : (title || registrySeo?.title);
    const fullTitle = displayTitle ? `${displayTitle} | ${siteTitle}` : siteTitle;
    const metaDescription = (descriptionKey ? t(descriptionKey) : (description || registrySeo?.description)) 
        || t('hero.description') 
        || 'Innovación y Tecnología en Cuba.';
    const metaImage = image || `${baseUrl}/android-chrome-512x512.png`;
    const currentLang = i18n.language || 'es';

    // Map i18next language to Open Graph locale format
    const localeMap: Record<string, string> = {
        'en': 'en_US',
        'es': 'es_ES',
    };
    const ogLocale = localeMap[currentLang] || 'es_ES';

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && (
                <meta
                    name="keywords"
                    content={Array.isArray(keywords) ? keywords.join(', ') : keywords}
                />
            )}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#020617" /> 

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content={ogLocale} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Canonical */}
            <link rel="canonical" href={metaUrl} />

            {/* Hreflang for international SEO */}
            <link rel="alternate" href={`${baseUrl}/#/es${currentPath}`} hrefLang="es" />
            <link rel="alternate" href={`${baseUrl}/#/en${currentPath}`} hrefLang="en" />
            <link rel="alternate" href={metaUrl} hrefLang="x-default" />

            {/* JSON-LD Schema Rendering */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};
