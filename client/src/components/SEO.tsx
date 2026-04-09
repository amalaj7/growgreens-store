import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  path: string;
  /** Optional JSON-LD structured data to inject. Falls back to standard WebPage schema. */
  jsonLd?: Record<string, unknown>;
}

export function SEO({ 
  title, 
  description, 
  name = 'Grow Greens', 
  type = 'website', 
  image = '/images/hero_microgreens.jpg', 
  path,
  jsonLd,
}: SEOProps) {
  const DOMAIN = "https://growgreensstore.com"; 
  const canonicalUrl = `${DOMAIN}${path}`;
  const fullTitle = `${title} | Grow Greens`;
  const absoluteImage = `${DOMAIN}${image}`;

  // Default structured data (WebPage) — override per page via jsonLd prop
  const structuredData = jsonLd ?? {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "description": description,
    "url": canonicalUrl,
    "image": absoluteImage,
    "publisher": {
      "@type": "Organization",
      "name": "Grow Greens",
      "url": DOMAIN,
      "logo": {
        "@type": "ImageObject",
        "url": `${DOMAIN}/favicon.png`
      }
    }
  };

  return (
    <Helmet>
      {/* Indexing directive — ensure pages are never accidentally noindexed */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Basic metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Canonical tag to prevent duplicate content (e.g. Vercel vs custom domain) */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags for social sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
