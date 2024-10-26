import React from "react";
import { IoArrowForward } from "react-icons/io5";

export const AboutSec = () => {
  return (
    <div
      id="About"
      className="flex flex-col md:flex-row items-center md:items-start md:justify-between
      p-10 md:p-20 bg-black text-white rounded-lg shadow-xl bg-opacity-30"
    >
      <div className="flex flex-col items-center md:items-start md:pr-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About</h2>
        
        <img
          className="md:h-72 md:w-96 rounded-lg shadow-md mb-4 "
          src="/assets/about.jpg"
          alt="About"
        />
        <p className="text-md md:text-lg leading-snug text-center md:text-left">
          I’m a B.Tech student in Computer Science and Engineering, passionate
          about football and programming.
        </p>
      </div>

      <div className="mt-8 md:mt-0 md:pl-10 flex flex-col space-y-8">
        
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Web Developer</h3>
          <p className="text-sm md:text-md leading-tight">
            I am a web developer with skills in both frontend and backend
            technologies, with a foundational understanding of backend
            development. Proficient in React.js, Node.js, Express.js, HTML,
            Tailwind CSS, Bootstrap, and JavaScript, I enjoy crafting
            responsive, dynamic websites. From building seamless user
            interfaces to exploring backend integration, I bring projects to
            life with a focus on modern web technologies and a clean,
            user-centric design approach.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Proficiency in Programming Languages
          </h3>
          <p className="text-sm md:text-md leading-tight">
            Proficient in multiple programming languages including C, C++,
            JavaScript, and a good foundation of Core Java. Strong expertise in
            algorithm design, data structures, and complex problem-solving.
            Focus on writing clean, optimized code for software development,
            project creation, and competitive programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
