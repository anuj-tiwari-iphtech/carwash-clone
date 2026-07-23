import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css/testimonials.css";

const testimonialsData = [
  {
    id: 1,
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc",
    author: "Celia Almeda",
  },
  {
    id: 2,
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc",
    author: "Mamie Boucher",
  },
  {
    id: 3,
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.",
    author: "Frank Kinney",
  },
  {
    id: 4,
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.",
    author: "Daniel Rutledge",
  },
];

function Testimonails() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h1 className="testimonials-title" data-aos="fade-left">
          Testimonials
        </h1>

        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div
              key={item.id}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index < 2 ? 500 : 1000}
            >
              <div className="quote-icon">“</div>
              <p className="testimonial-text">{item.text}</p>
              <h4 className="testimonial-author">{item.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonails;