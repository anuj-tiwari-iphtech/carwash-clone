import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import ProcessImg1 from "../assets/process/step-1.png";
import ProcessImg2 from "../assets/process/step-2.png";
import ProcessImg3 from "../assets/process/step-3.png";
import ProcessImg4 from "../assets/process/step-4.png";

import "../Css/process.css";

const processSteps = [
  {
    id: 1,
    image: ProcessImg1,
    title: "1. Booking",
    desc: "Find out more about our SEO services",
  },
  {
    id: 2,
    image: ProcessImg2,
    title: "2. Inspection",
    desc: "Find out more about our PPC services",
  },
  {
    id: 3,
    image: ProcessImg3,
    title: "3. Valuation",
    desc: "Find out more about our Analytics services",
  },
  {
    id: 4,
    image: ProcessImg4,
    title: "4. Completion",
    desc: "Find out more about our Content Marketing services",
  },
];

function Process() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="process-section">
      {/* Background Overlay */}
      <div className="process-overlay"></div>

      <div className="process-container">
        {/* Section Header */}
        <div className="process-header" data-aos="fade-down">
          <h2>Our Process</h2>
          <p>We know your time is valuable</p>
        </div>

        {/* Process Steps Grid */}
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="process-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Circular Border with Image inside */}
              <div className="process-img-box">
                <img src={step.image} alt={step.title} />
              </div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;