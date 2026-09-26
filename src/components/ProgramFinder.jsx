import React, { useMemo } from 'react';
import { CAMBRIDGE_CERTIFICATES, COURSE_CATEGORIES } from '../data/courses';

const CATEGORIES = COURSE_CATEGORIES;

const SORT_LABELS = {
  featured: 'Featured',
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
  'duration-asc': 'Duration: Shortest',
  'duration-desc': 'Duration: Longest',
  'title-asc': 'Title: A to Z',
  'title-desc': 'Title: Z to A'
};

function parsePriceNum(priceStr) {
  if (!priceStr) return 0;
  const num = Number(String(priceStr).replace(/[^0-9]/g, ''));
  return isNaN(num) ? 0 : num;
}

function parseDurationDays(durStr) {
  if (!durStr) return 0;
  const match = String(durStr).match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

export default function ProgramFinder({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortMode,
  onSortChange,
  priceFilter,
  onPriceChange,
  durationFilter,
  onDurationChange,
  onResetFilters,
  onOpenProgramModal,
  onInquireCourse,
  onScrollToSection
}) {
  const filteredCourses = useMemo(() => {
    return CAMBRIDGE_CERTIFICATES.filter((cert) => {
      // Category filter
      const matchesCat = activeCategory === 'all' || cert.category === activeCategory;

      // Search query filter
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.categoryName.toLowerCase().includes(query) ||
        (cert.overview && cert.overview.toLowerCase().includes(query));

      // Price filter
      const priceNum = parsePriceNum(cert.price);
      let matchesPrice = true;
      if (priceFilter === 'under-45k') {
        matchesPrice = priceNum < 45000;
      } else if (priceFilter === '45k-60k') {
        matchesPrice = priceNum >= 45000 && priceNum <= 60000;
      } else if (priceFilter === 'above-60k') {
        matchesPrice = priceNum > 60000;
      }

      // Duration filter
      const durationDays = parseDurationDays(cert.duration);
      let matchesDuration = true;
      if (durationFilter === 'under-20') {
        matchesDuration = durationDays <= 20;
      } else if (durationFilter === '21-30') {
        matchesDuration = durationDays > 20 && durationDays <= 30;
      } else if (durationFilter === 'above-30') {
        matchesDuration = durationDays > 30;
      }

      return matchesCat && matchesQuery && matchesPrice && matchesDuration;
    }).sort((a, b) => {
      if (sortMode === 'price-asc') return parsePriceNum(a.price) - parsePriceNum(b.price);
      if (sortMode === 'price-desc') return parsePriceNum(b.price) - parsePriceNum(a.price);
      if (sortMode === 'duration-asc') return parseDurationDays(a.duration) - parseDurationDays(b.duration);
      if (sortMode === 'duration-desc') return parseDurationDays(b.duration) - parseDurationDays(a.duration);
      if (sortMode === 'title-asc') return a.title.localeCompare(b.title);
      if (sortMode === 'title-desc') return b.title.localeCompare(a.title);
      return 0;
    });
  }, [activeCategory, searchQuery, sortMode, priceFilter, durationFilter]);

  const hasActiveFilters =
    activeCategory !== 'all' ||
    searchQuery !== '' ||
    sortMode !== 'featured' ||
    priceFilter !== 'all' ||
    durationFilter !== 'all';

  const activeCategoryObj = CATEGORIES.find((c) => c.id === activeCategory);
  const activeCategoryLabel = activeCategoryObj ? activeCategoryObj.label.replace(/\(\d+\)/, '').trim() : activeCategory;

  return (
    <section className="search-filter-section" id="programFinderSection">
      <div className="container">
        <div className="finder-card">
          <div className="finder-header">
            <h2>Find Your Cambridge Certificate Program</h2>
            <p>Explore over 150 flexible, 100% online certificate programs delivered by Cambridge Learning Services.</p>
          </div>

          <div className="finder-controls">
            {/* Search Input */}
            <div className="search-input-wrap">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                id="courseLiveFilterInput"
                placeholder="Search by topic, e.g. 'Artificial Intelligence', 'Data', 'Hospitality'..."
                aria-label="Filter certificates by keyword"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  id="clearSearchBtn"
                  className="btn-clear-search"
                  aria-label="Clear search"
                  onClick={() => onSearchChange('')}
                >
                  &times;
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="category-pills" id="categoryPillList" role="tablist">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`pill ${activeCategory === cat.id ? 'active' : ''}`}
                  data-category={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Smart Filter & Sort Toolbar */}
            <div className="smart-filter-toolbar" id="smartFilterToolbar">
              <div className="toolbar-top-row">
                
                {/* Sort Dropdown */}
                <div className="filter-dropdown-item">
                  <label htmlFor="courseSortSelect" className="toolbar-label">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M3 6h18M6 12h12m-9 6h6"/>
                    </svg>
                    <span>Sort By:</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="courseSortSelect"
                      className="smart-select"
                      aria-label="Sort courses"
                      value={sortMode}
                      onChange={(e) => onSortChange(e.target.value)}
                    >
                      <option value="featured">⚡ Featured & Recommended</option>
                      <option value="price-asc">🏷️ Price: Low to High</option>
                      <option value="price-desc">💎 Price: High to Low</option>
                      <option value="duration-asc">⏱️ Duration: Shortest First</option>
                      <option value="duration-desc">⏳ Duration: Longest First</option>
                      <option value="title-asc">🔤 Title: A to Z</option>
                      <option value="title-desc">🔤 Title: Z to A</option>
                    </select>
                    <svg className="select-chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Price Range Dropdown */}
                <div className="filter-dropdown-item">
                  <label htmlFor="coursePriceFilter" className="toolbar-label">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    <span>Price Range:</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="coursePriceFilter"
                      className="smart-select"
                      aria-label="Filter by price range"
                      value={priceFilter}
                      onChange={(e) => onPriceChange(e.target.value)}
                    >
                      <option value="all">All Prices</option>
                      <option value="under-45k">Under ₹45,000</option>
                      <option value="45k-60k">₹45,000 – ₹60,000</option>
                      <option value="above-60k">Above ₹60,000</option>
                    </select>
                    <svg className="select-chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Duration Filter Dropdown */}
                <div className="filter-dropdown-item">
                  <label htmlFor="courseDurationFilter" className="toolbar-label">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    <span>Duration:</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="courseDurationFilter"
                      className="smart-select"
                      aria-label="Filter by duration"
                      value={durationFilter}
                      onChange={(e) => onDurationChange(e.target.value)}
                    >
                      <option value="all">All Durations</option>
                      <option value="under-20">Fast-Track (≤ 20 Days)</option>
                      <option value="21-30">Standard (21 – 30 Days)</option>
                      <option value="above-30">Comprehensive (31+ Days)</option>
                    </select>
                    <svg className="select-chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Reset Button */}
                <div className="filter-reset-wrap">
                  {hasActiveFilters && (
                    <button
                      type="button"
                      id="resetAllFiltersBtn"
                      className="btn-smart-reset"
                      title="Clear all active filters and sorting"
                      onClick={onResetFilters}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                        <path d="M3 3v5h5"/>
                      </svg>
                      <span>Reset All</span>
                    </button>
                  )}
                </div>

              </div>

              {/* Smart Quick Chips Bar */}
              <div className="toolbar-chips-row">
                <span className="chips-hint">⚡ Quick Filters:</span>
                <div className="chips-flex">
                  <button
                    type="button"
                    className={`smart-chip ${sortMode === 'price-asc' ? 'is-active' : ''}`}
                    onClick={() => onSortChange(sortMode === 'price-asc' ? 'featured' : 'price-asc')}
                    title="Sort by lowest price first"
                  >
                    🏷️ Price: Low &rarr; High
                  </button>
                  <button
                    type="button"
                    className={`smart-chip ${sortMode === 'price-desc' ? 'is-active' : ''}`}
                    onClick={() => onSortChange(sortMode === 'price-desc' ? 'featured' : 'price-desc')}
                    title="Sort by highest value first"
                  >
                    💎 Price: High &rarr; Low
                  </button>
                  <button
                    type="button"
                    className={`smart-chip ${priceFilter === 'under-45k' ? 'is-active' : ''}`}
                    onClick={() => onPriceChange(priceFilter === 'under-45k' ? 'all' : 'under-45k')}
                    title="Only courses under ₹45,000"
                  >
                    💰 Under ₹45,000
                  </button>
                  <button
                    type="button"
                    className={`smart-chip ${durationFilter === 'under-20' ? 'is-active' : ''}`}
                    onClick={() => onDurationChange(durationFilter === 'under-20' ? 'all' : 'under-20')}
                    title="Only fast-track courses (20 days or less)"
                  >
                    ⏱️ Fast-Track (≤ 20 Days)
                  </button>
                </div>
              </div>

              {/* Active Filter Badges & Counter */}
              <div className="toolbar-meta-row" id="toolbarMetaRow">
                <div className="meta-left">
                  <span className="meta-count-badge" id="liveMetaCount">
                    Showing {filteredCourses.length} of {CAMBRIDGE_CERTIFICATES.length} courses
                  </span>
                  <span className="meta-sort-badge" id="liveSortBadge">
                    Sorted by: {SORT_LABELS[sortMode] || 'Featured'}
                  </span>
                </div>
                <div className="meta-active-tags" id="metaActiveTags">
                  {activeCategory !== 'all' && (
                    <span className="active-filter-tag">
                      <span>Category: {activeCategoryLabel}</span>
                      <button type="button" className="tag-close-btn" onClick={() => onSelectCategory('all')}>
                        &times;
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="active-filter-tag">
                      <span>Search: "{searchQuery}"</span>
                      <button type="button" className="tag-close-btn" onClick={() => onSearchChange('')}>
                        &times;
                      </button>
                    </span>
                  )}
                  {priceFilter !== 'all' && (
                    <span className="active-filter-tag">
                      <span>Price: {priceFilter === 'under-45k' ? 'Under ₹45k' : priceFilter === '45k-60k' ? '₹45k–₹60k' : 'Above ₹60k'}</span>
                      <button type="button" className="tag-close-btn" onClick={() => onPriceChange('all')}>
                        &times;
                      </button>
                    </span>
                  )}
                  {durationFilter !== 'all' && (
                    <span className="active-filter-tag">
                      <span>Duration: {durationFilter === 'under-20' ? '≤ 20 Days' : durationFilter === '21-30' ? '21–30 Days' : '31+ Days'}</span>
                      <button type="button" className="tag-close-btn" onClick={() => onDurationChange('all')}>
                        &times;
                      </button>
                    </span>
                  )}
                  {sortMode !== 'featured' && (
                    <span className="active-filter-tag">
                      <span>Sort: {SORT_LABELS[sortMode]}</span>
                      <button type="button" className="tag-close-btn" onClick={() => onSortChange('featured')}>
                        &times;
                      </button>
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Certificate Results Grid */}
          <div className="certificate-grid" id="certificateGrid">
            {filteredCourses.length === 0 ? (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '60px 20px',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px dashed #cbd5e1'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔍</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#1e293b' }}>
                  No programs match the selected filters
                </h3>
                <p style={{ color: '#64748b', marginBottom: '20px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
                  Try adjusting your price range, duration, or search term to discover more certifications.
                </p>
                <button type="button" className="btn-primary" onClick={onResetFilters}>
                  Reset All Filters ({CAMBRIDGE_CERTIFICATES.length} Courses)
                </button>
              </div>
            ) : (
              filteredCourses.map((cert) => (
                <article key={cert.id} className="cert-card" data-id={cert.id}>
                  <div className="cert-card-header">
                    <span className="cert-badge badge-red">{cert.badge || 'Verified Certificate'}</span>
                    <span className="cert-price-tag">{cert.price}</span>
                  </div>
                  <div className="cert-card-body">
                    <span className="cert-category-label">{cert.categoryName}</span>
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-desc">
                      {cert.overview ? cert.overview.slice(0, 130) + '...' : 'Accelerated practical masterclass covering end-to-end industry frameworks.'}
                    </p>
                    <ul className="cert-meta-list">
                      <li className="cert-meta-item">⏱️ {cert.duration}</li>
                      <li className="cert-meta-item">💻 Online Self-Paced</li>
                      <li className="cert-meta-item">📜 Official Certificate</li>
                    </ul>
                  </div>
                  <div className="cert-card-footer">
                    <button
                      type="button"
                      className="btn-view-cert"
                      onClick={() => onOpenProgramModal(cert.id)}
                    >
                      View Syllabus &rarr;
                    </button>
                    <button
                      type="button"
                      className="btn-quick-inquire"
                      onClick={() => onInquireCourse(cert.title)}
                    >
                      Enroll Now
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>

          <div className="finder-footer">
            <p id="resultCountNotice">
              Showing {filteredCourses.length} of {CAMBRIDGE_CERTIFICATES.length} programs
            </p>
            <a 
              href="#certificateExploreSection" 
              className="btn-browse-all"
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection('certificateExploreSection');
              }}
            >
              Browse All 150+ Programs &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
