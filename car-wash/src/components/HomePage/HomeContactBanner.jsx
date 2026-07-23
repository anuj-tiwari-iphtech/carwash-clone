import { useState, useEffect, useRef } from "react";
import "./HomeContactBanner.css";

function HomeContactBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.75 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      className={`home-contact-banner-section ${isVisible ? "animate-banner" : ""}`}
    >
      <div className="home-contact-banner-container">
        <h2 className="home-banner-title">Contact Us for Quality Care!</h2>

        <button className="home-banner-contact-btn">CONTACT US</button>
      </div>
    </section>
  );
}

export default HomeContactBanner;