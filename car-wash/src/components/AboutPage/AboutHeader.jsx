import React, { useState, useEffect, useRef } from "react";
import "./aboutHeader.css";
import aboutImg from "../../assets/AboutPage/Img.jpg"; 

export default function AboutHeader() {
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
    <section ref={sectionRef} className="aboutpage-section">
      <div className="aboutpage-container">

        <div className={`aboutpage-blue-bg ${isVisible ? "aboutpage-animate-top" : ""}`}></div>

        <div className={`aboutpage-image-wrapper ${isVisible ? "aboutpage-animate-left" : ""}`}>
          <img src={aboutImg} alt="Car Detailer" className="aboutpage-img" />
        </div>

        <div className={`aboutpage-text-card ${isVisible ? "aboutpage-animate-right" : ""}`}>
          <h2 className="aboutpage-heading">About Us</h2>
          
          <p className="aboutpage-description">
            Massa ultricies mi quis hendrerit. Ac ut consequat semper viverra
            nam. Libero id faucibus nisl tincidunt eget nullam non nisi est. Arcu
            odio ut sem nulla. Amet tellus cras adipiscing enim.
          </p>

          <p className="aboutpage-source">
            Image from <a href="https://www.freepik.com" target="_blank" rel="noreferrer">Freepik</a>
          </p>

          <button className="aboutpage-btn">
            BOOK APPOINTMENT
          </button>
        </div>

      </div>
    </section>
  );
}