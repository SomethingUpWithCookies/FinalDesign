import React from "react";

import background from "../../assets/defaultBackground.jpg";
import icon from "../../assets/Izzy.jpg";

import {useNavigate} from "react-router-dom";

const NewsCard = (props) => {
    let navigate = useNavigate();

    return(
        
        <button onClick={()=>{navigate(props.url);}} className="group font-Poppins w-[450px] sm:w-[500px] md:w-[500px]  text-black grid grid-cols-2 gap-2 bg-white rounded-2xl mx-auto shadow-md shadow-green">
            <div className="flex justify-center flex-col">
                <img src={props.img} alt="background" className="rounded-2xl"/>
                <div className="mt-auto flex justify-between relative">
                    <h1 className="font-bold text-xl mt-1 pl-2">{props.title}</h1>
                    <img src={props.author} alt="person" className="rounded-full w-10 h-10 relative bottom-4 right-3 group-hover:w-12 group-hover:h-12 ease-in-out duration-300"/>
                    
                </div>
            </div>
            <div className="flex justify-center flex-col">
                <p className="text-gray px-2 pt-2">{props.blurb}</p>
                <p className="mt-[100px] text-right pr-4 text-offwhite">{props.date}</p>  
            </div>  
        </button>
    )
}

export default NewsCard