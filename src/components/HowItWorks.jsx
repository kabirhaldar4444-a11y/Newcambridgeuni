import React from 'react';

export default function HowItWorks({ onScrollToSection, onOpenVideoModal }) {
  return (
    <section className="how-it-works-section" id="howItWorksSection">
      <div className="container-fluid no-padding">
        <div className="how-grid">
          
          <div className="how-video-box">
            <div className="video-preview-wrap">
              <img 
                src="https://img.youtube.com/vi/LlCwHnp3kL4/maxresdefault.jpg" 
                alt="Cambridge Learning Services Video Tour" 
                className="video-preview-img" 
              />
              <button 
                type="button"
                className="btn-play-pulse" 
                onClick={() => onOpenVideoModal('LlCwHnp3kL4')} 
                aria-label="Play How It Works Video"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <div className="video-label-badge">Video Tour • 2 min</div>
            </div>
          </div>
          
          <div className="how-text-box">
            <div className="how-text-content">
              <span className="badge-pill-outline">THE CAMBRIDGE ADVANTAGE</span>
              <h2 className="section-heading red-underline">How It Works</h2>
              <p className="lead-text">
                Experience the unmatched rigor, human connection, and flexibility of Cambridge Learning Services' online learning environment.
              </p>
              
              <div className="step-list">
                <div className="step-item">
                  <div className="step-num">1</div>
                  <div className="step-desc">
                    <h4>Self-Paced Weekly Modules</h4>
                    <p>Engage with multimedia faculty lectures and interactive exercises when it works best for you.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">2</div>
                  <div className="step-desc">
                    <h4>Interactive Cohort Discussions</h4>
                    <p>Collaborate with experienced professionals from 50+ countries in small, guided breakout groups.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">3</div>
                  <div className="step-desc">
                    <h4>Earn a Cambridge Credential</h4>
                    <p>Receive your verifiable digital certificate directly from Cambridge Learning Services to showcase your accomplishment.</p>
                  </div>
                </div>
              </div>

              <div className="how-actions">
                <button 
                  type="button" 
                  className="btn-primary" 
                  onClick={() => onScrollToSection('requestInfoSection')}
                >
                  Discover More &rarr;
                </button>
                <button 
                  type="button" 
                  className="btn-secondary" 
                  onClick={() => onOpenVideoModal('LlCwHnp3kL4')}
                >
                  Cambridge Tour
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
