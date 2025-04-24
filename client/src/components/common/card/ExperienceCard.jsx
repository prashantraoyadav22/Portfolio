import React, { useEffect, useRef, useState } from "react";

const ExperienceCard = ({ data }) => {
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
    
    <div
      ref={cardRef}
      className={`group bg-transparent border border-purple-500/30 rounded-xl p-6 text-white backdrop-blur-sm shadow-md transition-all duration-1000 ease-in-out max-w-md md:max-w-2xl hover:scale-105
        hover:shadow-lg hover:shadow-purple-500/30 z-50
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* Top Section: Year + Logo */}
      <div className="flex justify-between items-start text-blue-400 text-2xl md:text-3xl ">
        <div className=" flex items-baseline gap-2">
          <span>{data.year}</span>
          <span className="text-sm text-gray-300">{data.duration}</span>
        </div>
        <img
          src={data.logo}
          alt="logo"
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Title with underline on full card hover */}
      <h3 className="text-xl md:text-2xl font-bold text-purple-400 relative w-fit">
        {data.title}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-400 transition-all duration-2000 easy-in-out group-hover:w-full"></span>
      </h3>

      {/* Company + Location */}
      <p className="text-md md:text-lg text-gray-300 font-semibold mt-1">
        {data.company} <span className="text-blue-400">•</span> {data.location}
      </p>

      {/* Description (no animation) */}
      <p className="text-sm text-gray-400 mt-4">{data.description}</p>

      {/* Highlights with left-to-right slide */}
      <ul className="mt-3 list-none text-sm space-y-2">
        {data.points.map((point, idx) => (
          <li
            key={idx}
            className={`flex items-start gap-2 transition-all duration-1000 ease-out 
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
            style={{ transitionDelay: `${idx * 400}ms` }}
          >
            <span className="text-purple-400 ">→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default ExperienceCard;
