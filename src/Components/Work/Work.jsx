import React from "react";
import "./Work.css";

import "../../styles/global.css";

import { content } from "../../content/languages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUtensils,
  faArrowRight,
  faChild,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

function Work(props) {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div id="work">
      <h3>{language.workTitle}</h3>
      <hr className="title-underline" />
      <h5>{language.workUnderTitle}</h5>

      <div className="work-container">
        <div className="work-item">
          <div className="project-title">
            <FontAwesomeIcon
              className="work-icon"
              icon={faUtensils}
              size="1x"
            />
            <h4 className="project-name">{language.sebGourmetTitle}</h4>
          </div>
          <p className="product-description">
            {language.sebGourmetDescription}{" "}
          </p>
          <a
            href="https://www.sebgourmet-traiteur.com"
            className="read-more"
            target="_blank"
            rel="noreferrer"
          >
            <h4>{language.readMore}</h4>
            <FontAwesomeIcon
              className="work-icon"
              icon={faArrowRight}
              size="1x"
            />{" "}
          </a>
        </div>

        <div className="work-item">
          <div className="project-title">
            <FontAwesomeIcon className="work-icon" icon={faChild} size="1x" />{" "}
            <h4 className="project-name">{language.coreMoveTitle}</h4>
          </div>
          <p className="product-description">{language.coreMoveDescription} </p>

          <a
            href="https://www.coremove.nl"
            className="read-more"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <h4>{language.readMore}</h4>
            <FontAwesomeIcon
              className="work-icon"
              icon={faArrowRight}
              size="1x"
            />{" "}
          </a>
        </div>
        <div className="work-item">
          <div className="project-title">
            <FontAwesomeIcon className="work-icon" icon={faCode} size="1x" />{" "}
            <h4 className="project-name">{language.VTSTitle}</h4>
          </div>
          <p className="product-description">{language.VTSDescription} </p>
          <div className="read-more">
            <h4>{language.comingSoon}</h4>
            {/* <FontAwesomeIcon
              className="work-icon"
              icon={faArrowRight}
              size="1.5x"
            />{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
