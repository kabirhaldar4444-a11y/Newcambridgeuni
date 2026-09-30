import React, { useEffect } from 'react';
import { POLICIES_HTML, POLICY_DATA } from '../data/policies';

export default function PolicyView({ policyKey, onNavigatePolicy, onNavigateHome }) {
  const currentKey = POLICY_DATA[policyKey] ? policyKey : 'terms';
  const htmlContent = POLICIES_HTML[currentKey] || POLICIES_HTML.terms;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const policyInfo = POLICY_DATA[currentKey];
    if (policyInfo) {
      document.title = `${policyInfo.label} | Cambridge Learning Services`;
    }
  }, [currentKey]);

  const handleContainerClick = (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Handle in-page table of contents links (#s1, #s2...)
    if (href.startsWith('#s')) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        const header = document.getElementById('mainHeader');
        const headerHeight = header ? header.offsetHeight : 72;
        const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
      return;
    }

    // Intercept breadcrumb home link
    if (href === '/' || href === 'index.html' || href.startsWith('index.html#') || href === '#') {
      e.preventDefault();
      if (onNavigateHome) onNavigateHome();
      return;
    }

    // Intercept policy switcher tabs
    if (href.includes('privacy-policy.html')) {
      e.preventDefault();
      if (onNavigatePolicy) onNavigatePolicy('privacy');
    } else if (href.includes('terms-and-conditions.html')) {
      e.preventDefault();
      if (onNavigatePolicy) onNavigatePolicy('terms');
    } else if (href.includes('refund-policy.html')) {
      e.preventDefault();
      if (onNavigatePolicy) onNavigatePolicy('refund');
    } else if (href.includes('service-delivery.html')) {
      e.preventDefault();
      if (onNavigatePolicy) onNavigatePolicy('delivery');
    } else if (href.includes('accessibility-statement.html') || href.includes('accessibility')) {
      e.preventDefault();
      if (onNavigatePolicy) onNavigatePolicy('accessibility');
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
