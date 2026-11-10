// Vercel Serverless Function: Create Pay-In via Divine Pay
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed. Use POST.' });
  }

  try {
    const apiKey = process.env.DIVINEPAY_API_KEY;
    const payinUrl = process.env.DIVINEPAY_PAYIN_URL || 'https://divinepay.us.cc/api/payin/payin/create';

    if (!apiKey) {
      console.error('[DivinePay] Error: DIVINEPAY_API_KEY is not configured in environment variables.');
      return res.status(500).json({
        success: false,
        message: 'Payment gateway configuration error: DIVINEPAY_API_KEY is not configured on the server.'
      });
    }

    const { amount, courseTitle, customerName, customerEmail, customerPhone } = req.body || {};

    const numericAmount = Number(amount);
    if (!numericAmount || isNaN(numericAmount) || numericAmount <= 0) {
      return res.status(400).json({ success: false, message: 'A valid numeric payment amount is required.' });
    }

    console.log(`[DivinePay] Initiating Pay-In for ₹${numericAmount} (${customerName || 'Student'}, ${courseTitle || 'Course'})`);

    // Divine Pay exact API contract: only accepts { amount } with "x-api-key" header
    const response = await fetch(payinUrl, {
      method: 'POST',
      headers: {
        'x-api-key': apiKey.trim(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: numericAmount
      })
    });

    const responseText = await response.text();
    let result = null;

    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.warn('[DivinePay] Response text:', responseText);
    }

    if (!response.ok || (result && result.success === false)) {
      console.error(`[DivinePay] API returned error:`, responseText);
      return res.status(response.status || 400).json({
        success: false,
        message: result?.message || 'Unable to create payment order. Please verify credentials.',
        details: result || responseText
      });
    }

    // Extract paymentUrl and order_id as documented
    const paymentUrl = result?.data?.paymentUrl || result?.data?.payment_url;
    const orderId = result?.data?.order_id || result?.order_id;

    if (!paymentUrl) {
      console.error('[DivinePay] paymentUrl missing in success response:', result);
      return res.status(500).json({
        success: false,
        message: 'Payment URL not found in gateway response.',
        details: result
      });
    }

    return res.status(200).json({
      success: true,
      message: result?.message || 'Pay-in order created',
      orderId,
      paymentUrl,
      data: result?.data
    });
  } catch (error) {
    console.error('[DivinePay] Server Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Internal server error while connecting to Divine Pay.'
    });
  }
}
