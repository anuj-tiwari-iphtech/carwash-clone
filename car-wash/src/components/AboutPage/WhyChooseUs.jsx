import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa"; // npm install react-icons agar install nahi hai
import "./whyChooseUs.css";

const statsData = [
  { id: 1, number: "15+", label: "Year Of experience" },
  { id: 2, number: "38K+", label: "Total Car Washed" },
  { id: 3, number: "10+", label: "Award Recognitions" },
  { id: 4, number: "20k", label: "Trusted Clients" },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="why-us-section">
      <div className="why-us-container">
        
        {/* 1. Main Heading (Zoom / Pop from inside screen) */}
        <h2 className={`why-us-heading ${isVisible ? "animate-zoom-in" : ""}`}>
          Why Clients Choose Us?
        </h2>

        {/* 2. Description Columns (Slide from Right) */}
        <div className="why-us-content-grid">
          
          <div className={`why-us-column ${isVisible ? "animate-slide-right" : ""}`}>
            <h3 className="column-title">The Best Car Wash</h3>
            <ul className="feature-list">
              <li><FaCheck className="check-icon" /> We offer multiple services at a great value</li>
              <li><FaCheck className="check-icon" /> Consectetur adipiscing elit</li>
              <li><FaCheck className="check-icon" /> Sed do eiusmod tempor incididunt</li>
              <li><FaCheck className="check-icon" /> Ut enim ad minim veniam</li>
              <li><FaCheck className="check-icon" /> Nisi ut aliquip ex ea commodo</li>
            </ul>
          </div>

          <div className={`why-us-column delay-right ${isVisible ? "animate-slide-right" : ""}`}>
            <h3 className="column-title">What We Do Our Services</h3>
            <ul className="feature-list">
              <li><FaCheck className="check-icon" /> Lorem ipsum dolor sit amet</li>
              <li><FaCheck className="check-icon" /> Consectetur adipiscing elit</li>
              <li><FaCheck className="check-icon" /> Sed do eiusmod tempor incididunt</li>
              <li><FaCheck className="check-icon" /> Ut enim ad minim veniam</li>
              <li><FaCheck className="check-icon" /> Nisi ut aliquip ex ea commodo</li>
            </ul>
          </div>

        </div>

        {/* 3. Stat Cards (180 Degree Flip) */}
        <div className="why-us-cards-grid">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`stat-card-wrapper ${isVisible ? "animate-flip" : ""}`}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}