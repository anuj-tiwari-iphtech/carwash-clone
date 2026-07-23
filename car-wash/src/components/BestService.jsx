import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css/bestServices.css";

import CardImg1 from "../assets/bestServices/Bp-1.jpg";
import CardImg2 from "../assets/bestServices/Bp-2.jpg";
import CardImg3 from "../assets/bestServices/Bp-3.jpg";
import CardImg4 from "../assets/bestServices/Bp-4.jpg";
import CardImg5 from "../assets/bestServices/Bp-5.jpg";
import CardImg6 from "../assets/bestServices/Bp-6.jpg";

const services = [
  { img: CardImg1, title: "FULL SERVICE WASH", price: "$44" },
  { img: CardImg2, title: "MANAGER'S SPECIAL WASH", price: "$36" },
  { img: CardImg3, title: "DELUXE EXTERIOR WASH", price: "$32" },
  { img: CardImg4, title: "INTERIOR DETAILING", price: "$50" },
  { img: CardImg5, title: "EXPRESS SHINE WASH", price: "$28" },
  { img: CardImg6, title: "PREMIUM CERAMIC COAT", price: "$65" },
];

function BestServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="best-services">
      <div className="services-container">

        <h2 className="services-title" data-aos="fade-down">
          Our Best Services You
        </h2>

        <div className="cards-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="card-img-box">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="card-body">
                <h3>{service.title}</h3>
                <div className="card-price">{service.price}</div>
                <p>
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <button className="learn-btn">LEARN MORE</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BestServices;