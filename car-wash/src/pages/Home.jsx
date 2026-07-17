
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Services from "../components/Services"
import About from "../components/About"
import Process from "../components/Process"
import BestServices from "../components/BestService"



function Home(){

    return(
        <div>
            <Navbar/>
            <Hero className="main-container"/>
            <Services/>
            

            <About/>

            <Process/>
            <BestServices/>
        </div>
    )
}

export default Home