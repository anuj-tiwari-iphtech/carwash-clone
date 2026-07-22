import Portfolio from "../components/Portfolio"
import ContactSection from "../components/ContactSection"

import TeamMember from "../components/OurTeamPage/TeamMember"
import TeamHeader from "../components/OurTeamPage/TeamHeader"

export default function Team(){

    return(
        <>
        <TeamHeader/>
        <TeamMember/>
        <Portfolio/>
        <ContactSection/>
        </>
    )
}