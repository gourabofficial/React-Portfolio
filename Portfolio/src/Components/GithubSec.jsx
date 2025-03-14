
import React from "react";

export const GithubSec = ({ data }) => {
  if (!data) {
    return (
      <h1 className="w-full h-screen flex items-center justify-center font-bold text-4xl rounded-xl mt-4 fade-in-animation">
      <img
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
        src="/assets/loader.svg"
        alt="loading"
      />
    </h1>
    
    );
  }

  return (
    <div className="text-center m-4 bg-gray-900 text-black p-6 rounded-lg shadow-lg max-w-md mx-auto fade-in-animation">
      <h1 className="font-bold text-orange-500 text-2xl mb-4">GitHub Information</h1>

      <div className="bg-gray-300 p-4 rounded-lg mb-6">
        <p className="font-medium text-lg mb-2">
          Followers: <span className="text-indigo-600">{data.followers}</span>
        </p>
        <p className="font-medium text-lg">
          Following: <span className="text-indigo-600">{data.following}</span>
        </p>
      </div>

      <img
        className="rounded-full border-4 border-indigo-500 mb-6 mx-auto
          transition-transform duration-300 ease-in-out transform hover:scale-105"
        src={data.avatar_url}
        alt="GitHub Profile"
        width={250}
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

export default GithubSec;
