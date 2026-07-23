import React from 'react';
import bannerImg from '../../assets/ContactUsPage/Img-1.jpg';
import './contactUsBanner.css';

function ContactBanner() {
    return (
        <div
            className="contact-banner-wrapper"
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className="contact-banner-overlay">
                <h1 className="contact-banner-title">Contact Us</h1>
            </div>
        </div>
    );
}

export default ContactBanner;