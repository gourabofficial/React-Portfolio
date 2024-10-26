import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white pt-6  space-x-8 ml-auto">
    
      <NavLink to="/" className="text-3xl font-bold tracking-wide transition duration-300
       hover:bg-gray-400 hover:scale-110 rounded-lg">

        Portfolio

      </NavLink>

      <ul
        className={`${menu ? "block" : "hidden"
          } md:flex gap-10 bg-opacity-30 md:bg-transparent`}
      >
        <NavLink to="/about"
          className="text-md font-extrabold px-3 transition duration-300 hover:bg-gray-400 hover:scale-110 rounded-lg">
          About
        </NavLink>
        <NavLink to={"/skills"}
          className="text-md font-extrabold px-3 transition duration-300 hover:bg-gray-400 hover:scale-110 rounded-lg">
          Skills
        </NavLink>
        <NavLink to="/project"
          className="text-md font-extrabold transition duration-300 hover:bg-gray-400 hover:scale-110 rounded-lg px-3">
          Projects
        </NavLink>
        <NavLink to="/github"
          className="text-md font-extrabold transition duration-300 hover:bg-gray-400 hover:scale-110 rounded-lg px-3">
          GitHub
        </NavLink>
        <NavLink to="/contact"
          className="text-md font-extrabold transition duration-300 hover:bg-gray-400 hover:scale-110 rounded-lg px-3">
          Contact
        </NavLink>
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
