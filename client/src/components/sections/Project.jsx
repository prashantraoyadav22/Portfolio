import React from 'react';
import ProjectCard from '../common/card/ProjectCard';
const Project = () => {
    return(
        <div  className="flex flex-col items-center justify-center mt-20">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-center text-md md:text-lg text-gray-400 max-w-3xl">
            Code-Powered Designs in Action</p>
            <div className="relative px-4 md:px-40 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-items-center mt-5 md:mt-10">
            <ProjectCard 
                title="Simplycars" 
                description="Simply Cars is a responsive web application designed to showcase car models, features, and specifications. It serve as a digital catalog or a platform for car enthusiasts to explore various vehicles. The application emphasizes a clean user interface and smooth navigation to enhance user experience."
                imageUrl='/image/simplycar.png'
                techStack= {["react","css","html","javascript","netlify"]}
                liveUrl="https://simplycars.netlify.app/"
                githubUrl="https://github.com/prashantraoyadav22/Simply-Cars"

            />
            <ProjectCard 
                title="Portfolio" 
                description="A modern, responsive portfolio website built to showcase my skills, projects, certifications, and professional journey. It features dynamic sections, smooth animations, protected admin access for editing content, and a clean UI/UX inspired by industry standards."
                imageUrl='/image/portfolio.png'
                techStack= {["react","Vite","Tailwind CSS","HTML","JavaScript","Netlify","JWT","MongoDB","Express","Node.js"]}
                liveUrl="/"
                githubUrl="https://github.com/prashantraoyadav22/Portfolio"
            />
                {/* Add more projects as needed */}
            </div>
        </div>
    )
}
export default Project;