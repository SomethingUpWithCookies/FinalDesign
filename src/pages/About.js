import React, { useState } from "react";

import Navbar from "../components/Navbar";
function About(){
    //navState can control logic between nav's dropdown menu and the rest of the website wether that be turning things off or other things its also the only way to get nav to work becasue of earlier uses
    // eslint-disable-next-line
    const [navStat, setNavStat] = useState(false)
    return(
        <div className="About font-Poppins text-white">

            <Navbar readState={navStat => setNavStat(navStat)}/>
            <navStat/>

        </div>
    )
}

export default About