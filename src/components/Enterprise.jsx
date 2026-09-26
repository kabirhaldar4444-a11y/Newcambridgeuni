import React from 'react';

export default function Enterprise({ onScrollToSection }) {
  return (
    <section className="enterprise-section" id="enterpriseSection">
      <div className="container">
        <div className="enterprise-box">
          <div className="enterprise-text">
            <span className="badge-enterprise">FOR ORGANIZATIONS</span>
            <h2>Upskill Your Workforce With Cambridge Learning Services</h2>
            <p>
              We partner with leading Fortune 500 corporations, government agencies, and healthcare systems to deliver customized team cohorts and scalable executive education.
            </p>
            <ul className="enterprise-benefits">
              <li>✓ Custom cohort schedules & private live faculty debriefs</li>
              <li>✓ Dedicated account management & enterprise analytics dashboard</li>
              <li>✓ Volume enrollment discounts and flexible billing</li>
            </ul>
            <div className="enterprise-actions">
              <button 
                type="button" 
                className="btn-white-action" 
                onClick={() => onScrollToSection('requestInfoSection')}
              >
                Connect With Corporate Team
              </button>
              <a href="tel:18663267635" className="btn-trans-phone">
                📞 866-326-7635
              </a>
            </div>
          </div>
          <div className="enterprise-badge-graphic">
            <div className="badge-circle">
              <img src="/assets/cambridge-seal.svg" alt="Cambridge Learning Services Seal" className="seal-inside" />
              <div className="badge-ring-text">CAMBRIDGE LEARNING SERVICES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
