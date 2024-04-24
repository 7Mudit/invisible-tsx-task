import React from "react";
import { Project } from "../interfaces/Project";

interface CardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const Card: React.FC<CardProps> = ({ project, onClick }) => {
  return (
    <div
      className={`card cursor-pointer bg-gray-100 shadow-md hover:shadow-lg rounded-lg overflow-hidden `}
      onClick={() => onClick(project)}
    >
      <img
        className="w-full h-48 object-cover"
        src={project.images[0]}
        alt={project.title}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
        <p className="text-gray-600 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
};

export default Card;
