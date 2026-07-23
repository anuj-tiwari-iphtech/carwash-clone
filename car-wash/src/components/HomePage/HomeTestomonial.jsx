import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Quote } from "lucide-react";
import testimonialImg from "../../assets/testmo-img.jpg";
import "./homeTestomonial.css";

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
];

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="testimonials" className="home-testimonials-section">
      <div className="home-testimonials-container">

        {/* Left: Testimonial list */}
        <div className="home-testimonials-list">
          {testimonialsData.map((item, index) => (
            <div
              key={item.id}
              className="home-testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Quote size={30} className="home-testimonial-quote-icon" />
              <p className="home-testimonial-text">{item.text}</p>
              <p className="home-testimonial-author">{item.author}</p>
            </div>
          ))}
        </div>

        {/* Right: Heading + Image */}
        <div>
          <h2 className="home-testimonials-heading" data-aos="fade-left">
            Testimonials
          </h2>

          <div className="home-testimonials-image-box home-testimonials-rotate">
            <img
              src={testimonialImg}
              alt="Car wash testimonial"
              className="home-testimonials-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
}