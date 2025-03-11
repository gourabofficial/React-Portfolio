import React from 'react';
import ProjectCardSec from './ProjectCardSec';

export const ProjectSec = () => {
  return (
    <div className="p-10 md:p-24 text-white shadow-xl">
      <h1 className="text-2xl md:text-4xl text-white font-bold ">Project</h1>
      <div className="py-12 px-8 flex flex-wrap justify-center gap-5">
        <ProjectCardSec 
          title="Learning Management System" 
          main="LMS website using MERN Stack" 
          imgSrc="/assets/lms.jpg" 
          demoLink='https://coursehub-ui.vercel.app/'
          sourceCodeLink='https://github.com/gourabofficial/Learning-Management-System'
        />
        <ProjectCardSec 
          title="E-commerce website" 
          main="E-commerce website using MERN Stack" 
          imgSrc="/assets/ecommerce.jpg" 
          demoLink="https://github.com/gourabofficial/Project-E-Commerce"
          sourceCodeLink='https://github.com/gourabofficial/Project-E-Commerce'
        />
        <ProjectCardSec 
          title="Password Generator" 
          main="Create your own password" 
          imgSrc="/assets/password.jpg" 
          demoLink='https://password-genarator-react.vercel.app/'
          sourceCodeLink='https://github.com/gourabofficial/Overpower-React/tree/main/Password_Generator'
        />
        <ProjectCardSec 
          title="Authentication System" 
          main="Authentication System using MERN Stack" 
          imgSrc="/assets/auth.jpg" 
          demoLink='https://github.com/gourabofficial/MERN-Auth'
          sourceCodeLink='https://github.com/gourabofficial/MERN-Auth'
        />
        <ProjectCardSec 
          title="React-Website" 
          main="simple website using react and react-router" 
          imgSrc="/assets/ownwebsite.png" 
          demoLink='https://react-website-orcin-eight.vercel.app/'
          sourceCodeLink='https://github.com/gourabofficial/Overpower-React/tree/main/reactRoute'
        />
        <ProjectCardSec 
          title="Tic-Tac-Toe" 
          main="Funny game using javascript" 
          imgSrc="/assets/tictactoe.jpg" 
          demoLink='https://gourabofficial.github.io/Tic-Tac-Toe-Game/'
          sourceCodeLink='https://github.com/gourabofficial/Tic-Tac-Toe-Game'
        />
      </div>
    </div>
  );
};

export default ProjectSec;