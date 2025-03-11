export const ProjectCardSec = ({ title, main, imgSrc, demoLink, sourceCodeLink }) => {
  return (
    <div 
      className="p-3 md:p-6 flex flex-col w-80 h-[24rem] bg-[#0c0e19] shadow-xl shadow-slate-900 
        rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl 
        hover:rotate-1 hover:skew-y-1 animate-fadeIn project-card"
      style={{
        animation: "fadeIn 0.8s ease-in-out",
      }}
    >
      <img className="p-4 max-h-48 object-cover" src={imgSrc} alt="bannerimg" />
    
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      
      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4 justify-center">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4
            hover:bg-blue-500 transition duration-300 transform hover:scale-110
            font-semibold rounded-3xl bg-[#465697]">
            Check
          </button>
        </a>
        
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4
            hover:bg-blue-500 transition duration-300 transform hover:scale-110
            font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectCardSec;