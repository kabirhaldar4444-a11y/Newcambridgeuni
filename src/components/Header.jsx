import React, { useState, useEffect } from 'react';

export default function Header({ 
  onScrollToSection, 
  onFilterCategory, 
  onOpenProgramModal, 
  onToggleMobileDrawer,
  onNavigateHome
}) {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuForceHide, setMegaMenuForceHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (catKey, e) => {
    e.preventDefault();
    setMegaMenuForceHide(true);
    setTimeout(() => setMegaMenuForceHide(false), 450);
    if (onFilterCategory) onFilterCategory(catKey);
    if (onScrollToSection) onScrollToSection('programFinderSection');
  };

  const handleFeaturedClick = (e) => {
    e.preventDefault();
    setMegaMenuForceHide(true);
    setTimeout(() => setMegaMenuForceHide(false), 450);
    if (onOpenProgramModal) {
      onOpenProgramModal('generative-ai-prompt-engineering-for-enterprise-workflows');
    }
  };

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`} id="mainHeader">
      <div className="container header-container">
        
        {/* Brand Logo */}
        <a 
          href="/" 
          className="brand-logo" 
          aria-label="Cambridge Learning Services Homepage"
          onClick={(e) => {
            if (onNavigateHome) {
              e.preventDefault();
              onNavigateHome();
            }
          }}
        >
          <img 
            src="/assets/cambridge-logo.png" 
            alt="Cambridge Learning Services" 
            className="logo-svg" 
            width="220" 
            height="59" 
          />
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="nav-menu" id="navMenu" aria-label="Main Navigation">
          <ul className="nav-list">
            
            {/* Programs Mega Menu */}
            <li className="nav-item has-dropdown">
              <a 
                href="#programFinderSection" 
                className="nav-link" 
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToSection('programFinderSection');
                }}
              >
                Programs
                <svg className="dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className={`dropdown-menu mega-menu ${megaMenuForceHide ? 'force-hide' : ''}`}>
                <div className="mega-menu-grid">
                  <div className="mega-col">
                    <div className="mega-heading">Technical & Management Disciplines</div>
                    <ul className="mega-links">
                      <li>
                        <a href="#programFinderSection" onClick={(e) => handleCategoryClick('all', e)}>
                          <span className="link-icon">🎓</span> All Certifications (100)
                        </a>
                      </li>
                      <li>
                        <a href="#programFinderSection" onClick={(e) => handleCategoryClick('ai-and-modern-workflows', e)}>
                          <span className="link-icon">🤖</span> AI & Modern Workflows (15)
                        </a>
                      </li>
                      <li>
                        <a href="#programFinderSection" onClick={(e) => handleCategoryClick('construction-project-management-and-billing', e)}>
                          <span className="link-icon">🏗️</span> Construction: PM & Billing (13)
                        </a>
                      </li>
                      <li>
                        <a href="#programFinderSection" onClick={(e) => handleCategoryClick('construction-site-operations-and-safety', e)}>
                          <span className="link-icon">🦺</span> Construction: Site Operations (12)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-col">
                    <div className="mega-heading">Engineering & Operations</div>
                    <ul className="mega-links">
                      <li>
                        <a href="#programFinderSection" onClick={(e) => handleCategoryClick('construction-design-coordination-and-bim', e)}>
                          <span className="link-icon">📐</span> Design Coordination & BIM (11)
                        </a>
                      </li>
                      <li>
                        <a href="#programFinderSection" onClick={(e) => handleCategoryClick('construction-materials-finishes-and-tech', e)}>
                          <span className="link-icon">🧱</span> Materials, Finishes & Tech (14)
                        </a>
                      </li>
                      <li>
                        <a href="#programFinderSection" onClick={(e) => handleCategoryClick('corporate-operations-and-logistics', e)}>
                          <span className="link-icon">📦</span> Corporate Operations & Logistics (35)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-col featured-offering">
                    <div className="mega-heading">Featured Masterclass</div>
                    <div className="featured-card">
                      <span className="badge-featured">POPULAR</span>
                      <h4>Generative AI Prompt Engineering</h4>
                      <p>Accelerated 20 Days vocational masterclass in Generative AI for enterprise workflows.</p>
                      <a href="#explore" className="link-arrow" onClick={handleFeaturedClick}>
                        Explore Syllabus &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Enterprise Menu */}
            <li className="nav-item">
              <a 
                href="#enterpriseSection" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToSection('enterpriseSection');
                }}
              >
                Enterprise
              </a>
            </li>

            {/* Keynotes */}
            <li className="nav-item">
              <a 
                href="#keynotesSection" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToSection('keynotesSection');
                }}
              >
                Keynotes & Events
              </a>
            </li>

            {/* How It Works */}
            <li className="nav-item">
              <a 
                href="#howItWorksSection" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToSection('howItWorksSection');
                }}
              >
                How It Works
              </a>
            </li>

            {/* Impact */}
            <li className="nav-item">
              <a 
                href="#impactSection" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToSection('impactSection');
                }}
              >
                Impact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Header Actions */}
        <div className="header-actions">
          <button 
            type="button"
            className="btn-primary-header" 
            id="btnHeaderRequestInfo" 
            onClick={() => onScrollToSection('requestInfoSection')}
          >
            Request Info
          </button>

          <button 
            type="button"
            className="mobile-toggle" 
            id="btnMobileToggle" 
            aria-label="Toggle mobile menu" 
            aria-expanded="false"
            onClick={onToggleMobileDrawer}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

      </div>
    </header>
  );
}
