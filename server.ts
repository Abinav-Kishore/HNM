import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import { createServer as createViteServer } from 'vite';
import { SEO_ROUTES, getSeoMetadata } from './src/seo/routesSeo';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper to initialize Razorpay instance lazily
function getRazorpayInstance() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error('Razorpay credentials (RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET) are missing.');
  }

  return {
    instance: new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    }),
    keyId,
    keySecret,
  };
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Razorpay public config endpoint (returns only key_id, never key_secret)
app.get('/api/razorpay/config', (req, res) => {
  const keyId = process.env.RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID || '';
  res.json({ key_id: keyId });
});

/**
 * STEP 1: BACKEND - Create Order
 * Endpoint: POST /api/create-order
 * Request body: { amount (in paise or rupees), currency, receipt, notes }
 * Minimum amount: 100 paise
 */
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt, notes } = req.body;

    if (!amount || typeof amount !== 'number' || isNaN(amount)) {
      return res.status(400).json({
        error: 'Invalid amount',
        message: 'Amount is required and must be a valid number.',
      });
    }

    // Ensure amount is at least 100 paise (1 INR)
    const amountInPaise = Math.round(amount);
    if (amountInPaise < 100) {
      return res.status(400).json({
        error: 'Amount too low',
        message: 'Minimum amount must be at least 100 paise (₹1.00).',
      });
    }

    let razorpayObj;
    try {
      razorpayObj = getRazorpayInstance();
    } catch (authErr: any) {
      console.error('Razorpay Auth Config Error:', authErr.message);
      return res.status(401).json({
        error: 'Authentication failure',
        message: authErr.message || 'Razorpay credentials not configured properly.',
      });
    }

    const options = {
      amount: amountInPaise,
      currency: (currency || 'INR').toUpperCase(),
      receipt: receipt || `rcpt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      notes: notes || {},
    };

    const order = await razorpayObj.instance.orders.create(options);

    return res.status(200).json({
      success: true,
      order_id: order.id,
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      key_id: razorpayObj.keyId,
    });
  } catch (error: any) {
    console.error('Razorpay Order Creation Error:', error);
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({
      error: 'Order creation failed',
      message: error.error?.description || error.message || 'Internal Server Error creating Razorpay order',
    });
  }
});

/**
 * STEP 3: BACKEND - Verify Signature
 * Endpoint: POST /api/verify-payment
 * Algorithm: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
 * Compare generated signature with razorpay_signature
 */
app.post('/api/verify-payment', (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Check for missing fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters',
        message: 'razorpay_order_id, razorpay_payment_id, and razorpay_signature are all required.',
      });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return res.status(500).json({
        success: false,
        error: 'Server configuration error',
        message: 'RAZORPAY_KEY_SECRET is not configured on the server.',
      });
    }

    // Generate expected signature: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
    const textToSign = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(textToSign)
      .digest('hex');

    // Secure comparison
    const isValidSignature = crypto.timingSafeEqual(
      Buffer.from(expectedSignature, 'utf-8'),
      Buffer.from(razorpay_signature, 'utf-8')
    );

    if (isValidSignature) {
      console.log(`[Payment Verified] Order: ${razorpay_order_id}, Payment: ${razorpay_payment_id}`);
      return res.status(200).json({
        success: true,
        message: 'Payment signature verified successfully!',
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id,
      });
    } else {
      console.warn(`[Payment Mismatch] Signatures do not match for Order: ${razorpay_order_id}`);
      return res.status(400).json({
        success: false,
        error: 'Signature mismatch',
        message: 'Invalid payment signature. Payment verification failed.',
      });
    }
  } catch (error: any) {
    console.error('Razorpay Signature Verification Error:', error);
    return res.status(400).json({
      success: false,
      error: 'Verification error',
      message: error.message || 'Error occurred while verifying payment signature.',
    });
  }
});

// HTML Entity escape helper for safe tag attribute injection
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const PRODUCTION_DOMAIN = 'https://hnm3.vercel.app';

function getBaseUrl(req: express.Request): string {
  if (process.env.CANONICAL_DOMAIN) {
    return process.env.CANONICAL_DOMAIN;
  }
  const host = req.get('host') || '';
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    const protocol = req.headers['x-forwarded-proto'] || req.protocol || 'http';
    return `${protocol}://${host}`;
  }
  return PRODUCTION_DOMAIN;
}

