import React from "react";
import Person from "../assets/Default.jpg";
import PeopleIcon from "../components/PeopleIcon";

import Haley from "../assets/Haley.jpg";
import Renee from "../assets/ReneeTest.jpg";
import Izzy from "../assets/Izzy.jpg";
import Crosby from "../assets/Crosby.JPG";
import Siya from "../assets/Siya.jpg";
import Ryan from "../assets/Ryan.png";
import Meher from "../assets/Meher.jpg";
import JJ from "../assets/JJ.png";
import Ben from "../assets/Ben.jpg"

const CardGrid =()=>{
    return(
        <div className="mb-10 mx-auto max-w-[1240px] grid lg:grid-cols-3 col-auto gap-8 gap-x-0 items-start justify-items-center h-[110%]">
            <PeopleIcon img={Crosby} name="Crosby" desc="Hey, my name is Crosby Sayan! I am a rising senior at Watchung Hills Regional High School. I've tutored at my own school for years and am excited to continue beyond those walls! I am a National Honors student who loves to write and debate. Outside of school, I rock climb regularly and like to go on hikes. I feel confident that I can help a student improve their writing and broaden their own critical thinking skills."/>
            <PeopleIcon img={Renee} name="Renee" desc="Hi! My name is Renee Ye and I am a rising senior at Watchung Hills Regional High School. I am so excited for this oppurtunity to be able to help enrich kids! I a National Honors student as well as a Peer Leader at my own school; I am also a teachers assistant at a local elementary school STEM program. In my free time I like to draw, paint, and most of all read. Along with these, I have been extremely involved in my writing by being part of my school newspaper. I love teaching younger students and again am so excited for this opportunity!"/>
            <PeopleIcon img={Izzy} name="Isabella" desc="Hello! My name is Isabella Simoes, and I am a senior at Watchung Hills Regional High School. I have been in high level English classes since my sophmore year. I took AP Language and Composition my junior year, and I will be taking AP Literature and Composition my senior year. I am part of the International Thespian Society, and I am the President of the school’s artistic magazine club, called Folio. Outside of school, I like to write poetry and plan on publishing a book one day. I take theatre classes in Maplewood, NJ and perform regularly. I babysit kids within my neighborhood, and I am always willing to lend a helping hand. I am excited to work with students to help improve their writing skills!"/>
            <PeopleIcon img={Meher} name="Meher" desc="Hi there! My name is Meher Malhotra and I am a rising senior at WHRHS. I enjoy all things writing and reading, and I love working with young writers in particular. Writing has always been the mode through which I express myself best, and if I can help even one other person do that, it would be incredible. Other hobbies of mine include filmmaking, dancing, and playing Ultimate Frisbee."/>
            <PeopleIcon img={Ben} name="Ben" desc="Hey there! My name is Ben Cupit, and I’m a rising senior at Watchung Hills Regional High School. AP and Honors level courses dominate my schedule in school, with English and language always amongst my top-scoring classes. I’m also a big part of my school’s theater program, participating in almost all of the performances my school has put on since I came there. I’m a member of our school’s Tri-M, Thespians, and National Honors Societies, and really enjoy both the written and performed arts. Outside of school, I’ve had years of experience guiding students of all ages as an instructor in martial arts. As such, I have an adaptable way of working with students to help them, no matter who they are or what they need, to reach their fullest potential. I’m looking forward to being able to support your student in becoming the best writer they can be!"/>
            <PeopleIcon img={JJ} name="JJ" desc="Hi! I'm JJ Zhang, a junior at Watchung Hills. I'm new to tutoring, but English has been a huge part of my life as both a reader, writer, and poet. I have a love for history too, and outside of academics, I'm a classical violinist and part of our school's theatre production team. Beyond school, I like cooking, all genres of music (except country), and watching an assortment of stuff: anime, movies, TV shows, and sports (primarily baseball, volleyball, and the Olympics). it's easy for me to talk to others and give poignant advice, and I'm more than happy to help guide students to a better understanding of their own skills and the language"/>
            <PeopleIcon img={Ryan} name="Ryan" desc="Hi there! My name is Ryan Fabbio. I’m a rising senior at Watchung Hills Regional High School. I’m a member of the National Honors Society and National Italian Honors Society. Outside of school I love going to museums and art exhibits and enjoy doing yoga (although I’m not very good :). My educational experience has given me the opportunity to explore my interests and develop ways to express my beliefs and identity through writing. I would love to do the same for other students!"/>
            <PeopleIcon img={Siya} name="Siya" desc="Hello my name is Siya and I’m a rising senior at Watchung Hills. I have tutored lots of kids  during my volunteer work as teacher aid. I am an AP student who is also a varsity athlete in cross country, track and swimming. Lastly, I love to read and write short stories along with listen to music and play the guitar. I cannot wait to help aid students!"/>
            <PeopleIcon img={Haley} name="Haley" desc="Hi there! My name is Haley Crowe and I am a rising senior at Piscataway High School. I’m a member of the National Honors Society, World Language French Honors Society, and International Thespian Society. I enjoy reading, journaling, theater, soccer, and debate, all of which have helped me further my education. Due to that, I’m an AP and Honors student, one who has always loved to help. I have experience instructing and tutoring through my school’s honors societies and my job as a taekwondo instructor. Lastly, I’m very excited for this opportunity and can’t wait to help!"/>
           
        </div>
    )

}

export default CardGrid