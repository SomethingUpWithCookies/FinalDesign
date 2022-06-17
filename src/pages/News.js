import React, { useState } from "react";
import Navbar from "../components/Navbar";

function News(){
    // eslint-disable-next-line
    const [navStat, setNavStat] = useState(false)
    return(
        <div className="News font-Poppins text-white">
            <Navbar readState={navStat => setNavStat(navStat)}/>
            Contact Us
        </div>
    )
}

export default News