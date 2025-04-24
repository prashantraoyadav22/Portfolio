import React, { useEffect, useRef, useState } from "react";
import ExperienceCard from "../common/card/ExperienceCard"; // make sure path is correct
import timelineData from "../../../public/javaScript/timelineData"; // your experience data

const Timeline = () => {
  const timelineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = Math.max(0, windowHeight - rect.top);
        const percentage = Math.min(100, (scrollTop / rect.height) * 100);
        setLineHeight(percentage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative px-40 md:px-40 w-full flex flex-col items-center mt-10">
      {/* Vertical Line */}
      <div
        ref={timelineRef}
        className="absolute top-25 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-800 opacity-50 "
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          height: `${lineHeight * 0.85}%`,
          transition: "height 2s ease-in-out",
        }}
      />

      {/* Cards */}
      <div className=" flex flex-col gap-10 md:gap-0 md:m-15  md:w-full  ">
        {timelineData.map((exp, index) => (
          <div
            key={index}
            className={`relative w-full flex md:-mt-15  ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } justify-center`}
          >
            <div
              className={` w-full max-w-xl md:w-1/2 group ${
                index % 2 === 0 ? "md:pr-10 " : "md:pl-9 "
              }`}
            >
              {/* Branch Line and Dot */}
              <div
                className={`hidden md:block absolute left-1/2 top-0 h-full w-1 `}
              >
                <div
                  className={`relative top-1/2 w-12 h-0.5 bg-blue-500 opacity-70 transition-all duration-1000 easy-out group-hover:scale-130 ${
                    index % 2 === 0
                      ? "-translate-x-full origin-right"
                      : "translate-x-0 origin-left"
                  }`}
                ></div>
                {/* Dot */}

                <div
                  className={`relative top-1/2 left-1/2 w-2 h-4 rounded-full -translate-y-1/2 -translate-x-1/2 opacity-100  ${
                    index % 2 === 0
                      ? " bg-gradient-to-r from-blue-500 to-purple-800"
                      : " bg-gradient-to-r from-purple-800 to-blue-500"
                  }`}
                ></div>
              </div>

              <ExperienceCard data={exp} />
              <div
                className={`hidden md:block absolute top-1/2 left-1/2 w-3 h-2 bg-blue-500 rounded-full -translate-y-1/2 -translate-x-1/2 group-hover:shadow-md group-hover:shadow-blue-400  opacity-60 transition-all duration-1000 easy-out group-hover:scale-105  ${
                  index % 2 === 0
                    ? "-ml-13 group-hover:-ml-12"
                    : "ml-12 group-hover:ml-11"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
