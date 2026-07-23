import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ServiceIcon1 from "../../assets/services/icon-1.png";
import ServiceIcon2 from "../../assets/services/icon-2.png";
import ServiceIcon3 from "../../assets/services/icon-3.png";
import ServiceIcon4 from "../../assets/services/icon-4.png";

import "./Homeservice.css";

const servicesData = [
  {
    id: 1,
    icon: ServiceIcon1,
    title: "Contactless Washing",
    description: "Sample text. Click to select the Text Element.",
    delay: 100,
  },
  {
    id: 2,
    icon: ServiceIcon2,
    title: "Safety Materials",
    description: "Sample text. Click to select the Text Element.",
    delay: 200,
  },
  {
    id: 3,
    icon: ServiceIcon3,
    title: "Modern Equipment",
    description: "Sample text. Click to select the Text Element.",
    delay: 300,
  },
  {
    id: 4,
    icon: ServiceIcon4,
    title: "Extensive Cleaning",
    description: "Sample text. Click to select the Text Element.",
    delay: 400,
  },
];

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="homepage-services">
      <div className="homepage-services__grid">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="homepage-services__card"
            data-aos="zoom-in"
            data-aos-delay={service.delay}
          >
            <div className="homepage-services__icon-wrapper">
              <img
                className="homepage-services__icon"
                src={service.icon}
                alt={service.title}
                data-aos="icon-flip"
                data-aos-delay="150"
              />
            </div>
            <h3 className="homepage-services__title">{service.title}</h3>
            <p className="homepage-services__description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;