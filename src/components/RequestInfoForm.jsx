import React, { useState, useEffect } from 'react';

export default function RequestInfoForm({ preselectedCourse, onShowToast, onNavigatePolicy }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    formatInterests: ['Certificates'],
    timeline: 'Immediate',
    company: '',
    consent: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({
        ...prev,
        program: preselectedCourse
      }));
    }
  }, [preselectedCourse]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'formatInterest') {
      setFormData((prev) => {
        const current = [...prev.formatInterests];
        if (checked) {
          current.push(value);
        } else {
          const idx = current.indexOf(value);
          if (idx > -1) current.splice(idx, 1);
        }
        return { ...prev, formatInterests: current };
      });
    } else if (type === 'checkbox' && name === 'consent') {
      setFormData((prev) => ({ ...prev, consent: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your first name.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please enter your last name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid work or personal email.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid telephone number.';
    }

    if (!formData.program) {
      newErrors.program = 'Please select an academic discipline of interest.';
    }

    if (!formData.consent) {
      alert('Please agree to communications to receive your syllabus & discount.');
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onShowToast) {
        onShowToast('Inquiry submitted! Course syllabus & 30% voucher code sent to your email.');
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      program: '',
      formatInterests: ['Certificates'],
      timeline: 'Immediate',
      company: '',
      consent: true
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className="request-form-section" id="requestInfoSection">
      <div className="container">
        <div className="form-wrapper-box">
          <div className="form-header-area">
            <h2 className="section-heading red-underline">Request Information Now</h2>
            <p className="form-subtitle">Act today — upcoming course cohorts are filling fast.</p>
          </div>

          {!isSubmitted ? (
            <form id="cambridgeInquiryForm" className="inquiry-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="formFirstName">First Name *</label>
                  <div className="input-icon-wrap">
                    <input
                      type="text"
                      id="formFirstName"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <span className="field-icon">👤</span>
                  </div>
                  {errors.firstName && <span className="field-error">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="formLastName">Last Name *</label>
                  <div className="input-icon-wrap">
                    <input
                      type="text"
                      id="formLastName"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    <span className="field-icon">👤</span>
                  </div>
                  {errors.lastName && <span className="field-error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="formEmail">Email Address *</label>
                  <div className="input-icon-wrap">
                    <input
                      type="email"
                      id="formEmail"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <span className="field-icon">✉️</span>
                  </div>
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="formPhone">Phone Number *</label>
                  <div className="input-icon-wrap">
                    <input
                      type="tel"
                      id="formPhone"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <span className="field-icon">📞</span>
                  </div>
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="formProgram">I'm most interested in programs about: *</label>
                <div className="select-icon-wrap">
                  <select
                    id="formProgram"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a discipline of interest...</option>
                    <option value="AI & Modern Workflows">
                      AI & Modern Workflows (Generative AI, Prompt Engineering, Automation)
                    </option>
                    <option value="Construction: Project Management & Billing">
                      Construction: Project Management & Billing (Estimation, Tendering, Scheduling)
                    </option>
                    <option value="Construction: Site Operations & Safety">
                      Construction: Site Operations & Safety (Supervision, Quality, Safety)
                    </option>
                    <option value="Construction: Design Coordination & BIM">
                      Construction: Design Coordination & BIM (Revit, Blueprint, PEB)
                    </option>
                    <option value="Construction: Materials, Finishes & Tech">
                      Construction: Materials, Finishes & Tech (Concrete, Formwork, Fit-Out)
                    </option>
                    <option value="Corporate Operations & Logistics">
                      Corporate Operations & Logistics (Excel, Supply Chain, Six Sigma)
                    </option>
                  </select>
                </div>
                {errors.program && <span className="field-error">{errors.program}</span>}
              </div>

              {/* Format Interests */}
              <div className="form-group">
                <label className="section-label">I want to learn more about:</label>
                <div className="checkbox-pill-grid">
                  {[
                    { val: 'Certificates', label: 'Online Certificates' },
                    { val: 'Single Courses', label: 'Single Courses' },
                    { val: 'Workshops', label: 'Interactive Workshops' },
                    { val: 'Online Degrees', label: 'Online Degree Programs' },
                    { val: 'Team Programs', label: 'Programs for my Team' }
                  ].map((item) => (
                    <label key={item.val} className="custom-checkbox">
                      <input
                        type="checkbox"
                        name="formatInterest"
                        value={item.val}
                        checked={formData.formatInterests.includes(item.val)}
                        onChange={handleChange}
                      />
                      <span className="checkbox-box"></span>
                      <span className="checkbox-text">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="formTimeline">Desired Start Timeline</label>
                  <select
                    id="formTimeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="Immediate">Immediately (Next cohort)</option>
                    <option value="2-3 months">2 – 3 months</option>
                    <option value="4-6 months">4 – 6 months</option>
                    <option value="Exploring">Just researching</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="formCompany">Company / Organization</label>
                  <div className="input-icon-wrap">
                    <input
                      type="text"
                      id="formCompany"
                      name="company"
                      placeholder="Company (Optional)"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <span className="field-icon">🏢</span>
                  </div>
                </div>
              </div>

              {/* Consent Notice */}
              <div className="consent-box">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="formConsent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <span className="checkbox-box"></span>
                  <span className="checkbox-text">
                    By providing my contact info, I consent to receive communication from Cambridge Learning Services. I accept the terms in{' '}
                    <a 
                      href="/privacy-policy.html" 
                      onClick={(e) => {
                        if (onNavigatePolicy) {
                          e.preventDefault();
                          onNavigatePolicy('privacy');
                        }
                      }}
                    >
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a 
                      href="/terms-and-conditions.html" 
                      onClick={(e) => {
                        if (onNavigatePolicy) {
                          e.preventDefault();
                          onNavigatePolicy('terms');
                        }
                      }}
                    >
                      Terms & Conditions
                    </a>. *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-submit-wrap">
                <button
                  type="submit"
                  className="btn-submit"
                  id="btnSubmitForm"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Processing...' : 'Tell Me More!'}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>

              <div className="form-disclaimer">
                <p>
                  Discount code <strong>LEARN30</strong> (30% off prepayment) will be automatically applied to eligible certificate programs upon advisor contact.
                </p>
              </div>
            </form>
          ) : (
            <div id="formSuccessState" className="form-success-state">
              <div className="success-icon">✓</div>
              <h3>Thank You for Your Request!</h3>
              <p>
                A Cambridge Learning Services admissions advisor has received your details and will send your personalized course catalog, cohort start dates, and 30% discount details to your email shortly.
              </p>
              <button type="button" className="btn-secondary" onClick={handleReset}>
                Submit Another Inquiry
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
