import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  path: string;
}

export function SEO({ 
  title, 
  description, 
  name = 'Grow Greens', 
  type = 'website', 
  image = '/images/hero_microgreens.jpg', 
  path 
}: SEOProps) {
  // Update this domain with your final custom domain
  const DOMAIN = "https://growgreensstore.com"; 
  const canonicalUrl = `${DOMAIN}${path}`;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title} | Grow Greens</title>
      <meta name="description" content={description} />
      
      {/* Canonical tag to prevent duplicate content (e.g. Vercel vs custom domain) */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags for social sharing */}
      <meta property="og:title" content={`${title} | Grow Greens`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`${DOMAIN}${image}`} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${name}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${DOMAIN}${image}`} />
    </Helmet>
  );
}
