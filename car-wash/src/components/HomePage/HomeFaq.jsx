import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqContent, faqItems } from "./faqData";
import "./homeFaq.css";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const itemRefs = useRef([]);

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
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="home-faq-title"
          >
            {faqContent.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="home-faq-subtext"
          >
            {faqContent.subtext}
          </motion.p>
        </div>

        {/* List */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="home-faq-list"
        >
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
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="home-faq-chevron"
                  >
                    <ChevronDown size={22} className="home-faq-chevron-icon" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="home-faq-answer-collapse"
                    >
                      <p className="home-faq-answer-text">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}