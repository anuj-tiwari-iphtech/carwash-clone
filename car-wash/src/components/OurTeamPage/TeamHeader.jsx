import React, { useState, useEffect, useRef } from "react";
import "./teamHeader.css";
import teamBannerImg from "../../assets/faq.jpg"; 

export default function TeamHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

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

    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <div ref={headerRef} className="team-header-section">
      <div className="team-header-container">
        
        {/* 1. Blue Card (Top Se Slide) */}
        <div className={`blue-card-bg ${isVisible ? "animate-top" : ""}`}></div>

        {/* 2. Main Image Box (Left Se Slide) */}
        <div className={`main-image-wrapper ${isVisible ? "animate-left" : ""}`}>
          <img src={teamBannerImg} alt="Our Team Worker" className="main-team-img" />
        </div>

        {/* 3. Our Team White Box (Right Se Slide) */}
        <div className={`team-text-box ${isVisible ? "animate-right" : ""}`}>
          <h2 className="team-title">Our Team</h2>
          <p className="team-subtitle">
            Image from <a href="https://www.freepik.com" target="_blank" rel="noreferrer">Freepik</a>
          </p>
        </div>

      </div>
    </div>
  );
}