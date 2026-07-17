
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



function Home(){

    return(
        <div>
            <Navbar/>
            <Hero className="main-container"/>
            <Services/>
            <About/>
            <Process/>
            <BestServices/>
            <Portfolio/>
            <QualityService/>
            <Testimonails/>
            <ContactBanner/>
            <MapSection/>
        </div>
    )
}

export default Home