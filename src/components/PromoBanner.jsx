import React, { useState } from 'react';

export default function PromoBanner({ onShowToast, onScrollToSection }) {
  const [closed, setClosed] = useState(false);
  const [copied, setCopied] = useState(false);

  if (closed) return null;

  const handleCopyCode = () => {
    const code = "LEARN30";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        onShowToast("Discount code LEARN30 copied to clipboard! (30% Off)");
        setTimeout(() => setCopied(false), 3000);
      }).catch(() => {
        onShowToast("Use code: LEARN30 for 30% savings.");
      });
    } else {
      onShowToast("Use code: LEARN30 for 30% savings.");
    }
  };

  return (
    <div id="promoBanner" className="promo-banner" role="region" aria-label="Special Offer">
      <div className="container banner-flex">
        <div className="banner-content">
          <span className="badge-discount">LIMITED OFFER</span>
          <span>
            Enroll by <strong>September 30</strong> and save <strong>30%</strong> with code{" "}
            <strong className="promo-code" id="promoCodeDisplay">LEARN30</strong>
          </span>
          <button 
            type="button" 
            className="btn-copy-code" 
            id="btnCopyCode" 
            title="Copy coupon code"
            onClick={handleCopyCode}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span id="copyCodeText">{copied ? "Copied!" : "Copy Code"}</span>
          </button>
        </div>
        <div className="banner-right">
          <a 
            href="#requestInfoSection" 
            className="banner-cta"
            onClick={(e) => {
              e.preventDefault();
              onScrollToSection("requestInfoSection");
            }}
          >
            Claim Savings &rarr;
          </a>
          <button 
            type="button" 
            className="banner-close" 
            id="btnCloseBanner" 
            aria-label="Close promo banner"
            onClick={() => setClosed(true)}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
