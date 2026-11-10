// Vercel Serverless Function: Create Pay-In via Divine Pay
export default async function handler(req, res) {
  // Set CORS and JSON headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
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
    const siteUrl = process.env.SITE_URL || 'https://www.cambridgelearning.in';

    if (!apiKey) {
      console.error('[DivinePay] Error: DIVINEPAY_API_KEY environment variable is missing.');
      return res.status(500).json({
        success: false,
        message: 'Payment gateway configuration error: DIVINEPAY_API_KEY is not configured on the server.'
      });
    }

    const {
      amount,
      courseTitle,
      courseId,
      customerName,
      customerEmail,
      customerPhone
    } = req.body || {};

    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return res.status(400).json({ success: false, message: 'A valid payment amount is required.' });
    }

    if (!customerEmail || !customerPhone) {
      return res.status(400).json({ success: false, message: 'Customer email and phone number are required.' });
    }

    // Generate unique merchant order reference
    const orderId = `CAM_${Date.now()}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const redirectUrl = `${siteUrl}/?payment=complete&order_id=${encodeURIComponent(orderId)}`;
    const webhookUrl = `${siteUrl}/api/webhook`;

    // Construct standard gateway payload
    const payload = {
      order_id: orderId,
      orderId: orderId,
      merchant_order_id: orderId,
      amount: Number(amount),
      currency: 'INR',
      customer_name: customerName || 'Valued Student',
      name: customerName || 'Valued Student',
      customer_email: customerEmail,
      email: customerEmail,
      customer_phone: customerPhone,
      phone: customerPhone,
      mobile: customerPhone,
      purpose: courseTitle || 'Cambridge Learning Certification',
      description: courseTitle || 'Course Enrollment',
      note: `Enrollment for ${courseTitle || 'Course'} (${courseId || 'general'})`,
      redirect_url: redirectUrl,
      return_url: redirectUrl,
      webhook_url: webhookUrl,
      callback_url: webhookUrl
    };

    console.log(`[DivinePay] Initiating pay-in for Order: ${orderId}, Amount: ₹${amount}`);

    const response = await fetch(payinUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'x-api-key': apiKey,
        'api-key': apiKey
      },
      body: JSON.stringify(payload)
    });

    const responseText = await response.text();
    let result = null;

    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.warn('[DivinePay] Response was not JSON:', responseText.slice(0, 300));
    }

    if (!response.ok) {
      console.error(`[DivinePay] Gateway returned HTTP ${response.status}:`, responseText);
      return res.status(response.status).json({
        success: false,
        message: result?.message || result?.error || `Gateway returned error status ${response.status}`,
        details: result || responseText
      });
    }

    // Extract checkout/payment URL from the gateway response
    const paymentUrl =
      result?.data?.payment_url ||
      result?.data?.paymentUrl ||
      result?.data?.checkout_url ||
      result?.data?.url ||
      result?.data?.link ||
      result?.data?.upi_intent ||
      result?.payment_url ||
      result?.paymentUrl ||
      result?.checkout_url ||
      result?.url ||
      result?.link ||
      result?.redirect_url;

    if (!paymentUrl) {
      console.warn('[DivinePay] Payment URL not found in standard fields. Full payload:', result);
      return res.status(200).json({
        success: true,
        orderId,
        data: result,
        message: 'Order initiated. Check details in response.'
      });
    }

    return res.status(200).json({
      success: true,
      orderId,
      paymentUrl,
      data: result
    });
  } catch (error) {
    console.error('[DivinePay] Internal Server Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while contacting payment gateway.'
    });
  }
}

