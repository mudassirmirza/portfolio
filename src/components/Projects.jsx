import React from "react";
import "./projects.scss";
import spacestagram from "../assets/projects/spacestagram.jpg";
import oneforall from "../assets/projects/oneforall.jpg";
import compshop from "../assets/projects/compshop.jpg";
import moviesdb from "../assets/projects/moviesdb.jpg";
import { AiOutlineLink } from "react-icons/ai/";
import { FiGithub } from "react-icons/fi/";

const Project = function (props) {
  return (
    <>
      <div className="project__card">
        <div className="project__card-info">
          <div className="project__card-title">
            <h2>{props.title}</h2>
            {props.hasLink && (
              <div className="project__card-links">
                <a href={props.link} target="_blank" rel="noreferrer noopener">
                  <AiOutlineLink className="project__link" color="black" size={"1.5em"} />
                </a>
                <a href={props.gitHub} target="_blank" rel="noreferrer noopener">
                  <FiGithub className="project__github" color="black" size={"1.5em"} />
                </a>
              </div>
            )}
          </div>

          <p>{props.description}</p>
          <div className="project__card-info__technology">
            {props.technologies.map((technology) => (
              <span>{technology}</span>
            ))}
          </div>
        </div>
        <img src={props.source} alt="" />
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
              "Instagram clone website to view the NASA Astronomy Picture of the day. Zoom into pictures, watch videos, and read each explanation to learn more about astronomy."
            }
            technologies={["React", "JavaScript", "SASS"]}
            source={spacestagram}
            hasLink={true}
            link={"https://mudassirmirza.github.io/Spacestagram/"}
            gitHub={"https://github.com/mudassirmirza/Spacestagram"}
          />
          <Project
            title={"One for All"}
            description={
              "A mobile app that combines the catalogue of popular subscription streaming services such as Netflix, Amazon Prime Video, and Spotify. "
            }
            technologies={["Java", "Android Studio"]}
            source={oneforall}
          />
          <Project
            title={"CompShop"}
            description={
              "PC gaming eCommerce web application to log in, add PC parts to cart, and check out. Uses the PayPal REST API to authenticate the user and use the PayPal checkout method."
            }
            technologies={["JavaScript", "MongoDB", "Express.js", "Node.js"]}
            source={compshop}
          />
          <Project
            title={"MoviesDB"}
            description={
              "A database that contains tables for movies, genres, actors, directors, and production companies. Wrote SQL queries to retrieve relevant information such as movies an actor stars in, movies directed by a specific director, and characters played by an actor."
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
