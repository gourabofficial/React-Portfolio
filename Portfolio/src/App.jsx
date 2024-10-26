import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Github from './Pages/Github'

export const App = () => {
  return (
    <>
      <main className="bg-gradient-to-r from-blue-950 to-purple-900
       h-auto w-full  overflow-hidden text-white  ">
        <Routes>
          <Route element={<RootLayout/>} >
            <Route index element={<Home/>} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/project" element={<Projects/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/github" element={<Github/>} />
          
          </Route>
      </Routes>
      </main>
    </>
  );
};

export default App;
