import React from "react";
import "./Title.css";
import { content } from "../../content/languages";

import "../../styles/global.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Title(props) {
  let { language } = props;
  language === "english"
    ? (language = content.english)
    : (language = content.french);

  return (
    <div className="title">
      <div className="center-mobile">
        <div className="heading-title">
          <h1>Rianne Streef</h1>
          <hr className="main-title-underline" />
          <h2>{language.underTitle}</h2>
        </div>
        <div className="email-button-container">
          <button className="button">
            <a className="mailto" href="mailto:rianne@riannestreef.com">
              {language.emailMe}
            </a>
          </button>
        </div>
      </div>
      <div className="bottom-contact">
        <div className="contact-icons">
          {/* <a
            className="contact-link"
            href="https://www.linkedin.com/in/rianne-streef-13a537201/"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="title-icon"
              size="3x"
            />
            <p>LinkedIn</p>
          </a> */}
          <a
            className="contact-link"
            href="https://www.github.com/RianneStreef"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} className="title-icon" size="3x" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Title;
