import React, { useEffect, useState, useRef } from "react";
import "../Css/qualityService.css";

import Img1 from "../assets/QulaityService/Qs-1.jpg";
import Img2 from "../assets/QulaityService/Qs-2.jpg";

function QualityService() {
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
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`quality-section ${isVisible ? "animate-quality" : ""}`}
    >
      <div className="bg-bottom-light"></div>

      <div className="quality-container">
        <div className="quality-block block-top">
          <div className="content-left">
            <h2 className="section-title">Quality service</h2>
            <p className="section-text">
              Sample text. Click to select the text box. Click again or double click to start editing the text.
            </p>
            <button className="primary-btn">VIEW ALL SERVICES</button>
            <p className="freepik-text">
              Images from <a href="https://freepik.com" target="_blank" rel="noreferrer">Freepik</a>
            </p>
          </div>

          <div className="images-group">
            <div className="image-wrapper img-wrapper-1">
     
              <div className="image-box">
                <img src={Img1} alt="Car Wash Professional 1" />
              </div>
            </div>

            <div className="image-wrapper img-wrapper-2">
              <div className="image-box">
                <img src={Img2} alt="Car Wash Professional 2" />
              </div>
            </div>
          </div>

          <div className="content-right">
            <ul className="feature-list">
              <li><span className="check-icon">✓</span> We offer multiple services at a great value</li>
              <li><span className="check-icon">✓</span> Multiple car wash locations</li>
              <li><span className="check-icon">✓</span> Biodegradable and eco-friendly products</li>
              <li><span className="check-icon">✓</span> Pay for your wash electronically and securely</li>
            </ul>
            <button className="primary-btn">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualityService;