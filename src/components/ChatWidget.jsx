import React, { useState, useRef, useEffect } from 'react';

function generateChatResponse(userMsg) {
  const query = userMsg.toLowerCase();
  if (query.includes('cost') || query.includes('price') || query.includes('tuition') || query.includes('fee')) {
    return 'Course fees range from INR 20,000 to INR 1,10,000 depending on the domain. With discount code LEARN30, you save 30% on prepayment today!';
  } else if (query.includes('ai') || query.includes('prompt') || query.includes('generative')) {
    return "We offer 15 AI & Modern Workflow courses including 'Generative AI Prompt Engineering for Enterprise Workflows' (20 Days) and 'AI-Powered Automation for Small Business Operations' (30 Days).";
  } else if (query.includes('construction') || query.includes('bim') || query.includes('site') || query.includes('billing')) {
    return 'Our Construction certification portfolio includes 50+ specialized masterclasses covering Project Management & Billing, Site Safety, BIM Software Coordination, and Modern Building Materials.';
  } else if (query.includes('excel') || query.includes('supply chain') || query.includes('logistics')) {
    return "Our Corporate Operations portfolio includes 'Advanced Microsoft Excel & Data Dashboarding' (20 Days), 'Supply Chain Logistics', and 'Lean Six Sigma Foundations'.";
  } else if (query.includes('duration') || query.includes('time') || query.includes('days')) {
    return 'Masterclasses range from 10 to 30 days and are 100% self-paced with online study materials and video lectures.';
  } else {
    return 'Thank you for reaching out! Our certification advisors are ready to assist you. Fill out the Request Information form to receive your course syllabus and 30% discount code.';
  }
}

export default function ChatWidget({ isOpen, onToggle, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! Welcome to Cambridge Learning Services. How can we help accelerate your career today? Are you looking for certificates in AI, Leadership, Data Science, or another field?'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputVal.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setInputVal('');

    setTimeout(() => {
      const reply = generateChatResponse(text);
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 700);
  };

  return (
    <div className="chat-widget" id="chatWidget">
      <button 
        type="button" 
        className="chat-toggle-btn" 
        id="btnToggleChat" 
        aria-label="Open Live Chat"
        onClick={onToggle}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span className="chat-badge-pulse"></span>
      </button>

      {isOpen && (
        <div className="chat-window" id="chatWindow" style={{ display: 'flex' }}>
          <div className="chat-header">
            <div className="chat-agent-info">
              <div className="agent-avatar">
                <img 
                  src="/assets/cambridge-icon.png" 
                  alt="Cambridge Advisor" 
                  className="agent-avatar-img" 
                  width="30" 
                  height="30" 
                />
              </div>
              <div>
                <strong>Cambridge Advisor</strong>
                <span className="online-status">● Online</span>
              </div>
            </div>
            <button 
              type="button" 
              className="btn-close-chat" 
              id="btnCloseChat"
              onClick={onClose}
            >
              &times;
            </button>
          </div>

          <div className="chat-messages" id="chatMessages">
            {messages.map((m, idx) => (
              <div key={idx} className={`chat-msg ${m.sender}`}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" id="chatForm" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              id="chatInputText"
              placeholder="Type a question..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className="btn-send-chat">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
