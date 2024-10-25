import React from "react";
import profilepic from '../../assets/profile.jpg';


export const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hello i am Gourab
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          dolor deleniti 
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 
        hover:opacity-85 duration-300 hover:scale-105
         font-semibold rounded-3xl bg-[#942f50]" > Contact me</button>
      </div>
      <div>
        <img className='w-2 hover:scale-105 transition duration-300 ease-in-out h-24 md:w-80 md:h-80 rounded-xl object-cover shadow-lg' src={profilepic} alt="" />
      </div>
    </div>
  );
}; export default Home;
