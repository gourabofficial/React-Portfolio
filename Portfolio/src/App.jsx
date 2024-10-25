import React from "react";
import Navber from "./Components/Navber/Navber";
import Home from "./Components/Home/Home";

export const App = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-purple-900
       h-auto w-full overflow-hidden text-white">
        <Navber />
        <Home/>
     
      </div>
      
    </>
  );
};

export default App;
