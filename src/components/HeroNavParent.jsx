import React, { useState } from "react";
import Nav from './Navbar'
import Hero from './Hero'


const HeroNavParent = () => {
    const [navStat, setNavStat] = useState(false)



    return(
        <div>
            <Nav
                 readState={navStat => setNavStat(navStat)}
            />
            <Hero getState={navStat}/>
            <h1 className="text-white">{navStat}</h1>
        </div>
    );
}

export default HeroNavParent