import crypto from 'crypto';

// Vercel Serverless Function: Divine Pay Webhook Listener
export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-divinepay-signature');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Health-check / test route
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'active',
      service: 'Cambridge Learning Services - Divine Pay Webhook Endpoint',
      timestamp: new Date().toISOString()
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body || '{}');

    console.log('[DivinePay Webhook] Received notification:', JSON.stringify(body, null, 2));

    // Signature verification (if webhook secret is configured)
    const webhookSecret = process.env.DIVINEPAY_WEBHOOK_SECRET;
    const incomingSignature = req.headers['x-divinepay-signature'];

    if (webhookSecret && incomingSignature) {
      try {
        const expectedSignature = crypto
          .createHmac('sha256', webhookSecret)
          .update(rawBody)
          .digest('hex');

        if (incomingSignature !== expectedSignature) {
          console.warn('[DivinePay Webhook] Invalid signature detected.');
          // Log but continue or reject based on strictness
        } else {
          console.log('[DivinePay Webhook] Signature verified successfully.');
        }
      } catch (err) {
        console.error('[DivinePay Webhook] Signature verification error:', err.message);
      }
    }

    // Extract payment details
    const orderId = body.order_id || body.orderId || body.merchant_order_id || body.data?.order_id;
    const status = (body.status || body.payment_status || body.data?.status || '').toLowerCase();
    const amount = body.amount || body.data?.amount;
    const utr = body.utr || body.transaction_id || body.data?.utr;

    console.log(`[DivinePay Webhook] Order: ${orderId} | Status: ${status} | Amount: ${amount} | UTR: ${utr}`);

    // Return 200 OK to Divine Pay so they know the webhook was successfully processed
    return res.status(200).json({
      success: true,
      message: 'Webhook received successfully',
      orderId,
      status
    });
  } catch (error) {
    console.error('[DivinePay Webhook] Processing Error:', error);
    // Returning 200 to acknowledge delivery and prevent continuous retries
    return res.status(200).json({
      success: false,
      error: error.message
    });
  }
}

