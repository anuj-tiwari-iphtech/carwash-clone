import HeroCard from "./HeroCard";
import heroImg from "../../assets/bg-2.jpg";
import "./heroCard.css";

export default function Hero() {
  return (
    <section id="home" className="home-hero-section">

      <div className="home-hero-left">
        <HeroCard />
      </div>

      <div className="home-hero-right">
        <div className="home-hero-image-box">
          <img
            src={heroImg}
            alt="Car wash"
            className="home-hero-img"
          />
        </div>
      </div>

    </section>
  );
}