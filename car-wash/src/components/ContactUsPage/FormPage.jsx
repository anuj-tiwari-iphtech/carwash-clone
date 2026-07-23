import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import contactImg from "../../assets/formSection.jpg";
import "./FormPage.css";

function FormPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    alert("Message Sent");

    e.target.reset();
  };

  return (
    <section ref={sectionRef} className="contactpage">
      <div className="contactpage__container">

        {/* Info Cards Row - Top */}
        <div className={`contactpage__info-grid ${isVisible ? "contactpage__info-grid--animate" : ""}`}>
          <div className="contactpage__info-card contactpage__info-card--1">
            <div className="contactpage__info-header">
              <FaPhoneAlt className="contactpage__info-icon" />
              <h3 className="contactpage__info-title">CALL US</h3>
            </div>
            <p className="contactpage__info-text">
              <a href="tel:+1234560000" className="contactpage__info-link">+12 (3) 456 0000</a>,
            </p>
            <p className="contactpage__info-text">
              <a href="tel:+1234560000" className="contactpage__info-link">+12 (3) 456 0000</a>
            </p>
          </div>

          <div className="contactpage__info-card contactpage__info-card--2">
            <div className="contactpage__info-header">
              <FaMapMarkerAlt className="contactpage__info-icon" />
              <h3 className="contactpage__info-title">LOCATION</h3>
            </div>
            <p className="contactpage__info-text">17 Green St, New York,</p>
            <p className="contactpage__info-text">NY 10002, USA</p>
          </div>

          <div className="contactpage__info-card contactpage__info-card--3">
            <div className="contactpage__info-header">
              <FaClock className="contactpage__info-icon" />
              <h3 className="contactpage__info-title">HOURS</h3>
            </div>
            <p className="contactpage__info-text">Mon - Fri: 09:00 AM - 06:00 PM</p>
            <p className="contactpage__info-text">Sat Sun: 10:00 AM - 05:00 PM</p>
          </div>
        </div>

        {/* Form and Image Section */}
        <div className="contactpage__main-grid">
          <div className={`contactpage__form-wrapper ${isVisible ? "contactpage__form-wrapper--animate" : ""}`}>
            <h2 className="contactpage__heading">Get In Touch With us</h2>

            <form onSubmit={handleSubmit} className="contactpage__form">
              <div className="contactpage__form-row">
                <div className="contactpage__form-group">
                  <label className="contactpage__label">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="contactpage__input"
                    required
                  />
                </div>
                <div className="contactpage__form-group">
                  <label className="contactpage__label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter a valid email address"
                    className="contactpage__input"
                    required
                  />
                </div>
              </div>

              <div className="contactpage__form-row">
                <div className="contactpage__form-group">
                  <label className="contactpage__label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone (e.g. +14155552678)"
                    className="contactpage__input"
                    required
                  />
                </div>
                <div className="contactpage__form-group">
                  <label className="contactpage__label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="contactpage__input"
                    required
                  />
                </div>
              </div>

              <div className="contactpage__form-group contactpage__form-group--full">
                <label className="contactpage__label">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="contactpage__textarea"
                ></textarea>
              </div>

              <button type="submit" className="contactpage__submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className={`contactpage__image-wrapper ${isVisible ? "contactpage__image-wrapper--animate" : ""}`}>
            <img
              src={contactImg}
              alt="Car Wash Service"
              className="contactpage__image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default FormPage;