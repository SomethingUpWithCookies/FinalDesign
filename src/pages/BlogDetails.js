import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    let { ID } = useParams();
    return(
        <div>
            Welcome to the blog landing site
        </div>       
    )
}

export default BlogDetails