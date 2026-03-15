import React from "react";
import "./project.css";

const projectData = [
  {
    title: "Furniture Website",
    image: "/image/furnitur.png",
    description:
      "A modern furniture website that displays stylish furniture collections with a clean layout and responsive design for better user experience.",
    tech: ["HTML", "CSS"],
    live: "https://deepasivasami.github.io/furnituress/",
  },
  {
    title: "Dental Website",
    image: "/image/Dental.png",
    description:
      "A professional dental clinic website that provides information about dental services, doctors, and appointment details with a clean and simple UI.",
    tech: ["HTML", "CSS"],
    live: "https://deepasivasami.github.io/dental-project/",
  },
  {
    title: "Burger Website",
    image: "/image/feana.png",
    description:
      "A food ordering website that showcases delicious burgers, menu items, and offers with an attractive design for restaurant promotion.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://deepasivasami.github.io/burgerwebsite/",
  },
  {
    title: "Shoes Ecommerce",
    image: "/image/shoes.png",
    description:
      "An ecommerce website for shoes that displays products, prices, and a simple shopping interface using JavaScript functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://deepasivasami.github.io/Nilla-shoes-website/",
  },
  {
    title: "React Ecommerce",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c",
    description:
      "A React based ecommerce website built using reusable components to display products dynamically with modern UI design.",
    tech: ["React", "CSS"],
    live: "#",
  },
];


const Project = () => {
  return (
    <section className="project-section" id="projects">
      <h1 className="project-title">My Projects</h1>

      <div className="projects-container">
        {projectData.map((project, index) => (
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





