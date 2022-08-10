import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.svg";
import "./navbar.scss";

const Menu = function () {
  return (
    <>
      <p>
        <a className="navbar__links-effect" href="#skills">
          Skills
        </a>
      </p>
      <p>
        <a className="navbar__links-effect" href="#projects">
          Projects
        </a>
      </p>
      <p>
        <a className="navbar__links-effect" href="#contact">
          Contact
        </a>
      </p>
    </>
  );
};

const Navbar = function () {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__links">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
        <div className="navbar__links-container">
          <Menu />
        </div>

        {
          <div className="navbar__menu">
            {menuToggle ? (
              <RiCloseLine color="#000" size={"2rem"} onClick={() => setMenuToggle(false)} />
            ) : (
              <RiMenu3Line color="#000" size={"2rem"} onClick={() => setMenuToggle(true)} />
            )}
            {menuToggle && (
              <div className="navbar__menu-container scale-up-center">
                <div className="navbar__menu-container_links">
                  <Menu />
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
