import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Card from "../components/newsPage/NewsCard";

import {useParams} from "react-router-dom";


import defaultBackground from "../assets/defaultBackground.jpg"

import Izzy from "../assets/Izzy.jpg";
import Renee from "../assets/ReneeTest.jpg"


function News(){

    let { post } = useParams();

    // eslint-disable-next-line
    const [navStat, setNavStat] = useState(false)
    return(
        <div className="News font-Poppins text-white">
            <Navbar readState={navStat => setNavStat(navStat)}/>
            <div className="w-full py-16 px-4 text-white font-Poppins ">

            </div>
            <div className="lg:grid lg:grid-cols-2 items-start flex-col-reverse justify-items-center flex gap-6 lg:gap-0 max-w-[1240px] mx-auto">
                <Card   img={defaultBackground}
                        title="First Post!" 
                        author={Izzy} 
                        blurb="This is the very first post on our site! Hopefully it will be one of many" 
                        date="June 18, 2022"
                        url="/blog/1"
                        />
                
                
                <Card   img={defaultBackground}

                        title="First Post!" 
                        author={Izzy} 
                        blurb="This is the very first post on our site! Hopefully it will be one of many" 
                        date="June 19, 2022"/>
                
                
                
            </div>

        </div>
    )
}

export default News