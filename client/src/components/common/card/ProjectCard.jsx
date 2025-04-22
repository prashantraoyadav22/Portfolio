import React from "react";
import Button from "../Button";
import { FaGithub } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  techStack = [],
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className=" w-full sm:w-[300px] backdrop-blur-lg shadow-md shadow-white rounded-2xl p-4 text-white hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Image Section */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
      )}

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-sm text-white/80 mb-4">{description}</p>

      {/* Tech Stack (Optional) */}

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-white/20 px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex justify-end items-center gap-2">
        <Button
          text="Live"
          icon={<TbWorldSearch size={26} />}
          variant="filled"
          color="orange-400"
          className="mt-4"
          onClick={() => window.open(liveUrl)}
        />
        <Button
          text=""
          icon={<FaGithub size={26} />}
          variant="outlined "
          color="orange-400"
          className="mt-4"
          onClick={() => window.open(githubUrl)}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
