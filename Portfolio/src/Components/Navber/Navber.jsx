import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 space-x-8 ml-auto">
      <span className="text-3xl font-bold tracking-wide transition duration-300
       hover:bg-gray-400 hover:scale-110 rounded-lg">
        Portfolio
      </span>

      <ul 
        className={`${
          menu ? "block" : "hidden" 
        } md:flex gap-6 mx-auto mt-4 md:mt-0 font-semibold text-lg bg-black bg-opacity-30 md:bg-transparent md:static rounded-xl md:rounded-none px-2 py-2 md:p-0`}
      >
        <a href="#About">
          <li className="text-md  p-1 md:p-0 transition duration-300 hover:bg-gray-400 hover:scale-110 rounded-lg">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md  p-1 md:p-0 transition duration-300 hover:bg-gray-400 hover:scale-110 rounded-lg">
            Skills
          </li>
        </a>
        
        <a href="#Projects">
          <li className="text-md transition duration-300 hover:bg-gray-400 hover:scale-110 rounded-lg p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Github">
          <li className="text-md transition duration-300 hover:bg-gray-400 hover:scale-110 rounded-lg p-1 md:p-0">
            GitHub
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition duration-300 hover:bg-gray-400 hover:scale-110 rounded-lg p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>

      <div className="md:hidden absolute right-10 top-6">
        {menu ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setMenu(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
