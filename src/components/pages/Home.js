import React from "react"
import Navbar from "../navbar/Navbar"
import Profile from './Profile'
import About from "./About"
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Footer from "../footer/Footer"


const Home = () => {
        return(
            <>
            <section>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l3 xl3">
                            <Profile/>
                        </div>
                        <div className="col s12 m12 l9 xl9">
                            <About/>
                            <Skills/>
                            <Experience/>
                            <Education/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            </>
        );

}

export default Home