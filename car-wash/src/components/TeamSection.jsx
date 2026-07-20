import { useEffect, useRef, useState } from "react";
import "../Css/teamSection.css"

import t1 from "../assets/teamSection/ts-1.jpg";
import t2 from "../assets/teamSection/ts-2.jpg";
import t3 from "../assets/teamSection/ts-3.jpg";
import t4 from "../assets/teamSection/ts-4.jpg";
import t5 from "../assets/teamSection/ts-5.jpg";
import t6 from "../assets/teamSection/ts-6.jpg";

const teamData = [
  { id: 1, image: t1, name: "Nat Reynolds", role: "Wax Wizard" },
  { id: 2, image: t2, name: "Alex Martin", role: "Exterior Expert" },
  { id: 3, image: t3, name: "Bob Richmond", role: "Master Polisher" },
  { id: 4, image: t4, name: "James Oliver", role: "Interior Maestro" },
  { id: 5, image: t5, name: "Victor Muller", role: "Exterior Expert" },
  { id: 6, image: t6, name: "Walter Lilly", role: "Wax Wizard" },
];

export default function TeamSection() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeadingVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCardsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  return (
    <section className="team-section">
      <div className="team-container">
        
        <div
          ref={headingRef}
          className={`team-heading-wrapper ${headingVisible ? "animate-heading" : ""}`}
        >
          <h2 className="team-main-heading">Our Team</h2>
        </div>

        <div ref={gridRef} className="team-grid">
          {teamData.map((member, index) => (
            <div
              key={member.id}
              style={{ animationDelay: `${(index % 3) * 0.15}s` }}
              className={`team-card ${cardsVisible ? "animate-card" : ""}`}
            >
              <div className="team-image-box">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-card-image"
                />
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}