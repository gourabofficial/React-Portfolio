import React from "react";
import aboutpic from "../../assets/about.jpg";
import { IoArrowForward } from "react-icons/io5";

export const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center
     md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-2xl md:text-4xl font-bold mb-4  "> About </h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img
            className="md:h-72 md:w-96 rounded-lg shadow-lg 
            transform hover:scale-105 transition
            duration-300 ease-in-out m-14"
            src={aboutpic}
            alt="About"
          />

          <ul className="md:ml-8">
            <div className="flex gap-3 py-4">
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal "></h1>
                <p className="text-md md:text-md leading-tight ">
                  I’m a B.Tech student in Computer Science and Engineering,
                  passionate about football and programming. Balancing the field
                  and code, I channel my energy into both my skills on the pitch
                  and my projects as a programmer. Football fuels my drive,
                  while coding hones my analytical side—making each day a blend
                  of creativity, strategy, and relentless pursuit of
                  improvement.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal mb-2">
                  Web Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a web developer with skills in both frontend and backend
                  technologies, with a foundational understanding of backend
                  development. Proficient in React.js, Node.js, Express.js,
                  HTML, Tailwind CSS, Bootstrap, and JavaScript, I enjoy
                  crafting responsive, dynamic websites. From building seamless
                  user interfaces to exploring backend integration, I bring
                  projects to life with a focus on modern web technologies and a
                  clean, user-centric design approach.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal mb-2">
                  Proficiency in Programming Languages
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Proficient in multiple programming languages including  C, C++, JavaScript,
                  and Good foundation of Core Java. Strong expertise in algorithm design, data
                  structures, and complex problem-solving. Focus on writing
                  clean, optimized code for software development, create project 
                   and competitive programming.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
