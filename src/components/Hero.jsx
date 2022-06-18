import React from "react";

import Typed from 'react-typed';

const Hero = (props) => {
    
    return(
        <div className='text-white font-Poppins flex'>
            {/* Offset */}
         
        <div className="max-w-[800px] mt-[-94px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className="text-green font-bold p-3 md:text-7xl sm:text-6xl text-4xl">Let Your Ideas Breakthrough</h1>
                
                <div className="md:text-4xl sm:text-3xl text-xl justify-center items-center py-2">
                    <p className="text-pink">A student driven movement</p>    
                    <p>Committed to helping all students with their</p>
                        <Typed 
                        className= {props.getState ? " text-yellow ease-out duration-[480ms] invisible":"visible text-yellow"}
                        strings={['synthesis essays','argument essays','research papers','thesis papers', 'writing']}
                        typeSpeed={100}
                        backSpeed={110}
                        
                        />
                    
                </div>

                <button className="bg-pink 
                my-5

                md:w-48
                md:h-18 
                md:text-[1.6rem] 
                
                
                sm:w-36
                sm:h-12 
                sm:text-[1.2rem]
                

                w-[130px] 
                h-[50px] 
                text-xl
                rounded-xl
                
                hover:w-56 
                hover:h-19 ease-in-out duration-500
                hover:bg-green
            
                mx-auto
                 text-white">
                    <a href="/contact-us">Contact Us</a>
                    </button>
            </div>
        
        
        </div>
    )
}

export default Hero