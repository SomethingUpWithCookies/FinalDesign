import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Hero from "../components/contactPage/ContactHero"
import Footer from "../components/contactPage/ContactFooter"
function ContactUs(){
    // eslint-disable-next-line
    const [navStat, setNavStat] = useState(false)
    return(
        <div className="Contact font-Poppins text-white">
            <Navbar readState={navStat => setNavStat(navStat)}/>
            <Hero/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default ContactUs