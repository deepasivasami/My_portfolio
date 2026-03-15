import React from "react";
import "./Resume.css";

const experiences = [
  {
    date: "2019 - 2022",
    education: "Bachelor of Computer Applications",
    institution: "MIET Arts and Science College",
    location: "Trichy",
  },
  {
    date: "2018 - 2019",
    education: "Higher Secondary Certificate (HSC)",
    institution: "Government Special Higher Secondary School, Mathur",
    location: "Pudukkottai",
  },
  {
    date: "March 2017",
    education: "Secondary School Leaving Certificate (SSLC)",
    institution: "St. Philomena's Higher Secondary School",
    location: "Trichy",
  },
];

const Res = () => {
  return (
    <div className="timeline-section">
      <h2>My Education</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">{exp.date}</div>

            <div className="timeline-content">
              <h3>{exp.education}</h3>
              <p>{exp.institution}</p>
              <span>{exp.location}</span>
            </div>
          </div>
        ))}
      </div>


 <div className="resume-frame">
        <h2>My Resume</h2>

        <iframe
          src="https://www.canva.com/design/DAHCOXX6fOU/E8VdxF2w4sYBF3I4WG4-Rw/view?embed"
          title="My Resume"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Res;