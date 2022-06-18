import React from "react";
import { AiFillPropertySafety } from "react-icons/ai";
import image from "../assets/Default.jpg"
const BlogHeader = (props) =>
    {
        const [navStat, setNavStat] = useState(false)
        return(
            <div className="font-Poppins mt-4 outline outline-green rounded-xl shadow-lg bg-light-green px-4">
                <h1 className="text-7xl font-bold">{props.title}</h1>
                <div className="flex mx-auto">
                    <img className="rounded-full w-10 h-10" src={props.img}/>
                    <p className="text-2xl my-auto px-2">{props.author}</p>
                </div>
            </div>
        )


    }

export default BlogHeader