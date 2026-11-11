import React, { useState, useEffect } from 'react';
import { evaluateCoupon } from '../data/coupons';

export default function CheckoutModal({ course, isOpen, onClose, onShowToast }) {
  if (!isOpen || !course) return null;

  // Extract clean numerical amount from price string (e.g., "₹45,000/-" -> 45000)
  const parseAmount = (priceStr) => {
    if (!priceStr) return 45000;
    const cleaned = priceStr.toString().replace(/[^0-9]/g, '');
    const num = parseInt(cleaned, 10);
    return isNaN(num) || num <= 0 ? 45000 : num;
  };

  const originalAmount = parseAmount(course.price);

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Coupon state
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  // Auto-detect promo/coupon query parameter from URL if present
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlCoupon = params.get('coupon') || params.get('promo') || params.get('code');
      if (urlCoupon && !appliedCoupon) {
        const result = evaluateCoupon(urlCoupon, originalAmount);
        if (result.isValid) {
          setCouponInput(result.code);
          setAppliedCoupon(result);
          setCouponSuccess(result.message);
          if (onShowToast) {
            onShowToast(`🎟️ ${result.message}`);
          }
        }
      }
    }
  }, [isOpen, originalAmount]);

  // Compute final payable amount
  const finalAmount = appliedCoupon ? appliedCoupon.finalPrice : originalAmount;
  const savings = appliedCoupon ? Math.max(0, originalAmount - finalAmount) : 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleApplyCoupon = (e) => {
    if (e) e.preventDefault();
    setCouponError('');
    setCouponSuccess('');

    if (!couponInput.trim()) {
      setCouponError('Please enter a coupon code.');
      return;
    }

    const result = evaluateCoupon(couponInput, originalAmount);
    if (result.isValid) {
      setAppliedCoupon(result);
      setCouponSuccess(result.message);
      if (onShowToast) {
        onShowToast(`🎉 Coupon applied! Price is now ₹${result.finalPrice.toLocaleString('en-IN')}`);
      }
    } else {
      setCouponError(result.message);
      setAppliedCoupon(null);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput('');
    setCouponError('');
    setCouponSuccess('');
    if (onShowToast) {
      onShowToast('Coupon removed. Standard price restored.');
    }
  };

  const handleProceedToPayment = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: finalAmount,
          couponCode: appliedCoupon ? appliedCoupon.code : undefined,
          courseId: course.id,
          courseTitle: course.title,
          customerName: formData.name.trim(),
          customerEmail: formData.email.trim()
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Payment initiation failed. Please try again.');
      }

      if (data.paymentUrl) {
        if (onShowToast) {
          onShowToast('Redirecting to secure Divine Pay checkout...');
        }
        window.location.href = data.paymentUrl;
      } else {
        throw new Error('No payment URL received from gateway.');
      }
    } catch (err) {
      console.error('[Checkout Error]:', err);
      setErrorMessage(err.message || 'Could not connect to payment gateway. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="program-modal-overlay" 
      role="dialog" 
      aria-modal="true"
      style={{ display: 'flex', zIndex: 99999 }}
      onClick={(e) => {
        if (e.target.classList.contains('program-modal-overlay')) onClose();
      }}
    >
      <div 
        className="program-modal-card" 
        style={{ 
          maxWidth: '560px', 
          width: '94%',
          maxHeight: '92vh', 
          overflowY: 'auto',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        <button 
          type="button" 
          className="btn-close-program-modal" 
          onClick={onClose}
          aria-label="Close Checkout"
        >
          &times;
        </button>

        {/* Header */}
        <div className="program-modal-header" style={{ paddingBottom: '16px' }}>
          <div className="modal-brand-row">
            <img 
              src="/assets/cambridge-icon.png" 
              alt="Cambridge" 
              className="modal-header-icon" 
              width="26" 
              height="26" 
            />
            <span className="modal-category-badge" style={{ background: '#ecfdf5', color: '#065f46' }}>
              🔒 256-Bit SSL Encrypted Checkout
            </span>
          </div>
          <h2 style={{ fontSize: '1.4rem', marginTop: '10px', marginBottom: '4px' }}>
            Instant Program Enrollment
          </h2>
          <p className="modal-prog-subtitle" style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Powered by Divine Pay &bull; UPI, Credit/Debit Cards, NetBanking
          </p>
        </div>

        <div className="program-modal-body" style={{ paddingTop: '8px' }}>
          {/* Course Summary Box */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '16px'
          }}>
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              color: '#991b1b', 
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Selected Certification
            </span>
            <h4 style={{ 
              margin: '4px 0 8px 0', 
              color: '#0f172a', 
              fontSize: '1.05rem', 
              lineHeight: 1.4 
            }}>
              {course.title}
            </h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                ⏱️ {course.duration || 'Flexible Self-Paced'}
              </span>
              <div>
                {appliedCoupon ? (
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      color: '#94a3b8', 
                      textDecoration: 'line-through',
                      marginRight: '8px',
                      fontWeight: 500
                    }}>
                      ₹{originalAmount.toLocaleString('en-IN')}
                    </span>
                    <span style={{ 
                      fontSize: '1.35rem', 
                      fontWeight: 800, 
                      color: '#15803d' 
                    }}>
                      ₹{finalAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                ) : (
                  <span style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 800, 
                    color: '#0f172a' 
                  }}>
                    ₹{originalAmount.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
            </div>

            {/* Applied Coupon Info Banner inside summary */}
            {appliedCoupon && (
              <div style={{
                marginTop: '12px',
                paddingTop: '10px',
                borderTop: '1px dashed #cbd5e1',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.82rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{
                    background: '#dcfce7',
                    color: '#166534',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '0.78rem'
                  }}>
                    🏷️ {appliedCoupon.code}
                  </span>
                  <span style={{ color: '#15803d', fontWeight: 600 }}>
                    Savings: ₹{savings.toLocaleString('en-IN')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveCoupon}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ef4444',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'underline'
                  }}
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Smart Coupon Code Box */}
          <div style={{
            background: appliedCoupon ? '#f0fdf4' : '#ffffff',
            border: appliedCoupon ? '1px solid #bbf7d0' : '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '14px',
            marginBottom: '18px',
            transition: 'all 0.2s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label 
                htmlFor="checkoutCouponInput"
                style={{ 
                  fontSize: '0.84rem', 
                  fontWeight: 600, 
                  color: '#334155', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px' 
                }}
              >
                <span>🎟️</span> Have a Coupon Code?
              </label>
              {appliedCoupon ? (
                <span style={{ fontSize: '0.76rem', color: '#16a34a', fontWeight: 700 }}>
                  ✓ ACTIVE DISCOUNT
                </span>
              ) : (
                <span style={{ fontSize: '0.74rem', color: '#64748b' }}>
                  Enter code & click Apply
                </span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                id="checkoutCouponInput"
                type="text"
                value={couponInput}
                onChange={(e) => {
                  setCouponInput(e.target.value);
                  if (couponError) setCouponError('');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleApplyCoupon();
                  }
                }}
                placeholder="Enter coupon code"
                disabled={Boolean(appliedCoupon)}
                style={{
                  flex: 1,
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: couponError ? '1px solid #ef4444' : '1px solid #cbd5e1',
                  fontSize: '0.9rem',
                  outline: 'none',
                  textTransform: 'uppercase',
                  background: appliedCoupon ? '#f8fafc' : '#ffffff',
                  color: '#1e293b'
                }}
              />
              {appliedCoupon ? (
                <button
                  type="button"
                  onClick={handleRemoveCoupon}
                  style={{
                    padding: '9px 16px',
                    borderRadius: '8px',
                    border: '1px solid #fca5a5',
                    background: '#fef2f2',
                    color: '#991b1b',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  disabled={!couponInput.trim()}
                  style={{
                    padding: '9px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    background: couponInput.trim() ? '#0f172a' : '#94a3b8',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: couponInput.trim() ? 'pointer' : 'not-allowed',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.2s ease'
                  }}
                >
                  Apply
                </button>
              )}
            </div>

            {/* Error Message */}
            {couponError && (
              <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '7px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>⚠️</span> {couponError}
              </div>
            )}

            {/* Success Message */}
            {couponSuccess && !couponError && (
              <div style={{ color: '#15803d', fontSize: '0.8rem', marginTop: '7px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>✅</span> {couponSuccess}
              </div>
            )}
          </div>

          {/* Payment Gateway Error Notice */}
          {errorMessage && (
            <div style={{
              background: '#fef2f2',
              color: '#991b1b',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '0.88rem',
              marginBottom: '16px',
              border: '1px solid #fecaca'
            }}>
              ⚠️ {errorMessage}
            </div>
          )}

          {/* Enrollment Form */}
          <form onSubmit={handleProceedToPayment}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Sarah Jenkins"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  border: errors.name ? '1px solid #ef4444' : '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {errors.name && (
                <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                  {errors.name}
                </span>
              )}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                Email Address (For Certificate & Course Access) *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. sarah.jenkins@example.com"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  border: errors.email ? '1px solid #ef4444' : '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {errors.email && (
                <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                  {errors.email}
                </span>
              )}
            </div>

            <div className="modal-action-bar" style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: isLoading 
                    ? '#94a3b8' 
                    : appliedCoupon 
                      ? 'linear-gradient(135deg, #15803d 0%, #166534 100%)' 
                      : 'linear-gradient(135deg, #a81c1c 0%, #7f1d1d 100%)',
                  color: '#ffffff',
                  padding: '13px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: appliedCoupon 
                    ? '0 4px 12px rgba(22, 101, 52, 0.25)' 
                    : '0 4px 12px rgba(168, 28, 28, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                {isLoading ? (
                  <>
                    <span style={{ display: 'inline-block', animation: 'spin 1s infinite linear' }}>⏳</span>
                    Connecting to Divine Pay...
                  </>
                ) : (
                  <>
                    <span>Pay ₹{finalAmount.toLocaleString('en-IN')} Securely</span> &rarr;
                  </>
                )}
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={onClose}
                disabled={isLoading}
                style={{
                  padding: '13px 18px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  background: '#f8fafc',
                  color: '#475569',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>

            <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '0.78rem', color: '#94a3b8' }}>
              🛡️ Official Cambridge Learning Services payment processing via Divine Pay.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
