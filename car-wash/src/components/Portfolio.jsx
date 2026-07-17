import { useState, useRef, useEffect } from "react";
import "../Css/portfolio.css";

import Port1 from "../assets/portfolio/portfolio-img-1.jpg";
import Port2 from "../assets/portfolio/portfolio-img-2.jpg";
import Port3 from "../assets/portfolio/portfolio-img-3.jpg";
import Port4 from "../assets/portfolio/portfolio-img-4.jpg";
import Port5 from "../assets/portfolio/portfolio-img-5.jpg";
import Port6 from "../assets/portfolio/portfolio-img-6.jpg";

const images = [Port1, Port2, Port3, Port4, Port5, Port6];

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [step, setStep] = useState(0);

  const sectionRef = useRef(null);
  const windowRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    function updateMetrics() {
      if (!trackRef.current || !windowRef.current) return;
      const firstCard = trackRef.current.children[0];
      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const gapStr = getComputedStyle(trackRef.current).gap;
      const gap = parseFloat(gapStr) || 0;
      const cardStep = cardWidth + gap;

      const containerWidth = windowRef.current.getBoundingClientRect().width;
      const visibleCount = Math.max(1, Math.round(containerWidth / cardStep));

      const newMaxIndex = Math.max(0, images.length - visibleCount);

      setStep(cardStep);
      setMaxIndex(newMaxIndex);
      setCardIndex((prev) => Math.min(prev, newMaxIndex));
    }

    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, []);

  const handlePrev = () => setCardIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCardIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section
      ref={sectionRef}
      className={`portfolio-section ${isVisible ? "animate-section" : ""}`}
    >
      <div className="portfolio-container">
        <h2 className="portfolio-title">Our Car Wash Portfolio</h2>
        <p className="portfolio-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore.
        </p>

        <div className="portfolio-slider-wrapper">
          <button
            type="button"
            className={`slider-btn prev-btn ${cardIndex === 0 ? "disabled" : ""}`}
            onClick={handlePrev}
          >
            &#8249;
          </button>

          <div className="portfolio-window" ref={windowRef}>
            <div
              className="portfolio-track"
              ref={trackRef}
              style={{ transform: `translateX(-${cardIndex * step}px)` }}
            >
              {images.map((img, idx) => (
                <div className="portfolio-card" key={idx}>
                  <img src={img} alt={`Car Wash ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`slider-btn next-btn ${cardIndex === maxIndex ? "disabled" : ""}`}
            onClick={handleNext}
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;