
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ServiceIcon1 from "../assets/services/icon-1.png";
import ServiceIcon2 from "../assets/services/icon-2.png";
import ServiceIcon3 from "../assets/services/icon-3.png";
import ServiceIcon4 from "../assets/services/icon-4.png";

import "../Css/services.css";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 100,    
    });
  }, []);

  return (
    <section className="services">
      <div
        className="service-box"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <img className="Service-Icon" src={ServiceIcon1} alt="Contactless Washing" />
        <h3>Contactless Washing</h3>
        <p>Sample text. Click to select the <br/> Text Element.</p>
      </div>

      <div
        className="service-box"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img className="Service-Icon" src={ServiceIcon2} alt="Safety Materials" />
        <h3>Safety Materials</h3>
        <p>Sample text. Click to select the <br/> Text Element.</p>
      </div>

      <div
        className="service-box"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <img className="Service-Icon" src={ServiceIcon3} alt="Modern Equipment" />
        <h3>Modern Equipment</h3>
        <p>Sample text. Click to select the <br/> Text Element.</p>
      </div>

      <div
        className="service-box"
        data-aos="zoom-in"
        data-aos-delay="400"
        >
        <img className="Service-Icon" src={ServiceIcon4} alt="Extensive Cleaning" />
            <h3>Extensive Cleaning</h3>
            <p>Sample text. Click to select the <br/> Text Element.</p>
      </div>
    </section>
  );
}

export default Services;

