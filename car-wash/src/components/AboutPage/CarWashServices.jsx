import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import "./carWashServices.css";

// 4 Services Tab Data
const servicesData = [
  {
    id: "full-services",
    label: "Full Services Wash",
    description:
      "Our car wash facilities feature flat-belt, drive-on conveyors that are gentle on all finishes and safe for exotics, dual tires & lowered vehicles. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      "Hot Wax",
      "Ceramic Shield",
      "Wipe Door Panels & Seats (2 rows)",
      "Clean Rubber Mats (2 rows)",
      "Interior Vacuum",
      "Windows Cleaned",
    ],
  },
  {
    id: "complete-wash",
    label: "Complete Car Wash",
    description:
      "Comprehensive cleaning package covering both exterior shine and core interior freshening. Designed for regular maintenance washes that keep your vehicle looking factory-new.",
    points: [
      "High-Pressure Foam Wash",
      "Tire & Rim Detailing",
      "Dash & Console Wipe Down",
      "Trunk Vacuuming",
      "Air Freshener Application",
      "Rain Reepl",
      "Tire Shine",
    ],
  },
  {
    id: "interior-wash",
    label: "Interior Washing",
    description:
      "Deep interior sanitation and detail wash focused on upholstery, leather conditioning, and stain removal to restore hygiene and comfort.",
    points: [
      "Deep Carpet Shampooing",
      "Leather Seat Conditioning",
      "Dashboard & Trim Protection",
      "Odor Neutralizer",
      "AC Vent Cleaning",
    ],
  },
  {
    id: "exterior-wash",
    label: "Exterior Washing",
    description:
      "Focused touchless exterior detailing engineered to protect your vehicle's paint coating from mud, road salt, UV rays, and environmental contaminants.",
    points: [
      "Hand Wash with Soft Microfiber",
      "Bug & Tar Removal",
      "Hydrophobic Wax Finish",
      "Wheel Well Flush",
      "Mirror & Glass Polish",
      "Window Cleaned",
    ],
  },
];

export default function CarWashServices() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const currentService = servicesData.find((s) => s.id === activeTab);

  return (
    <section ref={sectionRef} className="wash-services-section">
      <div className="wash-services-container">
        
        {/* Main Heading Zoom Animation */}
        <h2 className={`wash-services-heading ${isVisible ? "animate-zoom-in" : ""}`}>
          Car Wash Services
        </h2>

        {/* Tab Buttons */}
        <div className="wash-tabs-header">
          {servicesData.map((service) => (
            <button
              key={service.id}
              className={`wash-tab-btn ${activeTab === service.id ? "active" : ""}`}
              onClick={() => setActiveTab(service.id)}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Dynamic Below Content Card */}
        <div className="wash-content-box">
          <p className="wash-description">{currentService.description}</p>

          <ul className="wash-points-list">
            {currentService.points.map((point, index) => (
              <li key={index}>
                <FaCheck className="wash-check-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}