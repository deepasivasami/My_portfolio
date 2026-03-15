import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import person from "../image/person.avif";

const aboutData = [
  {
    title: "Full Stack Developer",
    description:
      "I am a passionate MERN Stack Developer with hands-on experience in creating dynamic and scalable web applications. I work with frontend technologies like HTML, CSS, JavaScript, React and backend tools like Node.js, Express, MongoDB / MySQL.",
  }
];

const Abouts = () => {
  return (
    <div className="abouts" id="about">
      <div className="container">

        <div className="about_img">
          <img src={person} alt="profile" />
        </div>

        <div className="about_text">
          <h1>About <span>Me</span></h1>

          {aboutData.map((item, index) => (
            <div key={index} className="about_card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}



<Link to="/project" className="btn_box">
  View Project
</Link>
        </div>

      </div>
    </div>
  );
};

export default Abouts;