import "../Css/footer.css"

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import CarWashLogo from "../assets/footer.png"
function Footer(){

    return(
        <footer className="footer-section">
            <div className="footer-container">

                <div className="footer-col brand-col">
                    <div className="footer-logo">
                        <img src={CarWashLogo} alt="Car wash logo"/>
                    </div>
                    <h3 className="brand-title"> Car Wash</h3>
                    <p className="brand-desc">
                        Full service barber shops & men's grooming in Manhattan, New York. Images from <a href="https://freepik.com">Freepick</a>
                    </p>

                    <div className="social-links">
                        <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#x" aria-label="Twitter X"><FaXTwitter /></a>
                        <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Useful Links</h4>
                        <ul className="footer-links">
                            <li><a href="#about">ABOUT US</a></li>
                            <li><a href="#services">OUR SERVICES</a></li>
                            <li><a href="#blog">BLOG</a></li>
                            <li><a href="#gallery">GALLERY</a></li>
                            <li><a href="#help">HELP CENTER</a></li>
                            <li><a href="#book">BOOK YOUR WASH</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Our Services</h4>
                        <ul className="footer-links">
                            <li><a href="#rim-cleaning">RIM CLEANING</a></li>
                            <li><a href="#hot-wax">HOT WAX</a></li>
                            <li><a href="#express-wash">EXPRESS WASH</a></li>
                            <li><a href="#door-trims">CLEAN DOOR TRIMS</a></li>
                            <li><a href="#tyre-shine">APPLY TYRE SHINE</a></li>
                            <li><a href="#high-pressure">HIGH-PRESSURE RINSE</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <hr className="footer-divider" />
                    <p className="copyright-text">
                    Copyright By CarWash. © 2025. All Rights Reserved.
                    </p>
                </div>
        </footer>
    )
}

export default Footer