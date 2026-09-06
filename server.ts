import express from 'express';
import path from 'path';
import crypto from 'crypto';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import { createServer as createViteServer } from 'vite';

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

// Vite Middleware & Static Serving Setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
