import React, { useState } from 'react';

export default function CheckoutModal({ course, isOpen, onClose, onShowToast }) {
  if (!isOpen || !course) return null;

  // Extract clean numerical amount from price string (e.g., "₹45,000/-" -> 45000)
  const parseAmount = (priceStr) => {
    if (!priceStr) return 45000;
    const cleaned = priceStr.toString().replace(/[^0-9]/g, '');
    const num = parseInt(cleaned, 10);
    return isNaN(num) || num <= 0 ? 45000 : num;
  };

  const amount = parseAmount(course.price);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
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
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
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
          amount,
          courseId: course.id,
          courseTitle: course.title,
          customerName: formData.name.trim(),
          customerEmail: formData.email.trim(),
          customerPhone: formData.phone.trim()
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
            marginBottom: '20px'
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
              <span style={{ 
                fontSize: '1.3rem', 
                fontWeight: 800, 
                color: '#0f172a' 
              }}>
                ₹{amount.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Error Notice */}
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

            <div style={{ marginBottom: '14px' }}>
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

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                Mobile Number (For Payment & UPI Confirmation) *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="e.g. 9876543210"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  border: errors.phone ? '1px solid #ef4444' : '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {errors.phone && (
                <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="modal-action-bar" style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: isLoading ? '#94a3b8' : 'linear-gradient(135deg, #a81c1c 0%, #7f1d1d 100%)',
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
                  boxShadow: '0 4px 12px rgba(168, 28, 28, 0.25)',
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
                    <span>Pay ₹{amount.toLocaleString('en-IN')} Securely</span> &rarr;
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

