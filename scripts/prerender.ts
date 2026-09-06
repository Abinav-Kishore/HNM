/**
 * Static Site Generation (SSG) Pre-render Script for Vercel & Production
 * Uses authentic React Server-Side Rendering via src/entry-server.tsx
 * to generate complete, crawlable HTML pages for all public festival routes.
 *
 * Injects:
 * - Route-specific <title>
 * - Clean <meta name="description"> (no keyword stuffing)
 * - Canonical <link rel="canonical">
 * - Social Cards (Open Graph & Twitter)
 * - Valid Schema.org JSON-LD structured data
 * - Full authentic React-rendered DOM inside <div id="root">
 *
 * Result: Instant First Contentful Paint with zero layout flicker or perceived redirect,
 * seamless client hydration, and 100% crawlability for search engines and AI models.
 */

import fs from 'fs';
import path from 'path';
import { build as viteBuild } from 'vite';
import { pathToFileURL } from 'url';
import { SEO_ROUTES } from '../src/seo/routesSeo';

const PRODUCTION_DOMAIN = 'https://hnm3.vercel.app';
const distDir = path.resolve(process.cwd(), 'dist');
const ssrOutputDir = path.resolve(distDir, 'server-render');

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function runPrerender() {
  console.log('[Prerender] Building SSR bundle with Vite...');

  // 1. Build the SSR bundle for entry-server.tsx
  await viteBuild({
    build: {
      ssr: path.resolve(process.cwd(), 'src/entry-server.tsx'),
      outDir: ssrOutputDir,
      emptyOutDir: true,
    },
    configFile: path.resolve(process.cwd(), 'vite.config.ts'),
  });

  const ssrModulePath = path.join(ssrOutputDir, 'entry-server.js');
  if (!fs.existsSync(ssrModulePath)) {
    throw new Error(`[Prerender] SSR bundle not found at ${ssrModulePath}`);
  }

  // 2. Import the compiled render function
  const ssrModule = await import(pathToFileURL(ssrModulePath).href);
  const renderApp: (url: string) => string = ssrModule.renderApp;

  if (typeof renderApp !== 'function') {
    throw new Error('[Prerender] renderApp export is missing or not a function');
  }

  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`[Prerender] Base template ${templatePath} not found! Run 'vite build' first.`);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');

  console.log('[Prerender] Generating static HTML for all indexable routes...');

  for (const [routePath, seo] of Object.entries(SEO_ROUTES)) {
    const canonicalUrl = `${PRODUCTION_DOMAIN}${seo.canonicalPath}`;
    const escapedTitle = escapeHtml(seo.title);
    const escapedDesc = escapeHtml(seo.description);
    const jsonLdData = JSON.stringify(seo.jsonLd(PRODUCTION_DOMAIN), null, 2);

    let html = rawTemplate;

    // 1. Replace <title>
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapedTitle}</title>`);

    // 2. Remove any template meta description / canonical / og tags
    html = html.replace(/<meta\s+name="description"[^>]*>/gi, '');
    html = html.replace(/<meta\s+name="keywords"[^>]*>/gi, '');
    html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
    html = html.replace(/<meta\s+property="og:[^>]*>/gi, '');
    html = html.replace(/<meta\s+name="twitter:[^>]*>/gi, '');

    // 3. Inject clean standards-based SEO head block
    const headInjection = `
    <!-- Canonical & SEO Metadata -->
    <meta name="description" content="${escapedDesc}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta property="og:title" content="${escapedTitle}" />
    <meta property="og:description" content="${escapedDesc}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="${seo.ogType}" />
    <meta property="og:site_name" content="Hikari no Matsuri 2027" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapedTitle}" />
    <meta name="twitter:description" content="${escapedDesc}" />
    <script type="application/ld+json">
${jsonLdData}
    </script>
`;

    html = html.replace('</head>', `${headInjection}\n</head>`);

    // 4. Render real React SSR markup inside <div id="root">
    const appMarkup = renderApp(routePath);
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${appMarkup}</div>`
    );

    // 5. Write to target path
    let targetFilePath: string;
    if (routePath === '/') {
      targetFilePath = path.join(distDir, 'index.html');
    } else {
      const cleanPath = routePath.replace(/^\//, '');
      const routeDir = path.join(distDir, cleanPath);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      targetFilePath = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(targetFilePath, html, 'utf-8');
    console.log(`[Prerender] ✓ Generated: ${routePath} -> ${path.relative(process.cwd(), targetFilePath)}`);
  }

  // 6. Generate clean 404.html
  const notFoundHtml = rawTemplate.replace(
    /<title>[\s\S]*?<\/title>/i,
    '<title>404 - Page Not Found | Hikari no Matsuri 2027</title>'
  ).replace(
    '</head>',
    '<meta name="robots" content="noindex, follow" />\n</head>'
  );
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8');
  console.log('[Prerender] ✓ Generated: /404.html');

  // 7. Clean up temporary SSR bundle
  if (fs.existsSync(ssrOutputDir)) {
    fs.rmSync(ssrOutputDir, { recursive: true, force: true });
    console.log('[Prerender] Cleaned up temporary SSR build artifacts');
  }

  console.log('[Prerender] All static pre-rendered routes generated successfully!');
}

runPrerender().catch((err) => {
  console.error('[Prerender] Fatal error:', err);
  process.exit(1);
});
