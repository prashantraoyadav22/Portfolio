import techStackData from "../../../src/assets/techStackData";
import TechCard from "../common/card/TechCard";

const TechStack = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4"> My Tech Stack</h2>
            <p className="text-center text-md md:text-lg text-gray-400 max-w-3xl">
            Proficiency in a wide range of modern technologies allows me to design and implement innovative solutions, enabling me to architect and develop robust, high-performance applications that effectively meet real-world demands
            </p>
            <div className="relative px-4 md:px-40 w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 justify-items-center mt-5 md:mt-10 ">
        {techStackData.map((stack, index) => (
          <TechCard key={index} category={stack.category} techs={stack.techs} />
        ))}
      </div>
        </div>
    );
}
export default TechStack;