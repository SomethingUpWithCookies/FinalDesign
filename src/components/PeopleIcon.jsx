import React from "react";
import { useState } from "react";


const PeopleIcon = (props) => {

    

    return(
        <div className="Card 
        group
        font-Poppins
        my-4
        py-20
        justify-center mx-auto flex text-center w-60 p-2 outline-pink outline-8 outline rounded-xl outline-offset-8
        hover:outline-green
        hover:outline-[12px]
        hover:w-[18rem]
        ease-in-out duration-200
        text-white
        hover:bg-navBar
        
        ">
            <div className="Card_Body w-full">
                <img src={props.img} alt="person" className="h-30 w-30 rounded-full justify-center mx-auto"/>
                <h2 className="CardTitle text-3xl font-medium py-4 group-hover:text-green ease-in-out duration-200">{props.name}</h2>
                <p className="description h-0 text-[0px]
                group-hover:text-sm group-hover:h-max hover:ease-in ease-out duration-200">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quis ratione eum hic quas, numquam possimus nihil accusantium reprehenderit. Facere possimus ea maxime voluptatem numquam hic similique repellendus! Est, iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat veritatis earum eveniet veniam libero, quis adipisci odit alias esse dolor neque fuga ipsum porro odio reprehenderit voluptate. Unde, quae.
                </p>
            </div>
        </div>
    )
}

export default PeopleIcon