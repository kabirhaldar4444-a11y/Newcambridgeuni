import React from 'react';

export default function Keynotes({ onOpenVideoModal, onShowToast }) {
  const handleRegister = () => {
    if (onShowToast) {
      onShowToast('Registered for complimentary live session! Link has been saved.');
    } else {
      alert('Registered for complimentary live session! Link has been saved.');
    }
  };

  return (
    <section className="keynotes-section" id="keynotesSection">
      <div className="container">
        <div className="section-title-wrap">
          <span className="badge-pill-outline">COMPLIMENTARY FACULTY EVENTS</span>
          <h2 className="section-heading red-underline">Cambridge Keynotes</h2>
          <p className="section-subtext">
            Attend free live webcasts and interactive talks featuring leading Cambridge researchers and industry leaders and practitioners.
          </p>
        </div>

        <div className="keynotes-grid">
          <div className="keynote-card">
            <div className="keynote-date-tag">LIVE WEBCAST • THURSDAY</div>
            <h3>Navigating Enterprise Generative AI</h3>
            <p>Join Cambridge faculty to explore real-world implementation of agentic AI frameworks in healthcare and finance.</p>
            <div className="speaker-info">
              <strong>Featuring:</strong> Prof. Thorsten Joachims & Industry Leaders
            </div>
            <button type="button" className="btn-register-keynote" onClick={handleRegister}>
              Register Free &rarr;
            </button>
          </div>

          <div className="keynote-card">
            <div className="keynote-date-tag">ON-DEMAND REPLAY</div>
            <h3>The Next Era of Hospitality & Service</h3>
            <p>Faculty from Cambridge School of Hospitality & Management analyze post-pandemic hospitality trends and revenue pricing.</p>
            <div className="speaker-info">
              <strong>Featuring:</strong> Dean Kate Walsh & Hospitality Executives
            </div>
            <button 
              type="button" 
              className="btn-register-keynote" 
              onClick={() => onOpenVideoModal('LlCwHnp3kL4')}
            >
              Watch Webcast &rarr;
            </button>
          </div>

          <div className="keynote-card">
            <div className="keynote-date-tag">UPCOMING EVENT</div>
            <h3>Inclusive Leadership & Cultural Agility</h3>
            <p>ILR School specialists discuss cultivating psychological safety and high-performance diverse engineering teams.</p>
            <div className="speaker-info">
              <strong>Featuring:</strong> Cambridge Center for Advanced Management Studies
            </div>
            <button type="button" className="btn-register-keynote" onClick={handleRegister}>
              Register Free &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
