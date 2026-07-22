
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Services from "../components/Services"
import About from "../components/About"
import Process from "../components/Process"
import BestServices from "../components/BestService"
import Portfolio from "../components/Portfolio"
import QualityService from "../components/QualityService"
import Testimonails from "../components/Testimonails"
import ContactBanner from "../components/ContactBanner"
import MapSection from "../components/MapSection"
import Footer from "../components/Footer"
import TeamSection from "../components/TeamSection"
import FaqSection from "../components/FaqSection"
import ContactSection from "../components/ContactSection"


function LandingPage(){

    return(
        <div>
            {/* <Navbar/> */}
            <Hero/>
            <Services/>
            <About/>
            <Process/>
            <BestServices/>
            <Portfolio/>
            <QualityService/>
            <Testimonails/>
            <ContactBanner/>
            <FaqSection/>
            <TeamSection/>
            <ContactSection/>
            {/* <MapSection/> */}
            {/* <Footer/> */}
        </div>
    )
}

export default LandingPage