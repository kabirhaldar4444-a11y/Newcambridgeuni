import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    id: 0,
    avatar: '/assets/avatar-kasey.png',
    author: 'Kasey M.',
    title: 'Technology & Engineering Student',
    quote: '“Cambridge Learning Services gave me the confidence I needed to take a seat at the table and say: <strong>I’m ready.</strong>”'
  },
  {
    id: 1,
    avatar: '/assets/avatar-elizabeth.png',
    author: 'Elizabeth A.',
    title: 'Diversity & Inclusion Certificate Student',
    quote: '“What I wanted was something that had an exceptional caliber of professionals and professors, and <strong>Cambridge Learning Services actually gave me that.</strong>”'
  },
  {
    id: 2,
    avatar: '/assets/avatar-christine.png',
    author: 'Christine J.',
    title: 'Hospitality Management Student',
    quote: '“Cambridge Learning Services was truly one of the <strong>best investments I made in my entire career</strong> and it’s what brought me to where I am now.”'
  },
  {
    id: 3,
    avatar: '/assets/avatar-nicole.png',
    author: 'Nicole K.',
    title: 'Senior Manager, Mars Snacking',
    quote: '“The way the session balanced inspiration with practical advice was impressive. They introduced frameworks that made AI feel accessible rather than abstract. I walked away feeling energized.”'
  }
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section" id="testimonialsSection">
      <div className="container">
        <div className="section-title-wrap text-center">
          <h2 className="section-heading text-white">Student Stories</h2>
          <p className="section-subtext text-gray">
            Hear how Cambridge Learning Services credentials transform careers across industries.
          </p>
        </div>

        <div className="testimonials-carousel" id="testimonialsCarousel">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              className={`testimonial-slide ${index === currentIdx ? 'active' : ''}`}
              data-t-index={index}
            >
              <div className="testimonial-card">
                <div className="avatar-wrap">
                  <img src={item.avatar} alt={item.author} className="testimonial-avatar" />
                </div>
                <div className="stars">★★★★★</div>
                <blockquote 
                  className="testimonial-quote"
                  dangerouslySetInnerHTML={{ __html: item.quote }}
                />
                <div className="testimonial-author">{item.author}</div>
                <div className="testimonial-title">{item.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Dots */}
        <div className="testimonial-dots" id="testimonialDots">
          {TESTIMONIALS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`t-dot ${index === currentIdx ? 'active' : ''}`}
              data-t-target={index}
              aria-label={`Testimonial ${index + 1}`}
              onClick={() => setCurrentIdx(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
