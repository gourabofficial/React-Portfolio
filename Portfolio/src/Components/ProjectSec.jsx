import React from 'react';
import ProjectCardSec from './ProjectCardSec';

export const ProjectSec = () => {
  return (
    <div className="p-10 md:p-24 text-white shadow-xl ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Project</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCardSec 
          title="Weather Application" 
          main="You can check the weather of any city" 
          imgSrc="/assets/weather.jpg" 
          demoLink= 'https://gourabofficial.github.io/Weather-App/'
          sourceCodeLink='https://github.com/gourabofficial/Weather-App'
        />
        <ProjectCardSec 
          title="Currency Converter" 
          main="currency conver at real time" 
          imgSrc="/assets/currencyconverter.jpg" 
          demoLink= 'https://gourabofficial.github.io/Currency_Converter/'
          sourceCodeLink='https://github.com/gourabofficial/Currency_Converter'
        />
        <ProjectCardSec 
          title="Password Generator" 
          main="Create your own password" 
          imgSrc="/assets/password.jpg" 
          demoLink= 'https://gourabofficial.github.io/Password_Generator/'
          sourceCodeLink='https://github.com/gourabofficial/Overpower-React/tree/main/Password_Generator'
        />
        <ProjectCardSec 
          title="Myntra clone" 
          main="E-commerce website using html css" 
          imgSrc="/assets/myntra.jpg" 
          demoLink= 'https://gourabofficial.github.io/Myntra_Clone/'
          sourceCodeLink='https://github.com/gourabofficial/Myntra_Clone'
        />
        <ProjectCardSec 
          title="React-Website" 
          main="simple website using react and react-router" 
          imgSrc="/assets/ownwebsite.png" 
          demoLink= 'https://gourabofficial.github.io/Overpower-React/'
          sourceCodeLink='https://github.com/gourabofficial/Overpower-React/tree/main/reactRoute'
        />
        <ProjectCardSec 
          title="Tic-Tac-Toe" 
          main="Funny game using javascript" 
          imgSrc="/assets/tictactoe.jpg" 
          demoLink= 'https://gourabofficial.github.io/Tic-Tac-Toe-Game/'
          sourceCodeLink='https://github.com/gourabofficial/Tic-Tac-Toe-Game'
        />
      </div>
    </div>
  );
};

export default ProjectSec;