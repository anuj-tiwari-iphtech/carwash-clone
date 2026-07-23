import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutImg from "../assets/services/about.jpg";
import "../Css/about.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="about">
      <div className="about-content">

        <div className="about-left">
          <h2 data-aos="fade-down">
            Professional washing and cleaning of your car
          </h2>

          <p className="about-desc" data-aos="fade-left" data-aos-delay="100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </p>

          <div className="about-list" data-aos="fade-left" data-aos-delay="200">
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

          <h3 className="phone" data-aos="fade-left" data-aos-delay="300">
            Call for book: <span>8-800-10-500</span>
          </h3>
        </div>

        <div className="about-right" data-aos="fade-right">
          <img src={AboutImg} alt="Car Wash Professional" />
        </div>

      </div>
    </section>
  );
}

export default About;