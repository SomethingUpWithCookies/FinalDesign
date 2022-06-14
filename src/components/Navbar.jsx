import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () =>{
        setNav(!nav)
    }
    return(
        // Destop Menu
        <div className="text-white font-Poppins items-center flex justify-between h-12 mx-auto px-4">
            <h1 className="w-full text-3xl font-Poppins font-bold">Inkpot.</h1>
            <ul className="hidden md:flex"> {/*Handles changing size at different break points*/}
                <li className="p-4">About</li>
                <li className="p-4">News</li>
                <li className="p-4">Contact</li>

            </ul>
            {/* Handles Icon Change */}
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} color={"#F7F7F9"}/>}
                
            </div>
            {/* Mobile Menu */}
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-black bg-black ease-in-out duration-500': 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-Poppins font-bold m-4">Inkpot.</h1>
                <ul >
                    <li className="p-4">About</li>
                    <li className="p-4">News</li>
                    <li className="p-4">Contact</li> 
                </ul>
            </div>
        </div>
    )
}
export default Navbar