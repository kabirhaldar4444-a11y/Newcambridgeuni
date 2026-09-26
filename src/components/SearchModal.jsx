import React, { useState, useEffect, useRef } from 'react';
import { CAMBRIDGE_CERTIFICATES } from '../data/courses';

export default function SearchModal({ isOpen, onClose, onSelectProgram }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  const clean = searchTerm.toLowerCase().trim();
  const searchResults = CAMBRIDGE_CERTIFICATES.filter((c) =>
    !clean || c.title.toLowerCase().includes(clean) || c.categoryName.toLowerCase().includes(clean)
  ).slice(0, 8);

  if (!isOpen) return null;

  return (
    <div 
      className="search-modal-overlay" 
      id="searchModal" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modalSearchTitle"
      onClick={(e) => {
        if (e.target.id === 'searchModal') onClose();
      }}
    >
      <div className="search-modal-card">
        <div className="search-modal-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            id="modalSearchInput"
            placeholder="Type a certificate name or topic (e.g., AI, Python, Marketing)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="button" 
            className="btn-close-modal" 
            id="btnCloseSearchModal"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="search-modal-body">
          <div className="quick-tags">
            <span>Popular:</span>
            <button type="button" className="tag-btn" onClick={() => setSearchTerm('Prompt Engineering')}>
              AI Prompting
            </button>
            <button type="button" className="tag-btn" onClick={() => setSearchTerm('BIM')}>
              BIM Coordination
            </button>
            <button type="button" className="tag-btn" onClick={() => setSearchTerm('Estimation')}>
              Construction Billing
            </button>
            <button type="button" className="tag-btn" onClick={() => setSearchTerm('Excel')}>
              Excel Analytics
            </button>
            <button type="button" className="tag-btn" onClick={() => setSearchTerm('Logistics')}>
              Supply Chain
            </button>
            <button type="button" className="tag-btn" onClick={() => setSearchTerm('Safety')}>
              Site Safety
            </button>
          </div>
          <div className="modal-results-list" id="modalResultsList">
            {searchResults.length === 0 ? (
              <div style={{ padding: '14px', textAlign: 'center', color: '#94a3b8' }}>
                No courses found for "{searchTerm}"
              </div>
            ) : (
              searchResults.map((c) => (
                <div
                  key={c.id}
                  className="modal-result-item"
                  onClick={() => {
                    onClose();
                    onSelectProgram(c.id);
                  }}
                >
                  <div className="result-main">
                    <h4>{c.title}</h4>
                    <span>{c.categoryName} • {c.duration} • {c.price}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#b31b1b' }}>
                    View Syllabus &rarr;
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
