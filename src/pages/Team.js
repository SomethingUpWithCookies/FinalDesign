import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TeamHero from "../components/TeamHero";
import Free from "../components/Free";
import CardGrid from "../components/CardGrid";



function Team(){
    // eslint-disable-next-line
    const [navStat, setNavStat] = useState(false)
    return(
        <div className="Team font-Poppins text-white">
            <Navbar readState={navStat => setNavStat(navStat)}/>
            <TeamHero/>
            <CardGrid/>
            

        </div>
    )
}

export default Team