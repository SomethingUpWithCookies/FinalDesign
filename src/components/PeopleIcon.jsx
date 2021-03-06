import React from "react";
import { useState } from "react";

import Person from "../assets/Default.jpg";

const PeopleIcon = (props) => {

    

    return(
        <div className="Card 
        group
        font-Poppins
        my-4
        py-20
        justify-center mx-auto flex text-center w-60 p-2 border-pink border-[8px] rounded-[.75rem] border-spacing-12
        hover:border-green
        hover:outline-[12px]
        hover:w-[18rem]
        ease-in-out duration-200
        text-white
        hover:bg-navBar
        
        ">
            <div className="Card_Body w-full">
                <img src={props.img || Person} alt="person" className="h-30 w-30 rounded-full justify-center mx-auto group-hover:rounded-[90px] ease-in-out duration-150"/>
                <h2 className="CardTitle text-3xl font-medium py-4 group-hover:text-green ease-in-out duration-200 ">{props.name||"untitled"}</h2>
                <p className="description h-0 text-[0px]
                group-hover:text-sm group-hover:h-max hover:ease-in ease-out duration-200">
                    {props.desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi ipsa consequuntur quas, pariatur consequatur sint sunt repudiandae saepe odio natus cupiditate nulla labore, similique dolor, accusantium eaque obcaecati. Ipsa!"} 
                </p>
            </div>
        </div>
    )
}

export default PeopleIcon