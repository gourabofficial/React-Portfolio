import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiExpress, SiNodedotjs, SiJava } from "react-icons/si";

export const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition duration-300 ease-in-out" title="HTML5">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition duration-300 ease-in-out" title="CSS3">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition duration-300 ease-in-out" title="React">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition duration-300 ease-in-out" title="JavaScript">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition duration-300 ease-in-out" title="Figma">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition duration-300 ease-in-out" title="Express">
            <SiExpress color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition duration-300 ease-in-out" title="Java">
            <SiJava color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:bg-zinc-800 transition duration-300 ease-in-out" title="Node.js">
            <SiNodedotjs color="#FF4438" size={50} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;