import React from 'react';

export default function Footer({ 
  onFilterCategory, 
  onScrollToSection, 
  onOpenChat,
  onNavigatePolicy 
}) {
  const handleCatClick = (catId, e) => {
    e.preventDefault();
    if (onFilterCategory) onFilterCategory(catId);
    if (onScrollToSection) onScrollToSection('programFinderSection');
  };

  const handlePolicyClick = (policyKey, e) => {
    e.preventDefault();
    if (onNavigatePolicy) onNavigatePolicy(policyKey);
  };

  return (
    <footer className="main-footer" id="mainFooter">
      <div className="container footer-content-wrap">
        <div className="footer-top-row">
          
          {/* Brand & Seal Column */}
          <div className="footer-col brand-col">
            <div className="footer-logos">
              <img 
                src="/assets/cambridge-seal.svg" 
                alt="Cambridge Learning Services Seal" 
                className="footer-seal" 
                width="44" 
                height="44" 
              />
              <img 
                src="/assets/cambridge-logo-white.png" 
                alt="Cambridge Learning Services" 
                className="footer-logo" 
                width="190" 
                height="51" 
              />
            </div>
            <p className="footer-motto">
              "Empowering professionals and global organizations through world-class industry credentials."
              <br />
              <span className="motto-author">— Cambridge Learning Services</span>
            </p>
            <div className="footer-social-links">
              <a 
                href="https://www.linkedin.com/company/cambridge-learning-services/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Cambridge on LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/cambridgelearning" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Cambridge on Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/user/CambridgeLearningServices" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Cambridge on YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 2: Certificates */}
          <div className="footer-col">
            <h4>Cambridge & Online Certifications</h4>
            <ul className="footer-links">
              <li>
                <a href="#programFinderSection" onClick={(e) => handleCatClick('ai-and-modern-workflows', e)}>
                  AI & Modern Workflows (15)
                </a>
              </li>
              <li>
                <a href="#programFinderSection" onClick={(e) => handleCatClick('construction-project-management-and-billing', e)}>
                  Construction PM & Billing (13)
                </a>
              </li>
              <li>
                <a href="#programFinderSection" onClick={(e) => handleCatClick('construction-site-operations-and-safety', e)}>
                  Site Operations & Safety (12)
                </a>
              </li>
              <li>
                <a href="#programFinderSection" onClick={(e) => handleCatClick('construction-design-coordination-and-bim', e)}>
                  Design Coordination & BIM (11)
                </a>
              </li>
              <li>
                <a href="#programFinderSection" onClick={(e) => handleCatClick('construction-materials-finishes-and-tech', e)}>
                  Materials, Finishes & Tech (14)
                </a>
              </li>
              <li>
                <a href="#programFinderSection" onClick={(e) => handleCatClick('corporate-operations-and-logistics', e)}>
                  Corporate Operations & Logistics (35)
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Contact & Support */}
          <div className="footer-col contact-col">
            <h4>Contact Admissions</h4>
            <div className="contact-entry">
              <span className="entry-label">Toll-Free (US):</span>
              <a href="tel:18663267635" className="entry-val">866-326-7635</a>
            </div>
            <div className="contact-entry">
              <span className="entry-label">International:</span>
              <a href="tel:16073303200" className="entry-val">+1-607-330-3200</a>
            </div>
            <div className="contact-entry">
              <span className="entry-label">Email:</span>
              <a href="mailto:admissions@cambridgelearningservices.org" className="entry-val">
                admissions@cambridgelearningservices.org
              </a>
            </div>
            <div className="contact-entry address-entry">
              <span className="entry-label">Headquarters:</span>
              <address>
                950 Danby Rd., Suite 150<br />
                Ithaca, NY 14850
              </address>
            </div>
            <div className="chat-entry">
              <button 
                type="button" 
                className="btn-inline-chat" 
                id="btnFooterChat" 
                onClick={onOpenChat}
              >
                💬 Chat Live With Advisor
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Copyright & Legal */}
        <div className="footer-bottom-row">
          <div className="legal-links">
            <a href="/terms-and-conditions.html" onClick={(e) => handlePolicyClick('terms', e)}>
              Terms & Conditions
            </a>
            <span className="sep">|</span>
            <a href="/privacy-policy.html" onClick={(e) => handlePolicyClick('privacy', e)}>
              Privacy Policy
            </a>
            <span className="sep">|</span>
            <a href="/service-delivery.html" onClick={(e) => handlePolicyClick('delivery', e)}>
              Service Delivery
            </a>
            <span className="sep">|</span>
            <a href="/refund-policy.html" onClick={(e) => handlePolicyClick('refund', e)}>
              Refund Policy
            </a>
            <span className="sep">|</span>
            <a href="/accessibility-statement.html" onClick={(e) => handlePolicyClick('accessibility', e)}>
              Accessibility
            </a>
          </div>
          <p className="copyright-notice">
            &copy; 2026 Cambridge Learning Services. All rights reserved. Delivering globally recognized professional certifications.
          </p>
        </div>
      </div>
    </footer>
  );
}
