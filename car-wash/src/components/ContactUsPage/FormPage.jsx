import { useState, useEffect, useRef } from "react";

import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import contactImg from "../../assets/formSection.jpg";
import "./FormPage.css"

function FormPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleSummit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
        alert("Message Sent");

        e.target.reset();
    };

    return (
        <section ref={sectionRef} className="contact-section-1">
            <div className="contact-container">

                {/* Info Cards Row - Moved to Top */}
                <div className={`contact-info-grid ${isVisible ? "animate-blocks-right" : ""}`}>
                    <div className="info-card card-1">
                        <div className="info-header">
                            <FaPhoneAlt className="info-icon" />
                            <h3>CALL US</h3>
                        </div>
                        <p><a href="tel:+1234560000">+12 (3) 456 0000</a>,</p>
                        <p><a href="tel:+1234560000">+12 (3) 456 0000</a></p>
                    </div>

                    <div className="info-card card-2">
                        <div className="info-header">
                            <FaMapMarkerAlt className="info-icon" />
                            <h3>LOCATION</h3>
                        </div>
                        <p>17 Green St, New York,</p>
                        <p>NY 10002, USA</p>
                    </div>

                    <div className="info-card card-3">
                        <div className="info-header">
                            <FaClock className="info-icon" />
                            <h3>HOURS</h3>
                        </div>
                        <p>Mon - Fri: 09:00 AM - 06:00 PM</p>
                        <p>Sat Sun: 10:00 AM - 05:00 PM</p>
                    </div>
                </div>

                {/* Form and Image Section */}
                <div className="contact-top-grid">
                    <div className={`contact-form-wrapper ${isVisible ? "animate-left" : ""}`}>
                        <h2 className="contact-heading">Get In Touch With us</h2>

                        <form onSubmit={handleSummit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" placeholder="Enter your Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Enter a valid email address" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" placeholder="Enter your phone (e.g. +14155552678)" required />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" name="subject" required />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>Message</label>
                                <textarea name="message" rows="4"></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    <div className={`contact-image-wrapper ${isVisible ? "animate-right" : ""}`}>
                        <img src={contactImg} alt="Car Wash Service" className="contact-img" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default FormPage;