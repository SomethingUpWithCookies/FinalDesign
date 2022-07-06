import React from "react";
import Computer from '../assets/Computer.svg'

const Sucess = () =>{
    return(
      <div className="w-full py-16 px-4 font-Poppins text-white ">
        
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img  className="mx-auto my-4
            md:w-[450px]
            md:h-[450px]
            sm:w-[340px]
            sm:h-[340px]
            w-[290px]
            h-[290px]"
            src={Computer} alt="Computer Vector"/>
            <div className="flex justify-center flex-col my-6">
            <h1 className="text-4xl text-center font-semibold text-yellow">Commited to your sucess.</h1>
                    <p className="text-2xl md:text-left text-center my-2">Unique schedules or preferences should not limit access to tutors.</p>

                    <p className="my-1 text-sm text-offwhite md:text-left text-center">Inkpot wants you to succeed and is willing to work within any constraints to help. Only available on Wednesdays? Can only do Zoom meetings? Our tutors are more than willing to be flexible to meet your needs.</p>

            </div>
        </div>


      </div>
    
    
    
      )
}
export default Sucess