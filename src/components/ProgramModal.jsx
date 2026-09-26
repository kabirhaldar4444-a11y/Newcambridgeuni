import React from 'react';
import { CAMBRIDGE_CERTIFICATES } from '../data/courses';

export default function ProgramModal({ programId, onClose, onScrollToSection }) {
  if (!programId) return null;

  const cert = CAMBRIDGE_CERTIFICATES.find((c) => c.id === programId) || CAMBRIDGE_CERTIFICATES[0];
  const syllabusToShow = cert.dayWiseCurriculum || cert.allSyllabus || cert.courses || [];

  const handleRequestInfo = () => {
    onClose();
    if (onScrollToSection) onScrollToSection('requestInfoSection');
  };

  return (
    <div 
      className="program-modal-overlay" 
      id="programModal" 
      role="dialog" 
      aria-modal="true" 
      style={{ display: 'flex' }}
      onClick={(e) => {
        if (e.target.id === 'programModal') onClose();
      }}
    >
      <div className="program-modal-card" style={{ maxWidth: '840px', maxHeight: '90vh', overflowY: 'auto' }}>
        <button 
          type="button" 
          className="btn-close-program-modal" 
          id="btnCloseProgramModal" 
          onClick={onClose}
        >
          &times;
        </button>

        <div className="program-modal-header">
          <div className="modal-brand-row">
            <img 
              src="/assets/cambridge-icon.png" 
              alt="Cambridge Learning Services" 
              className="modal-header-icon" 
              width="28" 
              height="28" 
            />
            <span className="modal-category-badge" id="modalProgCategory">
              {cert.categoryName}
            </span>
          </div>
          <h2 id="modalProgTitle">{cert.title}</h2>
          <p className="modal-prog-subtitle" id="modalProgSubtitle">
            {cert.subtitle || cert.school || 'Professional Certificate Masterclass'}
          </p>
        </div>
        
        <div className="program-modal-body">
          <div className="modal-meta-row">
            <div className="meta-box">
              <span className="meta-label">Duration</span>
              <strong id="modalProgDuration">{cert.duration}</strong>
            </div>
            <div className="meta-box">
              <span className="meta-label">Course Fee</span>
              <strong>{cert.price}</strong>
            </div>
            <div className="meta-box">
              <span className="meta-label">Format</span>
              <strong>{cert.format || '100% Online'}</strong>
            </div>
            <div className="meta-box">
              <span className="meta-label">Credential</span>
              <strong>Official Certificate</strong>
            </div>
          </div>

          <div className="modal-desc-box">
            <h3>Course Overview</h3>
            <p id="modalProgOverview">{cert.overview}</p>
          </div>

          {cert.learningAreas && cert.learningAreas.length > 0 && (
            <div className="modal-desc-box" id="modalLearningAreasBox">
              <h3 style={{ marginTop: '16px' }}>Key Learning Competencies</h3>
              <ul style={{
                listStyle: 'disc',
                paddingLeft: '20px',
                color: '#475569',
                fontSize: '0.92rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}>
                {cert.learningAreas.map((la, i) => (
                  <li key={i}>{la}</li>
                ))}
              </ul>
            </div>
          )}

          {cert.objectives && cert.objectives.length > 0 && (
            <div className="modal-desc-box">
              <h3 style={{ marginTop: '16px' }}>Course Objectives</h3>
              <ul style={{
                listStyle: 'disc',
                paddingLeft: '20px',
                color: '#475569',
                fontSize: '0.92rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}>
                {cert.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>
          )}

          {cert.keyTopics && cert.keyTopics.length > 0 && (
            <div className="modal-desc-box">
              <h3 style={{ marginTop: '16px' }}>Key Topics Covered</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                {cert.keyTopics.map((topic, i) => (
                  <span key={i} style={{
                    background: '#f1f5f9',
                    color: '#334155',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-courses-box">
            <h3>Comprehensive Syllabus & Curriculum</h3>
            <ul id="modalCoursesList" className="curriculum-list" style={{ maxHeight: '280px', overflowY: 'auto' }}>
              {syllabusToShow && syllabusToShow.map((item, idx) => (
                <li key={idx}>
                  <span style={{ color: '#b31b1b', fontWeight: 700, marginRight: '8px' }}>
                    {item.startsWith('Day') || item.startsWith('Module') ? '' : `Module ${idx + 1}:`}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-faculty-box">
            <h3>Certification & Delivery Details</h3>
            <p id="modalProgFaculty">
              <strong>Delivery Method:</strong> {cert.deliveryMethod || 'Pre-recorded Video Lecture Streams & PDF Download Repositories'}<br />
              <strong>Audience:</strong> {cert.targetAudience}<br />
              <strong>Prerequisites:</strong> {cert.prerequisites}<br />
              <strong>Career Outcomes:</strong> {cert.careerBenefits}
            </p>
          </div>

          <div className="modal-action-bar">
            <button 
              type="button" 
              className="btn-primary" 
              onClick={handleRequestInfo}
            >
              Request Syllabus & Pricing
            </button>
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
