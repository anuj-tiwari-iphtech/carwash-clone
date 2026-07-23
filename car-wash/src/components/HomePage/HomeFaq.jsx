import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";
import { faqContent, faqItems } from "./faqData";
import "./homeFaq.css";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const handleToggle = (index) => {
    const isOpening = openIndex !== index;
    setOpenIndex((prev) => (prev === index ? -1 : index));
    if (isOpening) {
      setTimeout(() => {
        itemRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 120);
    }
  };

  return (
    <section id="faq" className="home-faq-section">
      <div className="home-faq-container">

        {/* Heading */}
        <div className="home-faq-heading-box">
          <h2 className="home-faq-title" data-aos="fade-down">
            {faqContent.heading}
          </h2>
          <p
            className="home-faq-subtext"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {faqContent.subtext}
          </p>
        </div>

        {/* List */}
        <div className="home-faq-list" data-aos="fade-up">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="home-faq-item"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="home-faq-question-btn"
                >
                  <span className="home-faq-question-text">{item.question}</span>
                  <span
                    className={`home-faq-chevron ${isOpen ? "home-faq-chevron-open" : ""}`}
                  >
                    <ChevronDown size={22} className="home-faq-chevron-icon" />
                  </span>
                </button>

                <div
                  className={`home-faq-answer-collapse ${isOpen ? "home-faq-answer-open" : ""}`}
                >
                  <p className="home-faq-answer-text">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}