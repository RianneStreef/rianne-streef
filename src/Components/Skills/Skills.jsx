import React from "react";
import "./Skills.css";

import "../../styles/global.css";

import gatby from "../../img/gatsby.png";
import contentful from "../../img/contentful.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <i className="fab fa-html5" />
        <i className="fab fa-css3-alt" />
        <i className="fab fa-js-square" />
        <i className="fab fa-react" />
        <i className="fab fa-github" />
        <i className="fab fa-apple" />
        <img src={gatby} alt="gatsby" />
        <img src={contentful} alt="gatsby" />
      </div>
    </div>
  );
}

export default Skills;
