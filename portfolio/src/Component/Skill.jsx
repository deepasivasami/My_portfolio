
import React from "react";
import "./skill.css";

const frontendSkills = [
  { name: "HTML",
     icon: "/html-5.png", 
     class: "html" 
    },
  { name: "CSS", 
    icon: "/css-3.png", 
    class: "css" 
  },
  { name: "Bootstrap", 
    icon: "/Boostrap.png",
     class: "bootstrap" 
    },
  { name: "JavaScript", 
    icon: "/js.png", 
    class: "js" 
  }
];

const backendSkills = [
  { 
    name: "React.js",
     icon: "/react.png", 
     class: "react"
     },
  { 
    name: "MongoDB", 
    icon: "/mongo.png",
     class: "mongodb"
     },
  { 
    name: "Node.js", 
    icon: "/node.png",
     class: "node" 
    },
  { 
    name: "JQury",
     icon: "/mysql.png",
      class: "mysql"
     }
];

const Skill = () => {
  return (
    <section className="skills" id="skills">
      <h1 className="heading">
        My <span>Skills</span>
      </h1>

      <div className="skills-container">

        {/* Frontend */}
        <div className="tool-box">
          <h2>Frontend Tools</h2>

          {frontendSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <p>
                {skill.name}
                <span>
                  <img src={skill.icon} alt={skill.name} />
                </span>
              </p>

              <div className="progress-bar">
                <div className={`progress ${skill.class}`}></div>
              </div>
            </div>
          ))}

        </div>

        {/* Backend */}
        <div className="tool-box">
          <h2>Backend Tools</h2>

          {backendSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <p>
                {skill.name}
                <span>
                  <img src={skill.icon} alt={skill.name} />
                </span>
              </p>

              <div className="progress-bar">
                <div className={`progress ${skill.class}`}></div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skill;