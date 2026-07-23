import { useEffect } from "react";
import "../Css/contactSection.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import contactImg from "../assets/formSection.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // Set to true if you want animations to happen only once while scrolling down
            easing: "ease-in-out",
        });
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
        <section className="contact-section">
            <div className="contact-container">

                <div className="contact-top-grid">
                    <div className="contact-form-wrapper" data-aos="fade-right" data-aos-duration="900">
                        <h2 className="contact-heading">Get In Touch with us</h2>

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
                                    <input type="tel" name="Phone" placeholder="Enter your phone (e.g. +14155552678)" required />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" name="subject" required />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>Message</label>
                                <textarea rows="4" name="message" required></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    <div className="contact-image-wrapper" data-aos="fade-left" data-aos-duration="1200">
                        <img src={contactImg} alt="Car Wash Service" className="contact-img" />
                    </div>
                </div>

                <div className="contact-info-grid">
                    <div className="info-card" data-aos="fade-left" data-aos-delay="100">
                        <div className="info-header">
                            <FaPhoneAlt className="info-icon" />
                            <h3>CALL US</h3>
                        </div>
                        <p>8-800-10-500,</p>
                        <p>8-800-10-500</p>
                    </div>

                    <div className="info-card" data-aos="fade-left" data-aos-delay="200">
                        <div className="info-header">
                            <FaMapMarkerAlt className="info-icon" />
                            <h3>LOCATION</h3>
                        </div>
                        <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                    </div>

                    <div className="info-card" data-aos="fade-left" data-aos-delay="300">
                        <div className="info-header">
                            <FaClock className="info-icon" />
                            <h3>HOURS</h3>
                        </div>
                        <p>Mon – Fri ...... 11 am – 8 pm, Sat, Sun ...... 6 am – 8 pm</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ContactSection;