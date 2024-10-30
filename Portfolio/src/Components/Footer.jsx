import React from "react";
import { MdOutlineEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {
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

      {/* Add this form  */}
      <div className="bg-gray-300 rounded-xl w-full md:w-auto">
        <form className="p-6 flex flex-col justify-center">
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-4 ">
            <label htmlFor="text" className="hidden">
              Number
            </label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="give some feedback"
              className="w-full mt-2 py-8 px-8 rounded-lg bg-white border
               border-gray-400 text-gray-800 
               font-semibold focus:border-orange-500 focus:outline-none "
            />
          </div>

          <button
            type="submit"
            className="  md:w-32 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 
            rounded-lg mt-3 transition ease-in-out duration-300 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
