import React from 'react';

export default function ImpactSection() {
  return (
    <section className="impact-section" id="impactSection">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading red-underline">Education For All</h2>
          <p className="section-subtext">
            Cambridge Learning Services provides life-changing education to underserved communities, high-school students, veterans, and justice-involved individuals.
          </p>
        </div>

        <div className="impact-initiatives-grid">
          <div className="impact-card">
            <div className="impact-icon">🎓</div>
            <h3>Educational Equity</h3>
            <p>Tuition-free certificate programs for talented, underserved high school seniors navigating college readiness.</p>
          </div>
          <div className="impact-card">
            <div className="impact-icon">🎖️</div>
            <h3>Military & Veterans</h3>
            <p>Specialized programs, funding assistance, and GI Bill benefits for active-duty servicemembers and military families.</p>
          </div>
          <div className="impact-card">
            <div className="impact-icon">🤝</div>
            <h3>Justice-Impacted Learners</h3>
            <p>Re-entry career credentials that create tangible pathways to meaningful, gainful employment and economic mobility.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
