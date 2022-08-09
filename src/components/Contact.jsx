import React from "react";
import "./contact.scss";

import email from "../assets/contact/email.svg";
import github from "../assets/contact/github.svg";
import linkedin from "../assets/contact/linkedin.svg";
import send from "../assets/contact/send.svg";
const Contact = function () {
  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__container-title">
          <h1>Contact Me</h1>
        </div>

        <div className="contact__container-bg">
          <form
            className="contact__container-message"
            action="https://formspree.io/f/mzbwbpkl"
            method="POST"
          >
            <label for="full-name">Name</label>
            <input type="text" name="name" id="full-name" required />
            <label for="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" required />
            <label for="message">Message</label>
            <textarea name="message" id="message" required />
            <div className="contact__container-button">
              <button type="submit">
                Send Message
                <img src={send} alt="" />
              </button>
            </div>
          </form>
          <div className="contact__container-contact">
            <p>You can contact me through email:</p>
            <div className="email">
              <img src={email} alt="" />
              <a href="mailto:mudmirza@cmail.carleton.ca">mudmirza@cmail.carleton.ca</a>
            </div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/mudassir-mirza/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </a>
              <a href="https://github.com/mudassirmirza" rel="noopener noreferrer" target="_blank">
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
