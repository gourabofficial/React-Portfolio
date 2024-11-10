import React, { useRef, useEffect, useState } from "react";
import { MdOutlineEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useForm } from "@formspree/react";

export const Footer = () => {
  const [state, handleSubmit] = useForm("mbljyljw");
  const formRef = useRef(null); 
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const onSubmit = (e) => {
    handleSubmit(e);
    setIsSubmitted(false); 
  };

  useEffect(() => {
    if (state.succeeded && !isSubmitted) {
      formRef.current.reset(); 
      setIsSubmitted(true); 
    }
  }, [state.succeeded, isSubmitted]);

  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-between shadow-xl bg-opacity-30 text-white p-6 md:p-12 items-center fade-in-animation"
    >
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-2 mb-6 md:mb-0">
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <MdOutlineEmail size={20} />
          gourabofficial702@gmail.com
        </li>
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <MdPhone size={20} />
          9100000000
        </li>
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <MdLocationOn size={20} />
          Dubrajpur, Birbhum, West Bengal
        </li>
      </ul>

      <div className="bg-gray-300 rounded-xl w-full md:w-auto">
        <form
          onSubmit={onSubmit} 
          className="p-6 flex flex-col justify-center"
          ref={formRef} 
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="hidden">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="message" className="hidden"></label>
            <textarea
              name="message"
              id="message"
              placeholder="Give some feedback"
              className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="md:w-32 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
            disabled={state.submitting}
          >
            Submit
          </button>

          {state.succeeded && (
            <p className="text-black mt-4 font-bold">Thank you for your feedback!</p>
          )}
          {state.errors && state.errors.length > 0 && (
            <p className="text-red-500 mt-4 font-bold">There was an error submitting your feedback. Please try again later.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Footer;
