import { useState, useEffect, useRef } from "react";
import "../Css/testimonials.css"

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

  function Testimonails(){

    const[isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect (() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

            if(entry.isIntersecting){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }
            },
            {threshold: 0.2}
        );

        if(sectionRef.current) observer.observe(sectionRef.current)

        return () => {
            if(sectionRef.current) observer.unobserve(sectionRef.current)
        }
    },[])

    return(
        <section
            ref={sectionRef}
            className={`testimonials-section ${isVisible ? "animate-testimonials": ""}`}
        >
            <div className="testimonials-container">
                <h1 className="testimonials-title">Testimonials</h1>

                <div className="testimonials-grid">
                    {testimonialsData.map((item, index) => (
                        <div
                        key={item.id}
                        className={`testimonial-card card-${index + 1}`}
                        >
                        <div className="quote-icon">“</div>
                        <p className="testimonial-text">{item.text}</p>
                        <h4 className="testimonial-author">{item.author}</h4>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
  }

export default Testimonails