import Hero from "../components/HomePage/Hero"
import Portfolio from "../components/Portfolio"
import HomeBestServices from "../components/HomePage/HomeBestService"
import FaqSection from "../components/HomePage/HomeFaq"
import HeroProcess from "../components/HomePage/HeroProcess"
import HomeContactBanner from "../components/HomePage/HomeContactBanner"
import ContactSection from "../components/ContactSection"
import About from "../components/HomePage/HomeAbout"
import Services from "../components/HomePage/HomeService"
import TestimonialsSection from "../components/HomePage/HomeTestomonial"

export default function HomePage(){

    return(
        <>
        <Hero/>
        <Services/>
        <About/>
        <HeroProcess/>
        <HomeBestServices/>
        <TestimonialsSection/>
        <Portfolio/>
        <FaqSection/>
        <HomeContactBanner/>
        <ContactSection/>
        </>
    )
}