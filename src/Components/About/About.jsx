import React from "react";
import "./About.css";
import "../../styles/global.css";

import { content } from "../../content/languages";

function About(props) {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);

  return (
    <div className="about" id="about">
      <h3>{language.aboutMeTitle}</h3>
      <hr className="title-underline" />
      <h5 className="about-me">{language.aboutMeUnderTitle}</h5>

      <p>{language.aboutMe}</p>
    </div>
  );
}

export default About;
