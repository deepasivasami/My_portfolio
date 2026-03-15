
import React from "react";
import person from "../image/person.avif";

const statsData = [
  {
    number: "5+",
    label: "Projects",
  },
];

const iconData = [
  { icon: "fa-brands fa-github", 
    link: "https://github.com/deepasivasami"
   },
  { icon: "fa-brands fa-linkedin", 
    link: "https://www.linkedin.com/in/deepa-sivasami-058166315/"
   },
  // { icon: "fa-solid fa-message",
  //    link: "" 
  //   },
  { icon: "fa-brands fa-square-whatsapp", 
    link: "https://api.whatsapp.com/send/?phone=918524062659&text&type=phone_number&app_absent=0" 
  },
  { icon: "fa-brands fa-instagram", 
    link: "https://www.instagram.com/deepukutty2606/"
   },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-left">
          <h1>Hello, I'm</h1>
          <h2>Deepa S</h2>

          <p>
            I am a passionate MERN Stack Developer with hands-on experience in
            creating dynamic and scalable web applications. I work with
            frontend technologies like HTML, CSS, JavaScript, React and backend
            tools like Node.js, Express, MongoDB / MySQL.
          </p>

          {/* Stats using map */}
          <div className="stats">
            {statsData.map((item, index) => (
              <div key={index}>
                <h3>{item.number}</h3>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Icons using map */}
          <div className="icon">
            {iconData.map((item, index) => (
              <p key={index}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <i className={item.icon}></i>
                </a>
              </p>
            ))}
          </div>
        </div>

        <div className="hero-right">
         <img src={person} alt="profile" />
        </div>

      </div>
    </section>
  );
};

export default Hero;