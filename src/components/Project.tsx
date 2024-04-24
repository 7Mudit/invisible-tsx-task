import React from "react";

import { Project } from "../interfaces/Project";

interface ProjectProps {
  project: Project;
  onClose: () => void;
}

const ProjectComponent: React.FC<ProjectProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl p-8">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-96 object-cover mb-4"
        />
        <h2 className="text-2xl font-medium mb-4">{project.title}</h2>
        <p className="text-gray-700 mb-6">{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectComponent;
