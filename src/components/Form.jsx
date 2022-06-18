import React from "react";

const Form = () => {
    return(
<div class="w-4/5 md:w-100 md:max-w-full mx-auto">
  <div class="p-6 outline rounded-lg outline-pink outline-4 sm:rounded-lg max-w-[700px] mx-auto bg-gray">
    <form>
      <label class="block mb-6">
        <span class="text-gray-700">Your name</span>
        <input
          type="text"
          name="name"
          class="
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
            focus:ring-opacity-50
          "
          placeholder="Jane Doe"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Email address</span>
        <input
          name="email"
          type="email"
          class="
         text-black
            block
            w-full
            mt-1
            outline-navBar
            rounded-md
            shadow-sm
            focus:outline-green
            focus:ring
            focus:ring-light-green
            focus:ring-opacity-50
          "
          placeholder="janedoe@example.com"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Message</span>
        <textarea
          name="message"
          class="
            text-black
            block
            w-full
            mt-1
            outline-navBar
            rounded-md
            shadow-sm
            focus:outline-green
            focus:ring
            focus:ring-light-green
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="Let us know any questions you have about the program and when your child would be free for tutoring! We'd also love to know how you heard about us!"
          required
        ></textarea>
      </label>
      <div class="mb-6">
        <button
          type="submit"
          class="
            
            h-10
            px-5
            text-black
            bg-pink
            rounded-lg
            transition-colors
            duration-700
            focus:shadow-outline
            hover:scale-110
            hover:bg-green
          "
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