import React from 'react';

export default function VideoModal({ videoId, onClose }) {
  if (!videoId) return null;

  return (
    <div 
      className="video-modal-overlay" 
      id="videoModal" 
      role="dialog" 
      aria-modal="true" 
      style={{ display: 'flex' }}
      onClick={(e) => {
        if (e.target.id === 'videoModal') onClose();
      }}
    >
      <div className="video-modal-card">
        <button 
          type="button" 
          className="btn-close-video" 
          id="btnCloseVideoModal" 
          onClick={onClose}
        >
          &times;
        </button>
        <div className="video-iframe-wrap">
          <iframe 
            id="videoIframe" 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} 
            title="Cambridge Video Player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
