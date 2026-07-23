import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./whyChooseUs.css";

const statsData = [
  { id: 1, number: "15+", label: "Year Of Experience" },
  { id: 2, number: "38K+", label: "Total Car Washed" },
  { id: 3, number: "10+", label: "Award Recognitions" },
  { id: 4, number: "20K+", label: "Trusted Clients" },
];

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="why-us-section">
      <div className="why-us-container">
        {/* Heading */}
        <h2
          className="why-us-heading"
          data-aos="zoom-in"
        >
          Why Clients Choose Us?
        </h2>

        {/* Content */}
        <div className="why-us-content-grid">
          <div
            className="why-us-column"
            data-aos="fade-left"
          >
            <h3 className="column-title">The Best Car Wash</h3>

            <ul className="feature-list">
              <li>
                <FaCheck className="check-icon" />
                We offer multiple services at a great value
              </li>

              <li>
                <FaCheck className="check-icon" />
                Consectetur adipiscing elit
              </li>

              <li>
                <FaCheck className="check-icon" />
                Sed do eiusmod tempor incididunt
              </li>

              <li>
                <FaCheck className="check-icon" />
                Ut enim ad minim veniam
              </li>

              <li>
                <FaCheck className="check-icon" />
                Nisi ut aliquip ex ea commodo
              </li>
            </ul>
          </div>

          <div
            className="why-us-column"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="column-title">What We Do Our Services</h3>

            <ul className="feature-list">
              <li>
                <FaCheck className="check-icon" />
                Lorem ipsum dolor sit amet
              </li>

              <li>
                <FaCheck className="check-icon" />
                Consectetur adipiscing elit
              </li>

              <li>
                <FaCheck className="check-icon" />
                Sed do eiusmod tempor incididunt
              </li>

              <li>
                <FaCheck className="check-icon" />
                Ut enim ad minim veniam
              </li>

              <li>
                <FaCheck className="check-icon" />
                Nisi ut aliquip ex ea commodo
              </li>
            </ul>
          </div>
        </div>

        {/* Cards */}
        <div className="why-us-cards-grid">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="stat-card-wrapper"
              data-aos="flip-up"
              data-aos-delay={300 + index * 150}
            >
              <div className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}