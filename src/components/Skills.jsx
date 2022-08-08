import React from "react";
import "./skills.scss";
import html from "../assets/skills/HTML.svg";
import css from "../assets/skills/CSS.svg";
import js from "../assets/skills/JS.svg";
import sass from "../assets/skills/SASS.svg";
import figma from "../assets/skills/Figma.svg";
import react from "../assets/skills/React.svg";
import git from "../assets/skills/Git.svg";
import mongo from "../assets/skills/MongoDB.svg";
import mysql from "../assets/skills/MySQL.svg";
import sqlite from "../assets/skills/SQLite.svg";
import android from "../assets/skills/Android Studio.svg";
import python from "../assets/skills/Python.svg";
import bash from "../assets/skills/Bash.svg";
import java from "../assets/skills/Java.svg";

const Skill = function (props) {
  return (
    <>
      <div>
        <img src={props.source} alt="" />
        <span>{props.name}</span>
      </div>
    </>
  );
};

const Skills = function () {
  const imageSrc = [
    html,
    css,
    js,
    sass,
    figma,
    react,
    git,
    mongo,
    mysql,
    sqlite,
    android,
    python,
    bash,
    java,
  ];
  const imageName = [
    `HTML`,
    `CSS`,
    `JavaScript`,
    `SASS`,
    `Figma`,
    `React`,
    `Git`,
    `MongoDB`,
    `MySQL`,
    `SQLite`,
    `Android Studio`,
    `Python`,
    `Bash`,
    `Java`,
  ];

  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__container-title">
          <h1>My Skills</h1>
        </div>
        <div className="skills__container-images">
          {imageSrc.map((s, index) => (
            <Skill source={s} name={imageName[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
