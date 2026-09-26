import React from 'react';

export default function Toast({ message, visible }) {
  return (
    <div 
      className={`toast-notification ${visible ? 'show' : ''}`} 
      id="toastNotice" 
      role="alert" 
      aria-live="polite"
    >
      <span className="toast-text" id="toastText">{message}</span>
    </div>
  );
}
