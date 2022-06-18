import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Navbar"
import BlogHeader from "./BlogHeader";

import Crosby from "../assets/Crosby.JPG"
import { useState } from "react";
const FirstPost = () => {
    
    const [navStat, setNavStat] = useState(false)
    return(
        <div>
            <Nav readState={navStat => setNavStat(navStat)}/>
            <navStat/>
        <div className="font-Poppins max-w-[400px] sm:max-w-[600px] md:max-w-[800px] justify-center mx-auto mt-20">
            <BlogHeader img={Crosby} title="The First Post" author="By Crosby Sayan"/>
            <div className=" mx-4 text-white rounded-sm mt-4">
                <p>This is the first official post on the Inkpot website! 
                    Alot of work has gone into this moment and it signals the begining of something really exciting!
                    I want to see this post section evolve into something truly unique. Beyond just people we tutor I want to see it develop into a deeper reflection of our own tutors thoughts on things. Speaking of which, a massive round of applause must be dealt out to our tutors who went through both the patience of learning proper teaching techniques, but also my own sporadic tendancies.
                    They are some of the most intelligent people I know and I am more than honored to be working around so much talent. But enough boosting their egos, I want to talk about the goals of this program.</p>
                <p className="mt-2">The eventual goal of Inkpot is to offer tutoring aid to other school districts through their board. It's a hefty task and likely requires alot of patience, but that's what I hope to help achieve over the Summer. By helping individual students from across Somerset County my own hope is that it will help build a strong enough resume for Inkpot to start working directly with schools.
                    While I was doing preliminary research for Inkpot it became clear that many of the schools in our county struggle with keeping student retention. This is by no fault of their own of course, their is just too many students for one teacher to really provide sufficient aid without also harming another student. My hope with Inkpot is that it'll become more than just writing tutoring, but also as a way for students to get advice especially those who just transitioned into a new school.
                    So with the first post of Inkpot made I can't help, but shake in excitement for how the future will shape us. It is the start of a brand new voyage on a truly wonderful adventure.

                </p>
                <p className="mt-2">-Crosby Sayan</p>
            </div>
        </div>
        </div>
    )

}

export default FirstPost