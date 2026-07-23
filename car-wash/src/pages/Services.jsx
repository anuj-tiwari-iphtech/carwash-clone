import ContactSection from "../components/ContactSection"
import Portfolio from "../components/Portfolio"
import HeroProcess from "../components/HomePage/HeroProcess"
import HomeBestServices from "../components/HomePage/HomeBestService"
import HomeContactBanner from "../components/HomePage/HomeContactBanner"

import ServicesHeader from "../components/ServicesPage/ServicesHeader"

export default function Services(){

    return(
        <>
            <ServicesHeader/>
            <HomeBestServices/>
            <Portfolio/>
            <HeroProcess/>
            <HomeContactBanner/>
            <ContactSection/>
    
        </>
    )    
}