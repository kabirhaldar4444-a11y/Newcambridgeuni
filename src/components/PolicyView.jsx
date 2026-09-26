import React, { useEffect } from 'react';
import { POLICIES_HTML } from '../data/policies';

export default function PolicyView({ policyKey, onNavigatePolicy, onNavigateHome }) {
  const htmlContent = POLICIES_HTML[policyKey] || POLICIES_HTML.privacy;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [policyKey]);

  const handleContainerClick = (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Intercept internal policy tabs and breadcrumbs
    if (href === 'index.html' || href === '/' || href.startsWith('index.html#')) {
      e.preventDefault();
      if (onNavigateHome) onNavigateHome();
      return;
    }

    if (href.includes('privacy-policy.html')) {
      e.preventDefault();
      onNavigatePolicy('privacy');
    } else if (href.includes('terms-and-conditions.html')) {
      e.preventDefault();
      onNavigatePolicy('terms');
    } else if (href.includes('refund-policy.html')) {
      e.preventDefault();
      onNavigatePolicy('refund');
    } else if (href.includes('service-delivery.html')) {
      e.preventDefault();
      onNavigatePolicy('delivery');
    } else if (href.includes('accessibility-statement.html')) {
      e.preventDefault();
      onNavigatePolicy('accessibility');
    }
  };

  return (
    <div className="policy-view-wrapper" onClick={handleContainerClick}>
      <div 
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </div>
  );
}
