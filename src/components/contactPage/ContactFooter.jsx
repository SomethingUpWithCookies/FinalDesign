import React from "react";

const ContactFooter = () => 
    {
        return(
            <div className="w-full mt-20 mx-auto justify-center flex h-28">
                <div>
                    <h1 className="text-center md:text-lg text-xs font-semibold px-4">Interested in learning more about the team?</h1>
                    <div className="flex-row flex mx-auto text-center px-10">
                        <p className="text-offwhite">To learn more about the team </p>
                        <a href="/team" className="text-green px-1">click here</a>
                    </div>
                </div>
            </div>
        )

    }

export default ContactFooter