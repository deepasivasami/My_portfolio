import React, { useState } from "react";
import "./project.css";

const Project = () => {

  const [projects] = useState([
    {
      title: "Furniture Website",
      image: "/image/furnitur.png",
      description:
        "A modern furniture website that displays stylish furniture collections.",
      tech: ["HTML", "CSS"],
      live: "https://deepasivasami.github.io/furnituress/",
    },
    {
      title: "Dental Website",
      image: "/image/Dental.png",
      description:
        "A professional dental clinic website with services and appointment info.",
      tech: ["HTML", "CSS"],
      live: "https://deepasivasami.github.io/dental-project/",
    },
    {
      title: "Burger Website",
      image: "/image/feana.png",
      description:
        "A food ordering website showcasing burgers and menu items.",
      tech: ["HTML", "CSS", "Bootstrap"],
      live: "https://deepasivasami.github.io/burgerwebsite/",
    },
    {
      title: "Shoes Ecommerce",
      image: "/image/shoes.png",
      description:
        "An ecommerce website for shoes with JavaScript functionality.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://deepasivasami.github.io/Nilla-shoes-website/",
    },
    {
      title: "React Ecommerce",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      description:
        "A React ecommerce website using reusable components.",
      tech: ["React", "CSS"],
      live: "#",
    },
  ]);

  return (
    <section className="project-section" id="projects">
      <h1 className="project-title">My Projects</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <div className="project_img">
              <img src={project.image} alt={project.title} />
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="tech">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="links">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;


