import React from "react";
import ProjectCard from "./ProjectCard";
import "../style/projects.css";

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "FATREK",
      description: "Projeto ABP - Site para consulta de horário de aula e localização de salas.",
      technologies: ["HTML", "Javascript", "CSS", "Node.js", "PostgreSQL"],
      link: "https://fatreck.ct.ws/?i=1"
    },
    {
      title: "Clone Spotify",
      description: "Projeto feito em uma imersão - Clone de interface do Spotify com uma fake API para busca de artistas.",
      technologies: ["HTML", "Javascript", "CSS"],
      link: "https://github.com/MarcioBuenoo/cloneSpotify"
    },
    {
      title: "wantedBooks",
      description: "Projeto pessoal - Site de backlog de livros, review e alerta de promoções",
      technologies: ["JavaScript", "HTML", "CSS", "PostgreSQL"],
      link: "https://github.com/MarcioBuenoo/wantedBooks"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;