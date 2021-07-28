import React from "react";
import "./Skills.css";

import "../../styles/global.css";

import gatby from "../../img/gatsby.png";
import contentful from "../../img/contentful.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGithub,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import { content } from "../../content/languages";

function Skills(props) {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div id="skills">
      <h3>{language.skillsTitle}</h3>
      <hr className="title-underline" />
      <h5>{language.skillsUnderTitle}</h5>

      <div className="skills-icons">
        <FontAwesomeIcon className="skills-icon" icon={faHtml5} size="3x" />
        <FontAwesomeIcon className="skills-icon" icon={faCss3Alt} size="3x" />
        <FontAwesomeIcon className="skills-icon" icon={faJsSquare} size="3x" />
        <FontAwesomeIcon className="skills-icon" icon={faReact} size="3x" />
        <FontAwesomeIcon className="skills-icon" icon={faGithub} size="3x" />
        <FontAwesomeIcon className="skills-icon" icon={faApple} size="3x" />

        <img src={gatby} alt="gatsby" />
        <img src={contentful} alt="gatsby" />
      </div>
    </div>
  );
}

export default Skills;
