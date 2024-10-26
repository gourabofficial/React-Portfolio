import React from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {
  const data = useLoaderData(); // Fetch the data using a loader
  
  return (
    <div className="text-center m-4 bg-gray-100 text-black p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="font-bold text-gray-900 text-2xl mb-4">GitHub Information</h1>

      <div className="bg-gray-200 p-4 rounded-lg mb-6">
        <p className="font-medium text-lg mb-2">
          Followers: <span className="text-indigo-600">{data.followers}</span>
        </p>
        <p className="font-medium text-lg">
          Following: <span className="text-indigo-600">{data.following}</span>
        </p>
      </div>

      <img
        className="rounded-full border-4 border-indigo-500 mb-6 mx-auto
         transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        src={data.avatar_url}
        alt="GitHub Profile"
        width={250}
        onClick={() => window.open(`https://github.com/${data.login}`, '_blank')}
      />

      <a
        href={`https://github.com/${data.login}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-600 text-white
         py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        View Profile
      </a>
    </div>
  );
};

export default Github;

export const githubinfo = async () => {
  const response = await fetch("https://api.github.com/users/gourabofficial");
  return response.json();
};
