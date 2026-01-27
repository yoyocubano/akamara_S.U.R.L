import { Helmet } from 'react-helmet-async';

export const StructuredData = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Akamara S.U.R.L.",
    "alternateName": "Akamara",
    "url": "https://akamara.surl.cu",
    "logo": "https://akamara.surl.cu/android-chrome-512x512.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+5352643803",
      "contactType": "customer service",
      "areaServed": "CU",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/akamara.surl", // Example, placeholders
      "https://www.instagram.com/akamara.surl"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Akamara S.U.R.L.",
    "url": "https://akamara.surl.cu",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://akamara.surl.cu/#/catalogo?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};
