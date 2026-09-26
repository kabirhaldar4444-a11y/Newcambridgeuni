import React from 'react';

export default function ImpactPillars() {
  return (
    <section className="impact-pillars-section" id="designedForImpact">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading red-underline">Designed For Impact</h2>
          <p className="section-subtext">
            Every Cambridge Learning Services program is engineered to deliver immediate career advancement and practical mastery.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Flexibility To Fit Your Life</h3>
            <p>Learn on your schedule. 100% online courses designed specifically for working adults, requiring just 3–5 hours per week.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3>Learn From Cambridge's Top Minds</h3>
            <p>Courses authored by industry-leading experts, researchers, and distinguished Cambridge faculty.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3>Power Your Career</h3>
            <p>Cambridge Learning Services' internationally recognized standard of excellence sets your resume, credentials, and LinkedIn apart.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Small-class Experience</h3>
            <p>Engage in facilitated cohorts, thought-provoking peer discussions, and vibrant networking with industry peers globally.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3>Real World Projects</h3>
            <p>Complete project-based assignments tailored to your real job challenges so you can demonstrate tangible impact immediately.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3>Personalized Feedback</h3>
            <p>Receive detailed, one-on-one constructive feedback on every project from certified Cambridge facilitators and subject matter experts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
