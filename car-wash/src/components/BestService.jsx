import React, { useEffect, useRef, useState } from "react";
import "../Css/bestServices.css";


import CardImg1 from "../assets/bestServices/Bp-1.jpg";
import CardImg2 from "../assets/bestServices/Bp-2.jpg";
import CardImg3 from "../assets/bestServices/Bp-3.jpg";
import CardImg4 from "../assets/bestServices/Bp-4.jpg";
import CardImg5 from "../assets/bestServices/Bp-5.jpg";
import CardImg6 from "../assets/bestServices/Bp-6.jpg";

function BestServices() {
  const [row1Visible, setRow1Visible] = useState(false);
  const [row2Visible, setRow2Visible] = useState(false);

  const sectionRef = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setRow1Visible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
  
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setRow2Visible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
  
    if (sectionRef.current) observer1.observe(sectionRef.current);
    if (row2Ref.current) observer2.observe(row2Ref.current);
  
    return () => {
      if (sectionRef.current) observer1.unobserve(sectionRef.current);
      if (row2Ref.current) observer2.unobserve(row2Ref.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`best-services ${row1Visible ? "in-view" : ""}`}>
      <div className="services-container">
        
        
        <h2 className="services-title animate-header">
          Our Best Services You
        </h2>

        
        <div className="cards-grid">
          
          
          <div className="service-card animate-card ">
            <div className="card-img-box">
              <img src={CardImg1} alt="FULL SERVICE WASH" />
            </div>
            <div className="card-body">
              <h3>FULL SERVICE WASH</h3>
              <div className="card-price">$44</div>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              <button className="learn-btn">LEARN MORE</button>
            </div>
          </div>

          
          <div className="service-card animate-card ">
            <div className="card-img-box">
              <img src={CardImg2} alt="MANAGER'S SPECIAL WASH" />
            </div>
            <div className="card-body">
              <h3>MANAGER'S SPECIAL WASH</h3>
              <div className="card-price">$36</div>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              <button className="learn-btn">LEARN MORE</button>
            </div>
          </div>

          
          <div className="service-card animate-card ">
            <div className="card-img-box">
              <img src={CardImg3} alt="DELUXE EXTERIOR WASH" />
            </div>
            <div className="card-body">
              <h3>DELUXE EXTERIOR WASH</h3>
              <div className="card-price">$32</div>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              <button className="learn-btn">LEARN MORE</button>
            </div>
          </div>

        </div>

        
        <div ref={row2Ref} className={`cards-grid second-row ${row2Visible ? "threshold-active" : ""}`}>
          
          
          <div className="service-card animate-card-row2 ">
            <div className="card-img-box">
              <img src={CardImg4} alt="INTERIOR DETAILING" />
            </div>
            <div className="card-body">
              <h3>INTERIOR DETAILING</h3>
              <div className="card-price">$50</div>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              <button className="learn-btn">LEARN MORE</button>
            </div>
          </div>

          
          <div className="service-card animate-card-row2 ">
            <div className="card-img-box">
              <img src={CardImg5} alt="EXPRESS SHINE WASH" />
            </div>
            <div className="card-body">
              <h3>EXPRESS SHINE WASH</h3>
              <div className="card-price">$28</div>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              <button className="learn-btn">LEARN MORE</button>
            </div>
          </div>

          
          <div className="service-card animate-card-row2 ">
            <div className="card-img-box">
              <img src={CardImg6} alt="PREMIUM CERAMIC COAT" />
            </div>
            <div className="card-body">
              <h3>PREMIUM CERAMIC COAT</h3>
              <div className="card-price">$65</div>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              <button className="learn-btn">LEARN MORE</button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BestServices;