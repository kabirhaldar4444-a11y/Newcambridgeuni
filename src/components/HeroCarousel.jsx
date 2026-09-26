import React, { useState, useEffect, useRef } from 'react';

const HERO_SLIDES = [
  {
    id: 0,
    tag: "LEARN FROM ANYWHERE",
    title: "Study Anywhere.<br />Become Anything.",
    subtitle: "World-class education designed for working professionals worldwide.",
    ctaText: "EXPLORE 150+ PROGRAMS",
    ctaTarget: "certificateExploreSection",
    bgImage: "/assets/hero-slide1.jpg"
  },
  {
    id: 1,
    tag: "CAMBRIDGE LEARNING SERVICES",
    title: "STAND APART",
    subtitle: "With a Professional Certificate from Cambridge Learning Services",
    ctaText: "GET STARTED NOW",
    ctaTarget: "requestInfoSection",
    bgImage: "/assets/hero-slide2.jpg"
  },
  {
    id: 2,
    tag: "PEER & FACULTY COLLABORATION",
    title: "LEARN ONLINE",
    subtitle: "Rigorous classes with personalized guidance & meaningful feedback (from actual humans!)",
    ctaText: "HOW IT WORKS",
    ctaTarget: "howItWorksSection",
    bgImage: "/assets/hero-slide3.jpg"
  },
  {
    id: 3,
    tag: "CAREER-DEFINING OUTCOMES",
    title: "KNOW IT. DO IT.",
    subtitle: "Master today's most in-demand skills in AI, Data, Strategy, and Leadership.",
    ctaText: "FIND YOUR CERTIFICATE",
    ctaTarget: "certificateExploreSection",
    bgImage: "/assets/hero-slide4.jpg"
  }
];

export default function HeroCarousel({ onScrollToSection }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = HERO_SLIDES.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleGoTo = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className="hero-carousel-section" 
      id="heroCarousel" 
      aria-label="Hero Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-container">
        
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div 
              key={slide.id}
              className={`carousel-slide ${isActive ? 'active' : ''}`}
              data-slide={slide.id}
            >
              {/* High-Resolution Relevant Slide Background Image (No video) */}
              <img 
                src={slide.bgImage} 
                alt={slide.tag} 
                className="hero-slide-bg"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="hero-slide-overlay"></div>

              <div className="container hero-content">
                <div className="hero-tag">{slide.tag}</div>
                {index === 0 ? (
                  <h1 
                    className="hero-title"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                ) : (
                  <h2 
                    className="hero-title"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                )}
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-cta-group">
                  <button 
                    type="button"
                    className="btn-hero-primary"
                    onClick={() => onScrollToSection(slide.ctaTarget)}
                  >
                    {slide.ctaText}
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Slider Arrows */}
        <button 
          type="button" 
          className="slider-arrow prev" 
          id="sliderPrev" 
          aria-label="Previous Slide"
          onClick={handlePrev}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          type="button" 
          className="slider-arrow next" 
          id="sliderNext" 
          aria-label="Next Slide"
          onClick={handleNext}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Slider Indicators */}
        <div className="slider-indicators" id="sliderIndicators">
          {HERO_SLIDES.map((slide, index) => (
            <button 
              key={slide.id}
              type="button"
              className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
              data-slide-to={index} 
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => handleGoTo(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
