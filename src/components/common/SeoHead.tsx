import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoMetadata } from '../../seo/routesSeo';

export function SeoHead() {
  const location = useLocation();

  useEffect(() => {
    const PRODUCTION_ORIGIN = 'https://hnm3.vercel.app';
    const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    const origin = isLocalhost ? window.location.origin : PRODUCTION_ORIGIN;
    const seo = getSeoMetadata(location.pathname, origin);

    if (seo) {
      // Update Title
      document.title = seo.title;

      // Helper to update or create meta tag
      const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
        let element = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attribute, name);
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
      };

      // Update Meta Tags
      updateMetaTag('description', seo.description);
      updateMetaTag('keywords', seo.keywords.join(', '));
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

      // Open Graph Tags
      updateMetaTag('og:title', seo.title, 'property');
      updateMetaTag('og:description', seo.description, 'property');
      updateMetaTag('og:type', seo.ogType, 'property');
      updateMetaTag('og:url', `${origin}${seo.canonicalPath}`, 'property');

      // Twitter Tags
      updateMetaTag('twitter:card', 'summary_large_image', 'name');
      updateMetaTag('twitter:title', seo.title, 'name');
      updateMetaTag('twitter:description', seo.description, 'name');

      // Canonical Link
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `${origin}${seo.canonicalPath}`);
    }
  }, [location.pathname]);

  return null;
}
