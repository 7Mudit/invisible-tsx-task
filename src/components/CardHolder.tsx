import React, { useState } from "react";
import Card from "./Card";
import ProjectComponent from "./Project";

interface Project {
  title: string;
  description: string;
  images: string[];
  link?: string;
}

interface CardHolderProps {
  projects: Project[];
}

const CardHolder: React.FC<CardHolderProps> = ({ projects }) => {
  const [selectedProject, setIsSelectedProject] = useState<Project | null>(
    null
  );
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setIsSelectedProject(project);
    setIsOverlayOpen(true);
  };

  const handleClose = () => {
    setIsOverlayOpen(false);
    setIsSelectedProject(null);
  };

  return (
    <div className="card-holder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={`col-span-1 ${
            index % 3 === 0
              ? "md:col-start-1"
              : index % 3 === 1
              ? "md:col-start-2"
              : "md:col-start-3"
          } ${index % 2 === 0 ? "sm:col-start-1" : "sm:col-start-2"}`}
        >
          <Card
            key={project.title}
            project={project}
            onClick={handleProjectClick}
          />
        </div>
      ))}
      {isOverlayOpen && selectedProject && (
        <ProjectComponent project={selectedProject} onClose={handleClose} />
      )}
    </div>
  );
};

export default CardHolder;
