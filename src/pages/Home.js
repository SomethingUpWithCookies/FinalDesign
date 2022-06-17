import React from "react";

import NavHero from '../components/HeroNavParent';
import Approach from '../components/Approach';
import Experience from '../components/Experience';
import Sucess from '../components/Sucess';
import Free from '../components/Free';



function Home() {
    return(
        <div>
            <NavHero/>
            <Free/>
            <Approach/>
            <Experience/>
            <Sucess/>
        </div>
    );


}

export default Home