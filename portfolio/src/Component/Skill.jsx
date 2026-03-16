import React from "react";
import "./skill.css";

const frontendSkills = [
  { name: "HTML", icon: "/html-5.png", progress: "100%" },
  { name: "CSS", icon: "/css-3.png", progress: "100%" },
  { name: "Bootstrap", icon: "/Boostrap.png", progress: "100%" },
  { name: "JavaScript", icon: "/js.png", progress: "100%" }
];

const backendSkills = [
  { name: "React js", icon: "/react.png", progress: "100%" },
  { name: "MongoDB", icon: "/mongo.png", progress: "100%"},
  { name: "Node js", icon: "/node.png", progress: "100%"},
  { name: "Express js", icon: "/express.png", progress:"100%"}
];

const Skill = () => {
  return (
    <>
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
                <div
                  className="progress"
                  style={{ "--progress-width": skill.progress }}
                ></div>
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
                <div
                  className="progress"
                  style={{ "--progress-width": skill.progress }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    

    </>
  );
};

export default Skill;