import React, { useEffect, useRef, useState } from "react";
import AboutImg from "../assets/services/about.jpg";
import "../Css/about.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about ${isVisible ? "in-view" : ""}`}
    >
      <div className="about-content">
       
        <div className="about-left">
          <h2 className="animate-top">
            Professional washing and cleaning of your car
          </h2>

          <p className="about-desc animate-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </p>

          <div className="about-list animate-left">
            <div>
              <h3>The Best Car Wash</h3>
              <ul>
                <li><span>✓</span> We offer multiple services at a great value</li>
                <li><span>✓</span> Consectetur adipiscing elit</li>
                <li><span>✓</span> Sed do eiusmod tempor incididunt</li>
                <li><span>✓</span> Ut enim ad minim veniam</li>
                <li><span>✓</span> Nisi ut aliquip ex ea commodo</li>
              </ul>
            </div>

            <div>
              <h3>What We Do Our Services</h3>
              <ul>
                <li><span>✓</span> Lorem ipsum dolor sit amet</li>
                <li><span>✓</span> Consectetur adipiscing elit</li>
                <li><span>✓</span> Sed do eiusmod tempor incididunt</li>
                <li><span>✓</span> Ut enim ad minim veniam</li>
                <li><span>✓</span> Nisi ut aliquip ex ea commodo</li>
              </ul>
            </div>
          </div>

          <h3 className="phone animate-left">
            Call for book: <span>8-800-10-500</span>
          </h3>
        </div>

       
        <div className="about-right animate-right">
          <img src={AboutImg} alt="Car Wash Professional" />
        </div>
      </div>
    </section>
  );
}

export default About;