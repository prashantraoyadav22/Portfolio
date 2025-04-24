import react from "react";
import Timeline from "../sections/Timeline";

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black">
            <h1 className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 mb-6">
                Experience
            </h1>
            <p className="text-center text-md md:text-lg text-gray-400 max-w-3xl">
            A reflection of my academic and professional journey, shaping my growth in the tech world
            </p>
            <Timeline/>
        </div>
    );
}
export default Experience;