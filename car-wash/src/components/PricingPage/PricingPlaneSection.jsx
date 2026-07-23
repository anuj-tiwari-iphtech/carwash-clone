import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pricingPlanSection.css";
import cardImg from "../../assets/portfolio/portfolio-img-2.jpg";

export default function PricingPlanSection() {
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
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="pricing-page-section">

      <h2 className="pricing-page-main-heading" data-aos="flip-up">
        Our pricing plan
      </h2>

      <div className="pricing-page-container">

        <div className="pricing-page-plans-list">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="pricing-page-plan-item"
              data-aos="fade-up"
              data-aos-delay={300 + index * 150}
            >
              <div className="pricing-page-plan-card">
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
            </div>
          ))}
        </div>

        <div className="pricing-page-card-perspective">
          <div className="pricing-page-banner-card" data-aos="flip-up" data-aos-delay="200">
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