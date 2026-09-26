import React from 'react';

const CATEGORY_ITEMS = [
  {
    id: 'ai-and-modern-workflows',
    title: 'AI & MODERN WORKFLOWS',
    count: '15 Masterclasses • From ₹25,000 →',
    img: '/assets/thumb-ai.jpg',
    alt: 'AI and Modern Workflows'
  },
  {
    id: 'construction-project-management-and-billing',
    title: 'CONSTRUCTION: PM & BILLING',
    count: '13 Masterclasses • From ₹40,000 →',
    img: '/assets/thumb-pm.png',
    alt: 'Construction: Project Management & Billing'
  },
  {
    id: 'construction-site-operations-and-safety',
    title: 'CONSTRUCTION: SITE OPERATIONS',
    count: '12 Masterclasses • From ₹45,000 →',
    img: '/assets/thumb-site.png',
    alt: 'Construction: Site Operations & Safety'
  },
  {
    id: 'construction-design-coordination-and-bim',
    title: 'DESIGN COORDINATION & BIM',
    count: '11 Masterclasses • From ₹30,000 →',
    img: '/assets/thumb-bim.png',
    alt: 'Construction: Design Coordination & BIM'
  },
  {
    id: 'construction-materials-finishes-and-tech',
    title: 'MATERIALS, FINISHES & TECH',
    count: '14 Masterclasses • From ₹35,000 →',
    img: '/assets/thumb-materials.png',
    alt: 'Construction: Materials, Finishes & Tech'
  },
  {
    id: 'corporate-operations-and-logistics',
    title: 'CORPORATE OPERATIONS & LOGISTICS',
    count: '35 Masterclasses • From ₹20,000 →',
    img: '/assets/thumb-finance.png',
    alt: 'Corporate Operations & Logistics'
  }
];

export default function CategoryGrid({ onFilterCategory, onScrollToSection }) {
  const handleClick = (catId) => {
    if (onFilterCategory) onFilterCategory(catId);
    if (onScrollToSection) onScrollToSection('programFinderSection');
  };

  return (
    <section className="certificate-categories-section" id="certificateExploreSection">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading red-underline">Cambridge Professional Education</h2>
          <p className="section-subtext">
            Select a discipline below to view all online certificate curricula, requirements, and upcoming cohorts.
          </p>
        </div>

        <div className="categories-grid" id="sideBySideCategories">
          {CATEGORY_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="category-card" 
              onClick={() => handleClick(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleClick(item.id);
                }
              }}
            >
              <div className="cat-image-wrap">
                <img src={item.img} alt={item.alt} loading="lazy" />
                <div className="cat-overlay"></div>
              </div>
              <div className="cat-body">
                <h3>{item.title}</h3>
                <span className="cat-count">{item.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
