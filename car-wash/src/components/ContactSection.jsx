import {useState, useEffect, useRef} from "react"
import "../Css/contactSection.css"

import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

import contactImg from "../assets/formSection.jpg"

function ContactSection(){

    const[isVisible, setIsVisible] = useState(0)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setIsVisible(true)
                }else{
                    setIsVisible(false)
                }
            },
            {threshold: 0.1}
        )

        if(sectionRef.current) observer.observe(sectionRef.current)

        return() => {
            if(sectionRef.current) observer.unobserve(sectionRef.current)
        }
    },[])

    const handleSummit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
    
        console.log(data);
        alert("Message Sent")

        e.target.reset();
    }

    return(
        <section ref={sectionRef} className="contact-section">
            <div className="contact-container">
    
                <div className="contact-top-grid">
                    <div className={`contact-form-wrapper ${isVisible ? "animate-left" : ""}`}>
                    <h2 className="contact-heading"> Get In Touch with us</h2>
    
                    <form onSubmit={handleSummit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name:" placeholder="Enter your Nmae" required/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Enter a valid email address" required/>
                            </div>
                        </div>
    
                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" name="Phone" placeholder="Enter your phone (e.g. +14155552678)" required/>
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text"  name="subject" required/>
                            </div>
                        </div>
    
                        <div className="form-group full-width">
                            <label>Message</label>
                            <textarea rows="4" ></textarea>
                        </div>
    
                        <button type="submit" name="msg" className="submit-btn">
                            SEND MESSAGE
                        </button>
                    </form>
                    </div>
    
                    <div className={`contact-image-wrapper ${isVisible ? "animate-right" : ""}`}>
                        <img src={contactImg} alt="Car Wash Service" className="contact-img" />
                    </div>
                    
                </div>
    
                <div className={`contact-info-grid ${isVisible ? "animate-blocks-right" : ""}`}>
    
                    <div className="info-card card-1">
                        <div className="info-header">
                            <FaPhoneAlt className="info-icon"/>
                            <h3>CALL US</h3>
                        </div>
                        <p>8-800-10-500,</p>
                        <p>8-800-10-500</p>
                    </div>
    
                    <div className="info-card card-2">
                        <div className="info-header">
                            <FaMapMarkerAlt className="info-icon"/>
                            <h3>LOCATION</h3>
                        </div>
                        <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                    </div>
    
                    <div className="info-card card-3">
                        <div className="info-header">
                            <FaClock className="info-icon"/>
                            <h3>HOURS</h3>
                        </div>
                        <p>Mon – Fri ...... 11 am – 8 pm, Sat, Sun ...... 6 am – 8 pm</p>
                    </div>
    
                </div>
    
            </div>
    
        </section>
    )
}

export default ContactSection