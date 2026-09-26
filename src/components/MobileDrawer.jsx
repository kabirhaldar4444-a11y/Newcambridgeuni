import React, { useState } from 'react';

export default function MobileDrawer({
  isOpen,
  onClose,
  onScrollToSection,
  onSearch,
  onNavigatePolicy
}) {
  const [searchValue, setSearchValue] = useState('');

  const handleLinkClick = (sectionId, e) => {
    e.preventDefault();
    onClose();
    if (onScrollToSection) onScrollToSection(sectionId);
  };

  const handlePolicyClick = (policyKey, e) => {
    e.preventDefault();
    onClose();
    if (onNavigatePolicy) onNavigatePolicy(policyKey);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClose();
      if (onSearch) onSearch(searchValue);
      if (onScrollToSection) onScrollToSection('programFinderSection');
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
            <a href="#certificateExploreSection" className="drawer-link" onClick={(e) => handleLinkClick('certificateExploreSection', e)}>
              Online Certificates
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
        </ul>

        <div className="drawer-footer">
          <p>Need admissions help?</p>
          <a href="tel:18663267635" className="drawer-phone">📞 866-326-7635</a>
          <a href="tel:+16073303200" className="drawer-phone-intl">Int'l: +1-607-330-3200</a>
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
