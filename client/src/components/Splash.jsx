import { useEffect, useState } from "react";

const Splash = ({ onFinish }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 250),
      setTimeout(() => setStage(2), 1750),
      setTimeout(() => setStage(3), 3500),
      setTimeout(() => setStage(4), 6000),
      setTimeout(() => {
        setStage(5);
        onFinish();
      }, 7500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Name */}
      <div
        className={`text-4xl md:text-6xl font-bold absolute transition-all duration-1500 ease-in
        ${stage === 1 ? "scale-100 opacity-100" : ""}
        ${stage === 2 ? "scale-5000 opacity-0" : ""}
        ${stage < 1 || stage >= 3 ? "hidden" : ""}
        `}
      >
        PRASHANT <span className="text-blue-500">YADAV</span>
        
      </div>

      {/* Designation */}
      <div
        className={`text-2xl md:text-4xl font-medium absolute transition-all duration-2250 ease-in-out
        ${stage === 2 ? "opacity-0" : ""}
        ${stage === 3 ? "translate-y-0 opacity-100" : ""}
        ${stage === 4 ? "translate-y-[300%] opacity-0" : ""}
        ${stage < 2 || stage >= 5 ? "hidden" : ""}
        `}
      >
        Software <span className="text-blue-500">Developer</span>
      </div>

      {/* Loading Bar */}
      {stage < 5 && (
        <div className="absolute bottom-10 w-full px-8">
          <div className="w-full h-1 bg-gray-700 relative overflow-hidden rounded-full">
            <div className="absolute left-1/2 -translate-x-1/2 bg-blue-500 h-full animate-load-bar rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Splash;