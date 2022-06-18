import React, {useRef} from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
const Form = () => {
    const form = useRef();
    let navigate = useNavigate();
    function sendEmail(e) 
        {
        
            e.preventDefault();

            emailjs.sendForm('service_s7vj9tl', 'template_e9an973', form.current, 'eGqu2Ao9HuE-t0Hk-')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              
            e.target.reset();
            navigate("../", { replace: true });
          }

    return(
        <div className="w-4/5 md:w-100 md:max-w-full mx-auto">
            <div className="p-6 outline rounded-lg outline-pink outline-4 sm:rounded-lg max-w-[700px] mx-auto bg-gray">
                <form onSubmit={sendEmail} ref={form}>
                    <label className="block mb-6">
                         <span className="text-gray-700">Your name</span>
                            <input
                                type="text"
                                 name="name"
                                className="
                                text-black
                                   block
                                    w-full
                                    mt-1
                                     outline
                                    outline-navBar
                                     rounded-md
                                    shadow-sm
                                    focus:outline-green
                                    focus:ring
                                    focus:ring-light-green
                                     focus:ring-opacity-50"
                                    placeholder="Jane Doe"
                                    required
                                     />
                    </label>

                    <label className="block mb-6">
                        <span className="text-gray-700">Email address</span>
                             <input
                                 name="email"
                                type="email"
                                className="
                                    text-black
                                    block
                                    w-full
                                    outline-navBar
                                    rounded-md
                                    shadow-sm
                                    focus:outline-green
                                    focus:ring
                                    focus:ring-light-green
                                    focus:ring-opacity-50"
                                    mt-1
                                    required
                                    placeholder="janedoe@example.com"
                                    />
                    </label>

                    <label className="block mb-6">
                        <span className="text-gray-700">Message</span>
                            <textarea
                                name="message"
                                className="
                                    block
                                    text-black
                                    mt-1
                                    w-full
                                    rounded-md
                                    shadow-sm
                                    focus:outline-green
                                    focus:ring
                                    focus:ring-light-green
                                    focus:ring-opacity-50"
                                    outline-navBar
                                    placeholder="Let us know any questions you have about the program; we'll go into further talks after the form, but give us a general idea of times and preferences that work for you"
                                    rows="5"
                                    required
                            >
                            </textarea>
                    </label>

                    <label className="block mb-6">
                        <span className="text-gray-700">How'd you hear about us?</span>
                            <textarea
                                name="hear"
                                className="
                                    text-black
                                    w-full
                                    block
                                    outline-navBar
                                    mt-1
                                    rounded-md
                                    shadow-sm
                                    focus:outline-green
                                    focus:ring
                                    focus:ring-light-green
                                    focus:ring-opacity-50"
                                    placeholder="We'd love to know how you heard about us"
                                    rows="2"
                                    required
                            >
                            </textarea>
                    </label>
                    <div className="mb-6">
                        <button
                            type="submit"
                            value="Send"
                            className="
                                h-10
                                px-5
                                text-black
                                bg-pink
                                rounded-lg
                                transition-colors
                                duration-700
                                focus:shadow-outline
                                hover:scale-110
                                hover:bg-green"                 
                        >
                            Contact Us
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form