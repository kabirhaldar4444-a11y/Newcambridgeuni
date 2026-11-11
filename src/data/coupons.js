/**
 * Cambridge Learning Services - Coupon & Voucher Rules
 */

export const COUPONS_CONFIG = {
  cambridgetest10: {
    code: 'cambridgetest10',
    type: 'fixed_price',
    price: 10,
    label: 'Voucher Applied',
    description: 'Promotional voucher applied - price updated to ₹10.'
  },
  cambridgetest100: {
    code: 'cambridgetest100',
    type: 'fixed_price',
    price: 100,
    label: 'Voucher Applied',
    description: 'Promotional voucher applied - price updated to ₹100.'
  }
};

/**
 * Validate a coupon code and calculate the final price.
 * 
 * @param {string} rawCode - User entered coupon code
 * @param {number} originalPrice - Original numeric price of the course
 * @returns {{
 *   isValid: boolean,
 *   code: string,
 *   finalPrice: number,
 *   discountAmount: number,
 *   description?: string,
 *   message: string
 * }}
 */
export function evaluateCoupon(rawCode, originalPrice = 45000) {
  if (!rawCode || typeof rawCode !== 'string' || !rawCode.trim()) {
    return {
      isValid: false,
      code: '',
      finalPrice: originalPrice,
      discountAmount: 0,
      message: 'Please enter a coupon code.'
    };
  }

  const normalized = rawCode.trim().toLowerCase();
  const coupon = COUPONS_CONFIG[normalized];

  if (!coupon) {
    return {
      isValid: false,
      code: rawCode.trim(),
      finalPrice: originalPrice,
      discountAmount: 0,
      message: `"${rawCode.trim()}" is not a valid coupon code.`
    };
  }

  let finalPrice = originalPrice;
  if (coupon.type === 'fixed_price') {
    finalPrice = coupon.price;
  }

  const discountAmount = Math.max(0, originalPrice - finalPrice);

  return {
    isValid: true,
    code: coupon.code,
    finalPrice,
    discountAmount,
    label: coupon.label,
    description: coupon.description,
    message: `Coupon "${coupon.code}" applied! Price is now ₹${finalPrice.toLocaleString('en-IN')}.`
  };
}

