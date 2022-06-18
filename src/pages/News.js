import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Card from "../components/newsPage/NewsCard";

import {useParams} from "react-router-dom";


import defaultBackground from "../assets/defaultBackground.jpg"

import Renee from "../assets/ReneeTest.jpg";
import Izzy from "../assets/Izzy.jpg";
import Crosby from "../assets/Crosby.JPG";
import Siya from "../assets/Siya.jpg";
import Ryan from "../assets/Ryan.png";
import Meher from "../assets/Meher.jpg";
import JJ from "../assets/JJ.png";



function News(){

    let { post } = useParams();

    // eslint-disable-next-line
    const [navStat, setNavStat] = useState(false)
    return(
        <div className="News font-Poppins text-white">
            <Navbar readState={navStat => setNavStat(navStat)}/>
            <div className="w-full py-16 px-4 text-white font-Poppins ">

            </div>
            <div className="lg:grid lg:grid-cols-2 items-start flex-col justify-center flex gap-6 lg:gap-6 max-w-[1240px] mx-auto">
                
                {/* Future posts go up */}
                
                <Card   className="mx-auto"
                
                        img={defaultBackground}
                        title="First Post!" 
                        author={Crosby} 
                        blurb="This is the very first post on our site! Hopefully it will be one of many. I cannot wait to see how this program develops!" 
                        date="June 18, 2022"
                        url="/blog/1"
                        />
            </div>

        </div>
    )
}

export default News