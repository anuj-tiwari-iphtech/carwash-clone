import { useState, useEffect, useRef } from "react";
import "../../Css/contactBanner.css";

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
        className={`contact-banner-section ${isVisible ? "animate-banner" : ""}`}
        style={{
            backgroundColor:"#eeeeee",
         }}
      >
        <div className="contact-banner-container"
         
        >
         
          <h2 className="banner-title"
            style={{
                color:"#000000",
            }}
          >Contact Us for Quality Care!</h2>
  
          <button className="banner-contact-btn"
            style={{
                color:"blue"
            }}
          >CONTACT US</button>
        </div>
      </section>
    );
  }
  

export default HomeContactBanner