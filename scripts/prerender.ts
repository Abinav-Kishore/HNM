/**
 * Static Site Generation (SSG) Pre-render Script for Vercel & Production
 * Runs after `vite build` to inject route-specific titles, meta descriptions,
 * canonical links, Open Graph, Twitter cards, Schema.org JSON-LD,
 * and semantic HTML for all public routes into static HTML files.
 */

import fs from 'fs';
import path from 'path';
import { SEO_ROUTES } from '../src/seo/routesSeo';

const PRODUCTION_DOMAIN = 'https://hnm3.vercel.app';
const distDir = path.resolve(process.cwd(), 'dist');

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function runPrerender() {
  console.log('[Prerender] Starting SSG Prerender for Vercel deployment...');

  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Base template ${templatePath} not found! Run 'vite build' first.`);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');

  for (const [routePath, seo] of Object.entries(SEO_ROUTES)) {
    const canonicalUrl = `${PRODUCTION_DOMAIN}${seo.canonicalPath}`;
    const escapedTitle = escapeHtml(seo.title);
    const escapedDesc = escapeHtml(seo.description);
    const escapedKeywords = escapeHtml(seo.keywords.join(', '));
    const jsonLdData = JSON.stringify(seo.jsonLd(PRODUCTION_DOMAIN), null, 2);

    let html = rawTemplate;

    // 1. Replace <title>
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapedTitle}</title>`);

    // 2. Remove any existing meta description / canonical / og tags to avoid duplicates
    html = html.replace(/<meta\s+name="description"[^>]*>/gi, '');
    html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
    html = html.replace(/<meta\s+property="og:[^>]*>/gi, '');
    html = html.replace(/<meta\s+name="twitter:[^>]*>/gi, '');

    // 3. Inject full SEO head block
    const headInjection = `
    <!-- Production SEO & Social Cards -->
    <meta name="description" content="${escapedDesc}" />
    <meta name="keywords" content="${escapedKeywords}" />
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

    // 4. Inject semantic HTML inside <div id="root"></div>
    const prerenderedContent = seo.prerenderedHtml(PRODUCTION_DOMAIN);
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">\n${prerenderedContent}\n</div>`
    );

    // 5. Determine target file path
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
    console.log(`[Prerender] Generated static page for route: ${routePath} -> ${path.relative(process.cwd(), targetFilePath)}`);
  }

  // Generate 404.html
  const notFoundHtml = rawTemplate.replace(
    /<title>[\s\S]*?<\/title>/i,
    '<title>404 - Page Not Found | Hikari no Matsuri 2027</title>'
  ).replace(
    '</head>',
    '<meta name="robots" content="noindex, follow" />\n</head>'
  ).replace(
    '<div id="root"></div>',
    `<div id="root">
      <div class="min-h-screen bg-[#08080A] text-white flex flex-col items-center justify-center p-8 text-center font-sans">
        <span class="text-xs font-mono text-red-500 uppercase tracking-widest bg-red-950/60 border border-red-500/30 px-3 py-1 rounded-full mb-4">Error 404</span>
        <h1 class="text-4xl font-extrabold mb-2">Page Not Found</h1>
        <p class="text-zinc-400 max-w-md mb-6">The requested page does not exist or has moved. Return to the festival portal.</p>
        <a href="/" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors">Return to Home</a>
      </div>
    </div>`
  );
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8');
  console.log('[Prerender] Generated 404.html');

  console.log('[Prerender] SSG Prerendering completed successfully for all routes!');
}

runPrerender().catch((err) => {
  console.error('[Prerender] Failed:', err);
  process.exit(1);
});
