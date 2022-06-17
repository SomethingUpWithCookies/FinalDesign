import React, { useState } from "react";
import Navbar from "../components/Navbar";

function ContactUs(){
    // eslint-disable-next-line
    const [navStat, setNavStat] = useState(false)
    return(
        <div className="Contact font-Poppins text-white">
            <Navbar readState={navStat => setNavStat(navStat)}/>
            navStat
        </div>
    )
}

export default ContactUs