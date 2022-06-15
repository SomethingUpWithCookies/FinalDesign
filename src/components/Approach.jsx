import React from "react";
import Flower from "../assets/Flowers.svg"
const Approach = () => {
    return(
        <div className="w-full py-16 px-4 text-white font-Poppins h-[150vh]">
            
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img 
                className="md:w-[500px] sm:w-[300px] w-[265px] mx-auto my-4"
                src={Flower} alt="Flowers"/>
                <div className="flex justify-center flex-col">
                    <h1 className="text-4xl text-center font-semibold text-pink">Personalized Approach</h1>
                    <p className="text-2xl md:text-left text-center my-2"> Every writer is unique so it only makes sense that a personal style is used to help them blossom.</p>

                    <p className="my-1 text-sm text-offwhite md:text-left text-center"> Wherever a student may struggle our tutors will help improve their weaknesses and make their strengths shine even brighter. Whether that be focusing on thesis statements, grammar, voice, commentary or any other reason we'll ensure rapid growth.</p>
                </div>
            </div>
        </div>
    )
}

export default Approach