/**
 * SEO Route: robots.txt
 * Serves clean, standard crawler instructions with sitemap location
 */
app.get('/robots.txt', (req, res) => {
  const baseUrl = getBaseUrl(req);
  const sitemapDomain = (baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1')) ? baseUrl : PRODUCTION_DOMAIN;

  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapDomain}/sitemap.xml`,
  ].join('\n');

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(robotsTxt);
});

/**
 * SEO Route: sitemap.xml
 * Dynamically generated XML sitemap listing all public, indexable festival pages
 */
app.get('/sitemap.xml', (req, res) => {
  const baseUrl = getBaseUrl(req);
  const sitemapDomain = (baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1')) ? baseUrl : PRODUCTION_DOMAIN;
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = Object.values(SEO_ROUTES)
    .filter((route) => route.isIndexable)
    .map((route) => {
      return `  <url>
    <loc>${sitemapDomain}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(2)}</priority>
  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.status(200).send(sitemapXml);
});

/**
 * Unified SEO & HTML Page Handler
 * In production: serves the pre-rendered static HTML file if present.
 * In development: transforms template with Vite and injects route-specific metadata.
 */
async function handlePageRequest(req: express.Request, res: express.Response, vite?: any) {
  const baseUrl = getBaseUrl(req);
  const canonicalBase = (baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1')) ? baseUrl : PRODUCTION_DOMAIN;

  const urlPath = req.path;
  const seo = getSeoMetadata(urlPath, canonicalBase);

  // In production, check if a pre-rendered static page exists in dist/
  if (!vite) {
    const distPath = path.join(process.cwd(), 'dist');
    const cleanPath = urlPath === '/' ? '' : urlPath.replace(/^\//, '');
    const staticFilePath = urlPath === '/' 
      ? path.join(distPath, 'index.html') 
      : path.join(distPath, cleanPath, 'index.html');

    if (fs.existsSync(staticFilePath)) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(200).sendFile(staticFilePath);
    }
  }

  let template: string;
  try {
    if (vite) {
      template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(req.originalUrl, template);
    } else {
      const distPath = path.join(process.cwd(), 'dist');
      template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');
    }
  } catch (err: any) {
    console.error('Error loading index.html template:', err);
    return res.status(500).send('Internal Server Error loading template');
  }

  // If this is a valid public SEO route
  if (seo) {
    const canonicalUrl = `${canonicalBase}${seo.canonicalPath}`;
    const escapedTitle = escapeHtml(seo.title);
    const escapedDesc = escapeHtml(seo.description);
    const jsonLdData = JSON.stringify(seo.jsonLd(baseUrl), null, 2);

    // Replace <title>
    template = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapedTitle}</title>`);

    // Clean metadata tags block
    const headTags = `
    <!-- Dynamic SEO & Social Metadata -->
    <meta name="description" content="${escapedDesc}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta property="og:title" content="${escapedTitle}" />
    <meta property="og:description" content="${escapedDesc}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="${seo.ogType}" />
    <meta property="og:site_name" content="Hikari no Matsuri" />
    <meta property="og:image" content="${PRODUCTION_DOMAIN}/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapedTitle}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapedTitle}" />
    <meta name="twitter:description" content="${escapedDesc}" />
    <meta name="twitter:image" content="${PRODUCTION_DOMAIN}/og-image.jpg" />
    <meta name="twitter:image:alt" content="${escapedTitle}" />
    <script type="application/ld+json">
${jsonLdData}
    </script>
`;

    // Inject metadata before </head>
    template = template.replace('</head>', `${headTags}\n</head>`);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(template);
  }

  // If the path has a file extension (e.g. missing asset), return 404
  if (path.extname(urlPath)) {
    return res.status(404).send('Asset not found');
  }

  // Non-matching HTML route: Return 404 with fallback page
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(404).send(template);
}

// Vite Middleware & Static Serving Setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
    app.get('*', async (req, res, next) => {
      try {
        await handlePageRequest(req, res, vite);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    // Serve static files, but let HTML navigation routes pass to handlePageRequest
    app.use(express.static(distPath, { index: false }));
    app.get('*', async (req, res) => {
      await handlePageRequest(req, res);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
