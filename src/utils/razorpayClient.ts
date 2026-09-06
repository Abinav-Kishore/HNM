import {
  RazorpayOrderResponse,
  RazorpayPaymentSuccessResponse,
  RazorpayVerifyResponse,
  RazorpayOptions,
} from '../types';

/**
 * Ensures Razorpay SDK checkout.js is loaded into the document.
 */
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && window.Razorpay) {
      resolve(true);
      return;
    }

    const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(true));
      existingScript.addEventListener('error', () => resolve(false));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * Step 1: Call Backend to create an order
 */
export async function createRazorpayOrder(params: {
  amountInPaise: number;
  currency?: string;
  receipt?: string;
  notes?: Record<string, string>;
}): Promise<RazorpayOrderResponse> {
  const response = await fetch('/api/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: params.amountInPaise,
      currency: params.currency || 'INR',
      receipt: params.receipt,
      notes: params.notes,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || errorData.error || `Failed to create Razorpay order (${response.status})`);
  }

  return response.json();
}

/**
 * Step 3: Call Backend to verify the payment signature
 */
export async function verifyRazorpayPayment(params: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}): Promise<RazorpayVerifyResponse> {
  const response = await fetch('/api/verify-payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success) {
    throw new Error(data.message || data.error || 'Payment signature verification failed');
  }

  return data;
}

export interface InitiateCheckoutParams {
  amountInRupees: number;
  ticketName: string;
  passDetails: {
    tierId: string;
    quantity: number;
    name: string;
    email: string;
    phone?: string;
    eventDate: string;
  };
  onSuccess: (paymentData: {
    paymentId: string;
    orderId: string;
    signature: string;
  }) => void;
  onDismiss?: () => void;
  onError?: (error: Error) => void;
}

/**
 * Step 2: Open Razorpay Standard Checkout Modal
 */
export async function initiateRazorpayCheckout({
  amountInRupees,
  ticketName,
  passDetails,
  onSuccess,
  onDismiss,
  onError,
}: InitiateCheckoutParams): Promise<void> {
  try {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded || !window.Razorpay) {
      throw new Error('Razorpay Checkout SDK failed to load. Please check your network connection.');
    }

    // Convert amount to paise (1 INR = 100 paise)
    const amountInPaise = Math.round(amountInRupees * 100);

    // 1. Create order on backend
    const orderData = await createRazorpayOrder({
      amountInPaise,
      currency: 'INR',
      receipt: `hnm_${passDetails.tierId}_${Date.now()}`,
      notes: {
        festival: 'Hikari no Matsuri 2027',
        tier: ticketName,
        attendeeName: passDetails.name,
        attendeeEmail: passDetails.email,
        quantity: String(passDetails.quantity),
      },
    });

    const keyId =
      orderData.key_id ||
      import.meta.env.VITE_RAZORPAY_KEY_ID ||
      'rzp_test_TYlQrMDyeZNWja';

    // 2. Configure standard Razorpay checkout options
    const options: RazorpayOptions = {
      key: keyId,
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'Hikari no Matsuri (光の祭り)',
      description: `${ticketName} (${passDetails.quantity} Pass${passDetails.quantity > 1 ? 'es' : ''})`,
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=200&q=80',
      order_id: orderData.order_id,
      prefill: {
        name: passDetails.name,
        email: passDetails.email,
        contact: passDetails.phone || '',
      },
      notes: {
        tier_name: ticketName,
        event_date: passDetails.eventDate,
      },
      theme: {
        color: '#dc2626', // Vermilion / Red festival theme
      },
      modal: {
        ondismiss: () => {
          if (onDismiss) onDismiss();
        },
      },
      handler: async (response: RazorpayPaymentSuccessResponse) => {
        try {
          // 3. Verify signature on backend
          await verifyRazorpayPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          // Callback on verified success
          onSuccess({
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
          });
        } catch (verifyError: any) {
          if (onError) onError(verifyError);
        }
      },
    };

    const rzp = new window.Razorpay(options);

    // Handle payment failure event
    rzp.on('payment.failed', (response: any) => {
      console.error('Razorpay Payment Failed:', response.error);
      const err = new Error(
        response.error?.description || response.error?.reason || 'Payment was unsuccessful or cancelled.'
      );
      if (onError) onError(err);
    });

    rzp.open();
  } catch (err: any) {
    console.error('Checkout Initiation Error:', err);
    if (onError) onError(err);
  }
}
