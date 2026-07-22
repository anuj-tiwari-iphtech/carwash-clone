import React, { useEffect, useRef, useState } from "react";
import "./faqService.css";
import serviceImg from "../../assets/AboutPage/car-cleaning.jpg"; 

export default function BestServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Scroll back hone par animation reset karega
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="best-services-section">
      <div className="best-services-container">
        
        {/* Left Column: Image comes from LEFT */}
        <div className={`best-services-image-box ${isVisible ? "animate-from-left" : ""}`}>
          <img
            src={serviceImg}
            alt="Car Wash Engine Service"
            className="best-services-img"
          />
        </div>

        {/* Right Column: Text & Content Area */}
        <div className="best-services-content">
          
          {/* Main Heading comes from INSIDE (Scale Pop) */}
          <h2 className={`best-services-title ${isVisible ? "animate-from-inside" : ""}`}>
            Our Best Services You
          </h2>

          {/* Description Paragraph comes from RIGHT + INSIDE */}
          <p className={`best-services-desc ${isVisible ? "animate-from-right-inside" : ""}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </p>

          {/* Phone Number Callout comes from RIGHT + INSIDE */}
          <div className={`best-services-phone ${isVisible ? "animate-from-right-inside-delayed" : ""}`}>
            Call for book: <span>8-800-10-500</span>
          </div>

          {/* CTA Button comes from RIGHT + INSIDE */}
          <button className={`best-services-btn ${isVisible ? "animate-from-right-inside-btn" : ""}`}>
            BOOK APPOINTMENT
          </button>

        </div>

      </div>
    </section>
  );
}