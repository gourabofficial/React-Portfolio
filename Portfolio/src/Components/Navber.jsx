import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white pt-6 shadow-2xl fade-in-animation">
      <NavLink
        to="/"
        className="text-3xl font-bold tracking-wide transition duration-300 hover:scale-110 hover:text-orange-500 rounded-lg m-8 ml-20 p-2"
      >
        <FaHome className="inline-block text-white transition duration-300 hover:scale-110 hover:text-orange-500" style={{ fontSize: "1.8em" }} />
      </NavLink>

      <div className="md:hidden absolute right-10 top-6 z-50">
        {menu ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer transition-transform duration-300 text-white"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer transition-transform duration-300 text-white"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-90 text-white transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-semibold">
          {["about", "skills", "project", "github", "contact"].map((route) => (
            <li key={route}>
              <NavLink
                to={`/${route}`}
                className={({ isActive }) =>
                  `text-md font-extrabold transition duration-300 ${
                    isActive ? "text-orange-500 scale-110" : "hover:text-orange-500 hover:scale-110"
                  }`
                }
                onClick={() => setMenu(false)}
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <ul className="hidden md:flex gap-6 mx-auto mt-4 md:mt-0 font-semibold text-lg">
        {["about", "skills", "project", "github", "contact"].map((route) => (
          <li key={route}>
            <NavLink
              to={`/${route}`}
              className={({ isActive }) =>
                `text-md font-extrabold px-3 transition duration-500 ${
                  isActive ? "text-orange-500 scale-110" : "hover:text-orange-500 hover:scale-110"
                }`
              }
            >
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
