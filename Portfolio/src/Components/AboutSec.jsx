import React from "react";

export const AboutSec = () => {
  return (
    <div
      id="About"
      className="flex flex-col md:flex-row items-center md:items-start md:justify-between
      p-10 md:p-20 bg-black text-white rounded-lg shadow-xl bg-opacity-30"
    >
      <div className="flex flex-col items-center md:items-start md:pr-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-11 ">About</h2>
        
        <img
          className="md:h-64 md:w-80  rounded-lg shadow-md mb-8 "
          src="/assets/about.jpg"
          alt="About"
        />
        <p className="text-md font-bold md:text-lg leading-snug text-center md:text-left">
          I’m a B.Tech student in Computer Science and Engineering, passionate
          about football and programming.
        </p>
      </div>

      <div className="mt-8 md:mt-0 md:pl-10 flex flex-col space-y-8  ">
        
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-orange-500 mb-2">Web Developer</h3>
          <p className="text-sm md:text-md font-extrabold leading-tight shadow-xl">
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
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-orange-500">
            Proficiency in Programming Languages
          </h3>
          <p className="text-sm md:text-md font-extrabold leading-tight shadow-xl">
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
