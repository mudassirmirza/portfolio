import React from "react";
import "./projects.scss";
import spacestagram from "../assets/projects/spacestagram.jpg";
import oneforall from "../assets/projects/oneforall.jpg";
import compshop from "../assets/projects/compshop.jpg";
import moviesdb from "../assets/projects/moviesdb.jpg";

const Project = function (props) {
  return (
    <>
      <div className="project__card">
        <div className="project__card-info">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className="project__card-info__technology">
            {props.technologies.map((technology) => (
              <span>{technology}</span>
            ))}
          </div>
        </div>
        <div className="project__card-image">
          <img src={props.source} alt="" />
        </div>
      </div>
    </>
  );
};

const Projects = function () {
  return (
    <div className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__container-title">
          <h1>My Projects</h1>
        </div>
        <div className="projects__container-cards">
          <Project
            title={"Spacestagram"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac egestas in felis,              suspendisse consequat nascetur dictumst nulla. Nunc aliquet mauris praesent convallis commodo."
            }
            technologies={["React", "JavaScript", "SASS"]}
            source={spacestagram}
          />
          <Project
            title={"One for All"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac egestas in felis,              suspendisse consequat nascetur dictumst nulla. Nunc aliquet mauris praesent convallis commodo."
            }
            technologies={["Java", "Android Studio"]}
            source={oneforall}
          />
          <Project
            title={"CompShop"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac egestas in felis,              suspendisse consequat nascetur dictumst nulla. Nunc aliquet mauris praesent convallis commodo."
            }
            technologies={["JavaScript", "MongoDB", "Express.js", "Node.js"]}
            source={compshop}
          />
          <Project
            title={"MoviesDB"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac egestas in felis,              suspendisse consequat nascetur dictumst nulla. Nunc aliquet mauris praesent convallis commodo."
            }
            technologies={["SQLite"]}
            source={moviesdb}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
