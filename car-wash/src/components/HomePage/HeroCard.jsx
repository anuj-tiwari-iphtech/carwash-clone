import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import "./heroCard.css";

export default function HeroCard() {
  return (
    <div className="home-hero-card">
      <p className="home-hero-welcome">Welcome To</p>

      <h1 className="home-hero-heading">Car Wash</h1>

      <div className="home-hero-info-list">
        <div className="home-hero-info-row">
          <FaMapMarkerAlt className="home-hero-icon" />
          <span className="home-hero-address-text">
            254 W 27ST ST, NEW YORK, NY 10011
          </span>
        </div>
        <div className="home-hero-info-row">
          <FaMobileAlt className="home-hero-icon" />
          <span className="home-hero-phone-text">(212) 123-4567</span>
        </div>
        <div className="home-hero-info-row">
          <FaMapMarkerAlt className="home-hero-icon" />
          <span className="home-hero-address-text">
            341 W 11ST ST, NEW YORK, NY 10022
          </span>
        </div>
        <div className="home-hero-info-row">
          <FaMobileAlt className="home-hero-icon" />
          <span className="home-hero-phone-text">(212) 123-4567</span>
        </div>
      </div>

      <button className="home-hero-btn">Book Appointment</button>
    </div>
  );
}