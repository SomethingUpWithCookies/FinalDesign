import React from "react";
import Essay from ".../assets/Essay.svg"
import icon from ".../assets/CollegeBoardIcon.svg"

//Ideas: Maybe make an about the team page that can be linked to

const Experience = () => {
    return(
        <div className="w-full py-16 px-4 font-Poppins text-white h-[150vh]">
            
            {/*Creates Grid Function*/}
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                {/* Phone Image */}
                <div className="md:hidden grid justify-center">
                    <img className= "mx-auto sm:w-[400px] sm:h-[500px] w-[300px] h-[400px]" src={Essay} alt="Written Paper Icon"/>
                    <img className= "mx-auto sm:w-[300px] sm:h-[120px] w-[200px] h-[120px]" src={icon} alt="CollegeBoard Logo"/>
                </div>
                <div className="flex justify-center flex-col">
                    <h1 className="text-4xl text-center font-semibold text-green">Passionate and Experienced.</h1>
                    <p className="text-2xl md:text-left text-center my-2">Student tutors offer a current and down-to-Earth approach to help other students hit the boxes they need to suceed.</p>
                    <p className="my-1 text-sm text-offwhite md:text-left text-center"> Our tutors are all incredible writers and have excelled through highschool, giving them both the confidence and expertise to help any student improve dramatically.</p>
                    {/* College Board Icon for Tb/Dsk img */}
                    <img className= "md:visible w-0 h-0 invisible mx-auto md:w-full md:h-[75px]" src={icon} alt="CollegeBoard Logo"/>
                </div>
                {/* Tablet/Desktop Image */}
                {/* So visible basically just turns opacity down to zero but its space remains
                    but I want it to have that disappearing quality that hidden has but with the func
                    of turning it visible which is why w-0 and h-0 are used to make the image no longer present
                    */}
                <img className="md:visible invisible md:w-full md:h-full mx-auto w-0 h-0"src={Essay} alt="Written Paper Icon"/>
            </div>
        </div>
    )
}

export default Experience