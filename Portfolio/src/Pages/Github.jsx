// Pages/Github.jsx
import React, { useEffect, useState } from "react";
import GithubSec from "../Components/GithubSec";

export const Github = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/gourabofficial");
        if (!response.ok) throw new Error("User not found");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setData(null);  // sets to null if user not found or if an error occurs
      }
    };
    fetchGithubData();
  }, []);

  return (
    <>
      <GithubSec data={data} />
    </>
  );
};

export default Github;
