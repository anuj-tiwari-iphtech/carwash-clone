import React, { useEffect, useRef, useState } from "react";
import "./pricingHeader.css";
import pricingImg from "../../assets/pricing-img.jpg"; 

export default function PricingHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

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

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="pricing-header-wrapper">
      <div className="pricing-flip-container">
        
        <div
          className={`pricing-bg-card ${isVisible ? "animate-flip-y" : ""}`}
        ></div>

        <div
          className={`pricing-img-card ${isVisible ? "animate-bottom-scale" : ""}`}
        >
          <img
            src={pricingImg}
            alt="Pricing Header Car Wash"
            className="pricing-header-img"
          />
        </div>

        <div className={`pricing-badge-box ${isVisible ? "animate-badge-bottom" : ""}`}>
            <h1 className="pricing-title">Pricing</h1>
            <p className="pricing-attribution">
              Image from <a href="https://freepik.com" target="_blank" rel="noreferrer">Freepik</a>
            </p>
          </div>

      </div>
    </div>
  );
}