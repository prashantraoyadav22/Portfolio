// src/components/cards/TechCard.jsx
import React, { useEffect, useRef, useState } from "react";

const TechCard = ({ category, techs }) => { 
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
    <div ref={cardRef}
    className={`bg-transparent border border-purple-500/30 shadow-md transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 backdrop-blur-md rounded-2xl p-5 w-full hover:scale-105 transition-transform 
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <h2 className="text-sm md:text-lg font-bold text-purple-400 mb-2">{category}</h2>
      <div className="flex flex-wrap gap-3">
        {techs.map((tech, index) => (
          <div key={index} 
              className={`flex items-center gap-1 border border-blue-400/20 px-3 py-1 rounded-lg transition-all duration-1000 ease-out 
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              style={{ transitionDelay: `${index * 400}ms` }}
              >
            <tech.icon className="text-2xl text-blue-600" />
            <span className="text-white text-xs md:text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
