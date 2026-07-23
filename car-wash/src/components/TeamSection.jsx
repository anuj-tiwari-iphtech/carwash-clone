import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css/teamSection.css";

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
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="team-section">
      <div className="team-container">

        <div className="team-heading-wrapper" data-aos="zoom-in">
          <h2 className="team-main-heading">Our Team</h2>
        </div>

        <div className="team-grid">
          {teamData.map((member, index) => (
            <div
              key={member.id}
              className="team-card"
              data-aos="zoom-in"
              data-aos-delay={(index % 3) * 150}
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