import React from "react";
import { MdOutlineEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around shadow-xl bg-opacity-30 text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-2">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          gourabofficial702@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <MdPhone size={20} />
          916294692462
        </li>
        <li className="flex gap-1 items-center">
          <MdLocationOn size={20} />
          Dubrajpur , Birbhum , West Bengal
          
        </li>
      </ul>
      {/* Add this form  */}
      <div className="bg-gray-300 rounded-xl">
        <form className="p-6 flex flex-col justify-center">
          <div className="flex flex-col">
            <label for="name" className="hidden">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label for="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label for="tel" className="hidden">
              Number
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telephone Number"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="md:w-32 bg-blue-600 hover:bg-blue-dark text-white font-bold py-3 px-6 
            rounded-lg mt-3 hover:bg-blue-500 transition ease-in-out duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Footer;
