import React, { useEffect, useRef, useState } from "react";
import AboutImg from "../../assets/formSection.jpg";
import "./HomeAbout.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
      className={`homepage-about ${isVisible ? "homepage-about--in-view" : ""}`}
    >
      <div className="homepage-about__container">
        <div className="homepage-about__image-wrapper homepage-about__animate-left">
          <img
            src={AboutImg}
            alt="Car Wash Professional"
            className="homepage-about__image"
          />
        </div>

        <div className="homepage-about__content">
          <h2 className="homepage-about__heading homepage-about__animate-top">
            Professional washing and cleaning of your car
          </h2>

          <p className="homepage-about__description homepage-about__animate-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </p>

          <div className="homepage-about__services-grid homepage-about__animate-right">
            <div className="homepage-about__service-column">
              <h3 className="homepage-about__service-title">The Best Car Wash</h3>
              <ul className="homepage-about__service-list">
                <li className="homepage-about__service-item">
                  <span className="homepage-about__check-icon">✓</span> We offer multiple services at a great value
                </li>
                <li className="homepage-about__service-item">
                  <span className="homepage-about__check-icon">✓</span> Consectetur adipiscing elit
                </li>
                <li className="homepage-about__service-item">
                  <span className="homepage-about__check-icon">✓</span> Sed do eiusmod tempor incididunt
                </li>
                <li className="homepage-about__service-item">
                  <span className="homepage-about__check-icon">✓</span> Ut enim ad minim veniam
                </li>
                <li className="homepage-about__service-item">
                  <span className="homepage-about__check-icon">✓</span> Nisi ut aliquip ex ea commodo
                </li>
              </ul>
            </div>

            <div className="homepage-about__service-column">
              <h3 className="homepage-about__service-title">What We Do Our Services</h3>
              <ul className="homepage-about__service-list">
                <li className="homepage-about__service-item">
                  <span className="homepage-about__check-icon">✓</span> Lorem ipsum dolor sit amet
                </li>
                <li className="homepage-about__service-item">
                  <span className="homepage-about__check-icon">✓</span> Consectetur adipiscing elit
                </li>
                <li className="homepage-about__service-item">
                  <span className="homepage-about__check-icon">✓</span> Sed do eiusmod tempor incididunt
                </li>
                <li className="homepage-about__service-item">
                  <span className="homepage-about__check-icon">✓</span> Ut enim ad minim veniam
                </li>
                <li className="homepage-about__service-item">
                  <span className="homepage-about__check-icon">✓</span> Nisi ut aliquip ex ea commodo
                </li>
              </ul>
            </div>
          </div>

          <h3 className="homepage-about__phone homepage-about__animate-right">
            Call for book: <span className="homepage-about__phone-number">8-800-10-500</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default About;