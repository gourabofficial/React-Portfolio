import React, { useEffect } from "react"; // Import useEffect
import { Route, Routes } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Github from './Pages/Github';

export const App = () => {
  
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    // Disable inspect element and developer tools
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        (event.ctrlKey && event.shiftKey && event.key === 'J') ||
        (event.ctrlKey && event.key === 'U') ||
        (event.key === 'F12')
      ) {
        event.preventDefault();
      }
    };

    // Disable dragging of images
    const handleDragStart = (event) => {
      if (event.target.tagName === 'IMG') {
        event.preventDefault();
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <main className="bg-gradient-to-r from-blue-950 to-purple-900
       min-h-screen w-full  overflow-hidden text-white">
        <Routes>
          <Route element={<RootLayout />} >
            <Route index element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/github" element={<Github />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
