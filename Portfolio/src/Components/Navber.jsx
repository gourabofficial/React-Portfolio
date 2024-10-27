import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white pt-6 shadow-2xl fade-in-animation">
      <NavLink
        to="/"
        className="text-3xl font-bold tracking-wide transition
         duration-300 hover:scale-110 hover:text-orange-500 
         rounded-lg m-8 ml-20 p-2"
      >
        Portfolio
      </NavLink>

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

      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex gap-6 mx-auto mt-4 md:mt-0 font-semibold text-lg bg-black bg-opacity-30 md:bg-transparent rounded-xl md:rounded-none px-2 py-2 md:p-0`}
      >
        <li>
          <NavLink
            to="/about"
            className="text-md font-extrabold px-3 transition duration-500 hover:text-orange-500 hover:scale-110  "
            onClick={() => setMenu(false)} // Close menu on click
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className="text-md font-extrabold px-3 transition duration-300 hover:text-orange-500 hover:scale-110 rounded-lg"
            onClick={() => setMenu(false)} // Close menu on click
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className="text-md font-extrabold transition duration-300 hover:text-orange-500 hover:scale-110 rounded-lg px-3"
            onClick={() => setMenu(false)} 
          >
            Projects
          </NavLink>
        </li>
        <li>
        <NavLink
                  to="/github"
                  className="text-md font-extrabold px-3 transition duration-300 hover:text-orange-500 hover:scale-110 rounded-lg"
            onClick={() => setMenu(false)}
                >
                  GitHub
                </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="text-md font-extrabold transition duration-300 hover:text-orange-500 hover:scale-110 rounded-lg px-3"
            onClick={() => setMenu(false)} 
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
