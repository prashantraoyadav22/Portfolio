import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { FaGithub } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";


const ProjectCard = ({
    title= "TasteTroop",
    description= "A Restaurant website to explore menu and order food items.",
    imageUrl= "https://w0.peakpx.com/wallpaper/845/537/HD-wallpaper-golden-retriever-puppy-dog-animal-high-quality.jpg", // adjust this to your correct image path
    techStack= ["JavaScript", "React", "React Router", "Node Js", "Express", "MongoDB"],
    liveUrl= "https://tastetroop.onrender.com",
    githubUrl= "https://github.com/prashantraoyadav22/TasteTroop",
}) => {

 
const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.3 }
      );
  
      if (cardRef.current) observer.observe(cardRef.current);
      return () => {
        if (cardRef.current) observer.unobserve(cardRef.current);
      };
    }, []);

  return (
    <div ref={cardRef} className={`flex flex-col bg-transparent border border-purple-500/30 shadow-md  transition-all duration-2000 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 backdrop-blur-md rounded-2xl p-3 w-full hover:scale-105 transition-transform 
    `}>
      {/* Image Section */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full grow h-38 md:h-42 object-cover rounded-xl mb-4"
        />
      )}

      {/* Title */}
      <h2 className="text-md md:text-xl text-purple-400 font-semibold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-xs md:text-sm text-white/80 mb-4">{description}</p>

      {/* Tech Stack (Optional) */}

      
      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`flex flex-wrap border border-blue-500/40 px-2 py-1 rounded-md text-blue-500 text-xs transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              style={{ transitionDelay: `${index * 400}ms` }}
            >
              {tech}
            </span>
          ))}
          
        </div>
      )}
      
      <div className="flex items-end justify-end self-end gap-1">
        <Button
          text="Live"
          icon={<TbWorldSearch size={18} />}
          variant="filled"
          color="purple"
          className="mt-2 md:text-xs "
          onClick={() => window.open(liveUrl, "_blank")}
        />
        <Button
          text=""
          icon={<FaGithub size={18} />}
          variant="outlined "
          color="purple"
          className="mt-2 md:text-xs"
          onClick={() => window.open(githubUrl, "_blank")}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
