import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./servicesHeader.css";

// Hero Image
import heroImg from "../../assets/faq.jpg";

// Card Icons
import icon1 from "../../assets/services/icon-1.png";
import icon2 from "../../assets/services/icon-2.png";
import icon3 from "../../assets/services/icon-3.png";
import icon4 from "../../assets/services/icon-4.png";

const featuresData = [
  {
    id: 1,
    icon: icon1,
    title: "Contactless Washing",
    description: "Sample text. Click to select the Text Element.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Safety Materials",
    description: "Sample text. Click to select the Text Element.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Modern Equipment",
    description: "Sample text. Click to select the Text Element.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Extensive Cleaning",
    description: "Sample text. Click to select the Text Element.",
  },
];

export default function ServiceBanner() {
  const [isInView, setIsInView] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={bannerRef}
      className={`service-page-banner ${isInView ? "service-page-banner--in-view" : ""}`}
    >
      {/* ================= HERO IMAGE ================= */}
      <div className="service-page-banner__hero">
        <div className="service-page-banner__overlay-gradient" />
        <img
          src={heroImg}
          alt="Service Banner"
          className="service-page-banner__image"
        />
        <div className="service-page-banner__overlay-light" />
      </div>

      {/* ================= FEATURE CARDS ================= */}
      <div className="service-page-banner__cards-wrapper">
        <div className="service-page-banner__grid">
          {featuresData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, scale: 0.45, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="service-page-banner__card"
            >
              {/* ---------- ICON ---------- */}
              <motion.div
                initial={{ rotate: -360, scale: 0, opacity: 0 }}
                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25 + index * 0.15,
                  type: "spring",
                }}
                className="service-page-banner__icon-box"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="service-page-banner__icon"
                />
              </motion.div>

              {/* ---------- TITLE ---------- */}
              <motion.h3
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.45 + index * 0.15 }}
                className="service-page-banner__card-title"
              >
                {item.title}
              </motion.h3>

              {/* ---------- DESCRIPTION ---------- */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.55 + index * 0.15 }}
                className="service-page-banner__card-description"
              >
                {item.description}
              </motion.p>

              {/* ---------- BOTTOM BLUE LINE ---------- */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 70, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.65 + index * 0.15 }}
                className="service-page-banner__divider"
              />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="service-page-banner__bottom-spacer" />
    </section>
  );
}