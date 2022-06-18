import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Card from "../components/newsPage/newsCard";

import defaultBackground from "../assets/defaultBackground.jpg"

import Izzy from "../assets/Izzy.jpg";
import Renee from "../assets/ReneeTest.jpg"


function News(){
    // eslint-disable-next-line
    const [navStat, setNavStat] = useState(false)
    return(
        <div className="News font-Poppins text-white">
            <Navbar readState={navStat => setNavStat(navStat)}/>
            <div className="w-full py-16 px-4 text-white font-Poppins ">

            </div>

            <Card   img={defaultBackground}
                    title="First Post!" 
                    author={Izzy} 
                    blurb="This is the very first post on our site! Hopefully it will be one of many" 
                    date="June 18, 2022"/>
            
        </div>
    )
}

export default News