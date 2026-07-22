import React, { useEffect, useRef, useState } from "react";
import "./faqHeader.css";
import faqBgImage from "../../assets/ContactUsPage/img-1.jpg"; // Aapka image path

export default function FaqHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Re-trigger animation on scroll back
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="faq-header-wrapper">
      {/* 1. Blue Backdrop - Comes from TOP */}
      <div
        className={`faq-blue-backdrop ${isVisible ? "animate-from-top" : ""}`}
      ></div>

      {/* 2. Main Image - Scaled up from INSIDE */}
      <div
        className={`faq-image-card ${isVisible ? "animate-from-inside" : ""}`}
      >
        <img
          src={faqBgImage}
          alt="Car Wash FAQ"
          className="faq-main-image"
        />

        {/* 3. Bottom White Box - Comes from BOTTOM */}
        <div
          className={`faq-badge-box ${isVisible ? "animate-from-bottom" : ""}`}
        >
          <h1 className="faq-title">FAQ</h1>
          <span className="faq-attribution">
            Image from{" "}
            <a href="https://freepik.com" target="_blank" rel="noreferrer">
              Freepik
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}