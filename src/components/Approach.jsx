import React from "react";
import Flower from "../assets/Flowers.png"
const Approach = () => {
    return(
        <div className="w-full py-16 px-4 text-white font-Poppins">
            
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={Flower} alt="Flowers"/>
                <div className="mx-auto justify-center my-auto">
                    <h1 className="text-3xl text-center text-pink">Personalized Approach</h1>
                    <p> Every writer is unique so it only makes sense that a personal style is used to help them blossom.</p>

                    <p> Wherever a student may struggle our tutors will help improve their weaknesses and make their strengths shine even brighter. Whether that be focusing on thesis statements, grammar, voice, commentary or any other reason we'll ensure rapid growth.</p>
                </div>
            </div>
        </div>
    )
}

export default Approach