import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'





const Navbar = (props) => {
    const [nav, setNav] = useState(true)

    function handleNav(){
        setNav(!nav)
        
    }

    function reader() {
        
        props.readState(nav)
    }

   

    return(
        // Destop Menu
    
        <div className="fixed w-full top-0 text-white font-Poppins z-50 items-center flex justify-between h-12 mx-auto px-4 bg-navBar shadow-2xl">
            
            <a className=" text-3xl font-Poppins font-bold hover:text-yellow ease-in-out duration-200 hover:text-[2rem]" href="/">Inkpot.</a>
            <ul className="hidden md:flex relative"> {/*Handles changing size at different break points*/}
                <li className="p-4 hover:text-yellow ease-in-out duration-200 hover:text-lg">
                    <a href="/about">About</a>
                </li>
                <li className="p-4 hover:text-yellow ease-in-out duration-200 hover:text-lg">
                    <a href="/news">News</a>
                </li>
                <li className="p-4 hover:text-yellow ease-in-out duration-200 hover:text-lg">
                    <a href="/team">Team</a>
                </li>
                <li className="p-4 hover:text-yellow ease-in-out duration-200 hover:text-lg">
                    <a href="/contact-us">Contact</a>
                </li>

            </ul>
            {/* Handles Icon Change */}
             {/* handleNav */}
            <div onClick={()=>{reader(); handleNav()}} className="block md:hidden relative">
               
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} color={"#F7F7F9"}/>}
                
            </div>
            {/* Mobile Menu Triggers side menu*/}
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-black bg-black ease-in-out duration-500': 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-Poppins font-bold m-4 hover:text-yellow ease-in-out duration-200 hover:text-[2rem] ">
                <a href="/">Inkpot.</a>
            </h1>
                <ul >
                    <li className="p-4 hover:text-yellow ease-in-out duration-200 hover:text-lg">
                        <a href="/about">About</a>
                    </li>
                    <li className="p-4 hover:text-yellow ease-in-out duration-200 hover:text-lg">
                     <a href="/news">News</a>
                    </li>
                    <li className="p-4 hover:text-yellow ease-in-out duration-200 hover:text-lg">
                     <a href="/team">Teams</a>
                    </li>
                    <li className="p-4 hover:text-yellow ease-in-out duration-200 hover:text-lg">
                        <a href="/contact-us">Contact</a>
                    </li>
        
                </ul>
            </div>
            
        </div>
        
    )
}
export default Navbar