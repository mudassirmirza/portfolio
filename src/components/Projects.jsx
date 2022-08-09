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
              "Instagram clone website to view the NASA Astronomy Picture of the day. Infinitely scroll through the archives from today to June 16, 1995. Zoom into pictures, watch videos, and read each explanation to learn more about astronomy."
            }
            technologies={["React", "JavaScript", "SASS"]}
            source={spacestagram}
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
              "A database that contains tables for movies, genres, actors, directors, and production companies. Populated the database with an idempotent SQL script. Wrote SQL queries to retrieve relevant information such as movies an actor stars in, movies directed by a specific director, and characters played by an actor."
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
