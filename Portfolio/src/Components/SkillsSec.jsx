import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiExpress, SiNodedotjs ,SiTailwindcss} from "react-icons/si";

const SkillsSec = () => {
  return (
    <div id="Skills" className="p-10 md:p-24 shadow-xl bg-opacity-30">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 ">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl  transition duration-300 hover:bg-zinc-900 hover:scale-110">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
            <DiJava color="#007396" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
            <SiExpress color="#808080" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
            <SiNodedotjs color="#68A063" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 hover:bg-zinc-900 hover:scale-110">
            <SiTailwindcss color="#06B6D4" size={50} /> 
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillsSec;
