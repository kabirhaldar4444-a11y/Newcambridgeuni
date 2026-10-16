import React, { useState } from 'react';

export default function MobileDrawer({
  isOpen,
  onClose,
  onScrollToSection,
  onSearch,
  onNavigatePrograms,
  onNavigatePolicy
}) {
  const [searchValue, setSearchValue] = useState('');

  const handleLinkClick = (sectionId, e) => {
    e.preventDefault();
    onClose();
    if (onScrollToSection) onScrollToSection(sectionId);
  };

  const handleProgramsClick = (catId, e) => {
    e.preventDefault();
    onClose();
    if (onNavigatePrograms) {
      onNavigatePrograms(catId || 'all', '', true);
    } else if (onScrollToSection) {
      onScrollToSection('programFinderSection');
    }
  };

  const handlePolicyClick = (policyKey, e) => {
    e.preventDefault();
    onClose();
    if (onNavigatePolicy) onNavigatePolicy(policyKey);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClose();
      if (onNavigatePrograms) {
        onNavigatePrograms('all', searchValue);
      } else {
        if (onSearch) onSearch(searchValue);
        if (onScrollToSection) onScrollToSection('programFinderSection');
      }
    }
  };

  return (
    <>
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`} id="mobileDrawer">
        <div className="mobile-drawer-header">
          <img 
            src="/assets/cambridge-logo.png" 
            alt="Cambridge Learning Services" 
            className="drawer-logo" 
            width="180" 
          />
          <button 
            type="button" 
            className="drawer-close" 
            id="btnCloseDrawer" 
            aria-label="Close menu"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="mobile-search-box">
          <input 
            type="text" 
            id="mobileSearchInput" 
            placeholder="Search certificates, AI, Finance..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
        </div>

        <ul className="drawer-nav">
          <li>
            <a href="/programs" className="drawer-link" onClick={(e) => handleProgramsClick('all', e)}>
              🎓 All Programs & Certifications
            </a>
          </li>
          <li>
            <a href="#sideBySideCategories" className="drawer-link" onClick={(e) => handleLinkClick('sideBySideCategories', e)}>
              Programs by Category
            </a>
          </li>
          <li>
            <a href="#howItWorksSection" className="drawer-link" onClick={(e) => handleLinkClick('howItWorksSection', e)}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#enterpriseSection" className="drawer-link" onClick={(e) => handleLinkClick('enterpriseSection', e)}>
              Enterprise & Teams
            </a>
          </li>
          <li>
            <a href="#keynotesSection" className="drawer-link" onClick={(e) => handleLinkClick('keynotesSection', e)}>
              Keynotes & Events
            </a>
          </li>
          <li>
            <a href="#testimonialsSection" className="drawer-link" onClick={(e) => handleLinkClick('testimonialsSection', e)}>
              Student Stories
            </a>
          </li>
          <li>
            <a href="#requestInfoSection" className="drawer-link highlight" onClick={(e) => handleLinkClick('requestInfoSection', e)}>
              Request Info
            </a>
          </li>
          <li>
            <a href="/terms-and-conditions.html" className="drawer-link" onClick={(e) => handlePolicyClick('terms', e)}>
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="/privacy-policy.html" className="drawer-link" onClick={(e) => handlePolicyClick('privacy', e)}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/service-delivery.html" className="drawer-link" onClick={(e) => handlePolicyClick('delivery', e)}>
              Service Delivery
            </a>
          </li>
          <li>
            <a href="/refund-policy.html" className="drawer-link" onClick={(e) => handlePolicyClick('refund', e)}>
              Refund Policy
            </a>
          </li>
          <li>
            <a href="/accessibility-statement.html" className="drawer-link" onClick={(e) => handlePolicyClick('accessibility', e)}>
              Accessibility
            </a>
          </li>
        </ul>

        <div className="drawer-footer">
          <p>Admissions & Support</p>
          <a href="tel:8064178627" className="drawer-phone">📞 8064178627</a>
          <a href="tel:02241504305" className="drawer-phone-intl">📞 022-4150-4305</a>
          <div style={{ marginTop: '10px', fontSize: '0.82rem', lineHeight: '1.6' }}>
            <a href="mailto:info@cambridgelearning.in" style={{ color: '#ffffff', display: 'block' }}>✉️ info@cambridgelearning.in</a>
            <a href="mailto:care@cambridgelearning.in" style={{ color: '#cbd5e1', display: 'block' }}>✉️ care@cambridgelearning.in</a>
          </div>
        </div>
      </div>

      <div 
        className={`drawer-backdrop ${isOpen ? 'show' : ''}`} 
        id="drawerBackdrop"
        onClick={onClose}
      />
    </>
  );
}
