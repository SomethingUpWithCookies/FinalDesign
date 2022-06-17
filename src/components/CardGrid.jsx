import React from "react";
import Person from "../assets/download.png";
import PeopleIcon from "../components/PeopleIcon";

const CardGrid =()=>{
    return(
        <div className="mx-auto max-w-[1240px] grid lg:grid-cols-3 col-auto gap-8 gap-x-0 items-start justify-items-center h-screen">
            <PeopleIcon img={Person} name="Crosby"/>
            <PeopleIcon img={Person} name="Renee"/>
            <PeopleIcon img={Person} name="Isabella"/>
            <PeopleIcon img={Person} name="Meher"/>
            <PeopleIcon img={Person} name="Ben"/>
            <PeopleIcon img={Person} name="JJ"/>
            <PeopleIcon img={Person} name="Marisa"/>
            <PeopleIcon img={Person} name="Atharva"/>
            <PeopleIcon img={Person} name="Ryan"/>
            <PeopleIcon img={Person} name="Siya"/>
           
        </div>
    )

}

export default CardGrid