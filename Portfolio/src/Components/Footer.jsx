import React from "react";
import { MdOutlineEmail, MdPhone } from "react-icons/md";

export const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
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
      </ul>
    </div>
  );
};
export default Footer;