import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    id: 0,
    avatar: '/assets/avatar-indian-student.jpg',
    author: 'Priya S.',
    title: 'AI & Modern Workflows Student, Mumbai',
    quote: '\u201cCambridge Learning Services helped me upskill in AI and automation from the comfort of my home. The course content was <strong>world-class and highly practical</strong> for real industry use.\u201d'
  },
  {
    id: 1,
    avatar: '/assets/avatar-indian-male.jpg',
    author: 'Arjun R.',
    title: 'Construction Project Management Student, Pune',
    quote: '\u201cThe BIM and Project Management course gave me the edge I needed to get promoted. <strong>Best career decision I have ever made.</strong> Highly recommended for anyone in the construction sector.\u201d'
  },
  {
    id: 2,
    avatar: '/assets/avatar-indian-student2.jpg',
    author: 'Sneha M.',
    title: 'Corporate Operations & Logistics Student, Bengaluru',
    quote: '\u201cI completed the Supply Chain Logistics certification in 20 days while working full-time. The self-paced format was perfect and <strong>Cambridge Learning Services actually delivered what they promised.\u201d</strong>\u201d'
  },
  {
    id: 3,
    avatar: '/assets/smiling-studentimg.avif',
    author: 'Rahul K.',
    title: 'Senior Manager, Tata Consultancy Services, Delhi',
    quote: '\u201cThe course balanced inspiration with practical frameworks beautifully. AI went from feeling abstract to something I could immediately apply at work. <strong>I walked away feeling truly energized.\u201d</strong>\u201d'
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
