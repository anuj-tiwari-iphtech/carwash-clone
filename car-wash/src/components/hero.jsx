import bgImage from "../assets/bacground-image-1.jpg"

import {FaLocationDot, FaMobileScreen} from "react-icons/fa6"

function Hero(){

    return(

        <section className="hero"
        style={{ backgroundImage: `url(${bgImage})` }}
        >
        
        <div className="hero-card">
            

                <p className="sun-title">WELCOME TO</p>
               <br/>
                <h1>Car Wash</h1>

                <div className="info">
                    <p><FaLocationDot/> 254 W 27ST ST, NEW YORK, NY 10011</p>
                    <p><FaMobileScreen/> (212) 123-4567</p>
                    <p><FaLocationDot/> 341 W 11ST ST, NEW YORK, NY 10022</p>
                    <p><FaMobileScreen/>  (212) 123-4567</p>
                </div>

                <button>BOOK NOW</button>
            

        </div>
        </section>
    )
}

export default Hero