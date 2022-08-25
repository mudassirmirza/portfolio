import React from "react";
import "./header.scss";
import picture from "../assets/photo.svg";
import resume from "../assets/Mudassir_Mirza_Resume.pdf";

const Header = function () {
  return (
    <div className="header" id="home">
      <div className="header__container">
        <div className="header__container-content">
          <h1 className="header__container-content_intro">Hi, I'm Mudassir.</h1>
          <p>I'm a software developer based in Mississauga.</p>
          <div className="header__container-content_buttons">
            <a href="#projects">
              <button className="btn__projects" type="button">
                My Projects
              </button>
            </a>
            <a href={resume} download>
              <button className="btn__resume" type="button">
                My Resume
              </button>
            </a>
          </div>
        </div>
        <img className="picture" src={picture} alt="" />
      </div>
    </div>
  );
};

export default Header;
