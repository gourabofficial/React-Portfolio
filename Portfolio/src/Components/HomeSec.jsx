import React from "react";



export const HomeSec = () => {
  
  return (
    <div className="flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 text-white fade-in-animation">
      <div className="md:w-2/4 md:pt-10">
        <h1 className=" text-3xl md:text-6xl font-bold flex leading-normal tracking-tight mb-2 gradient-text ">
          Hello i am
          <span className="ml-3 text-green-500 typing-animation ">Gourab</span>
        </h1>
        <p className="text-md md:text-2xl tracking-tight font-medium">
          Welcome to My Portfolio!
        </p>
        <p className="font-medium">Thank you for visiting. Here, I showcase my projects and skills.</p>
        <button
          className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
          hover:opacity-85 duration-300 hover:scale-105
          font-semibold rounded-3xl bg-[#314def]"
          onClick={() => window.open("https://www.linkedin.com/in/gourab-ganguly-842b53308/", "_blank")}
        >
          LinkedIn
        </button> 
      </div>
      <div className="mt-10 md:mt-0">
        <img
          className="w-40 hover:scale-105 transition duration-300 ease-in-out md:w-80 md:h-80 rounded-xl object-cover shadow-lg"
          src="/assets/profile.jpg"
          alt="Profile"
        />
      </div>
    </div>
  );  
};

export default HomeSec;
