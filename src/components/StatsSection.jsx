import React, { useState, useEffect, useRef } from 'react';

const STATS_DATA = [
  { target: 92, label: 'Of certificate program students found the program valuable to their career' },
  { target: 86, label: 'Were able to apply what they learned immediately to their work and life' },
  { target: 85, label: 'Said the program increased their confidence as a leader or professional' },
  { target: 84, label: 'Reported that the program directly improved their job performance and skills' }
];

export default function StatsSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const stepTime = 20;
          const totalSteps = duration / stepTime;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = Math.min(step / totalSteps, 1);
            setCounts(
              STATS_DATA.map((item) => Math.floor(item.target * progress))
            );
            if (progress >= 1) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats-section" id="statsSection" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {STATS_DATA.map((item, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">
                <span className="counter">{hasAnimated ? counts[idx] : 0}</span>
                <span className="suffix">%</span>
              </div>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
