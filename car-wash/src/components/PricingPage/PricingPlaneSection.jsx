import React, { useEffect, useRef, useState } from "react";
import "./pricingPlanSection.css";
import cardImg from "../../assets/portfolio/portfolio-img-2.jpg";

export default function PricingPlanSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const plans = [
    {
      title: "STANDART PACKAGE",
      price: "$250",
      features: ["Wheel & steering checkup", "Engine services", "Automated testing lanes"],
    },
    {
      title: "COOLING PACKAGE",
      price: "$350",
      features: ["Wheel & steering checkup", "Engine services", "Automated testing lanes"],
    },
    {
      title: "PREMIUM PACKAGE",
      price: "$450",
      features: ["Wheel & steering checkup", "Engine services", "Automated testing lanes"],
    },
  ];

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
    <section ref={sectionRef} className="pricing-page-section">

      <h2 className={`pricing-page-main-heading ${isVisible ? "pricing-page-animate-heading-flip" : ""}`}>
        Our pricing plan
      </h2>

      <div className="pricing-page-container">
        

        <div className="pricing-page-plans-list">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-page-plan-item ${isVisible ? "pricing-page-animate-content-down" : ""}`}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
                
              <div className="pricing-page-plan-header-info">
                <span className="pricing-page-plan-tag">{plan.title}</span>
                <span className="pricing-page-plan-price">{plan.price}</span>
              </div>

              <div className="pricing-page-plan-details">
                <ul className="pricing-page-plan-features">
                  {plan.features.map((feat, i) => (
                    <li key={i}>
                      <span className="pricing-page-checkmark">✓</span> {feat}
                    </li>
                  ))}
                </ul>

                <button className="pricing-page-plan-buy-btn">PURCHASE NOW</button>
              </div>
            </div>
          ))}
        </div>


        <div className="pricing-page-card-perspective">
          <div className={`pricing-page-banner-card ${isVisible ? "pricing-page-animate-card-flip-y" : ""}`}>
            <div className="pricing-page-banner-img-wrapper">
              <img src={cardImg} alt="Car Cleaning" className="pricing-page-banner-img" />
            </div>
            
            <div className="pricing-page-banner-info">
              <h3>Call Us for find out More</h3>
              <p className="pricing-page-banner-phone">
                <span className="pricing-page-phone-icon">📞</span> 8-800-10-500
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}