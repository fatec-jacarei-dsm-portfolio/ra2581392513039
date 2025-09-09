import React from "react";
import "../style/projectCard.css";
  
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-list">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-item">{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        Ver Projeto
      </a>
    </div>
  );
};

export default ProjectCard;