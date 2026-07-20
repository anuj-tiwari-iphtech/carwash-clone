import React, { useState, useEffect, useRef } from "react";
import "../css/faq.css"; 

import faqImage from "../assets/faq.jpg";

const faqContent = {
  heading: "CAR WASH FAQS ANSWERED",
  subtext:
    "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  image: faqImage,
  imageCredit: "Freepik",
};

const faqItems = [
  {
    question: "How often should I wash my car?",
    answer:
      "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
  },
  {
    question: "What types of vehicles can you wash?",
    answer:
      "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
  },
  {
    question: "Is the wash safe for convertibles?",
    answer:
      "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
  },
  {
    question: "Do you offer interior cleaning services?",
    answer:
      "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
  },
  {
    question: "Can I stay in my car during the wash?",
    answer:
      "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
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
      }, 150);
    }
  };

  return (
    <section ref={sectionRef} className="faq-section">
      <div className="faq-container">
        
        <div className={`faq-heading-box ${isVisible ? "animate-faq-heading" : ""}`}>
          <h2 className="faq-title">{faqContent.heading}</h2>
          <p className="faq-subtext">{faqContent.subtext}</p>
        </div>

        <div className="faq-grid">
          
          <div className={`faq-image-wrapper ${isVisible ? "animate-faq-left" : ""}`}>
            <img src={faqContent.image} alt="FAQ Section" className="faq-img" />
          </div>

          <div className={`faq-list-wrapper ${isVisible ? "animate-faq-right" : ""}`}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className="faq-item"
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className={`faq-chevron ${isOpen ? "open" : ""}`}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#666"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  <div className={`faq-answer-collapse ${isOpen ? "open" : ""}`}>
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>

                  
                </div>
                
              );
              
            })}
            <p className="faq-credit">
          Image from <span className="faq-credit-link">{faqContent.imageCredit}</span>
        </p>
          </div>

        </div>

        

      </div>
    </section>
  );
}

export default FaqSection