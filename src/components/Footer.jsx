import React from "react";
import "./footer.scss";
import logo from "../assets/footer_logo.svg";

const Footer = function () {
  return (
    <div className="footer">
      <div className="footer__container">
        <img src={logo} alt="" />
        <h1>Designed & Developed by Mudassir Mirza</h1>
      </div>
    </div>
  );
};

export default Footer;
