import React from "react";
import "./Copyright.css";

import "../../styles/global.css";

import { content } from "../../content/languages";

function Copyright(props) {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="copyright">
      <p>
        Copyright <i className="far fa-copyright" /> {language.copyright}
      </p>
    </div>
  );
}

export default Copyright;
