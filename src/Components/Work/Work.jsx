import React from "react";
import "./Work.css";

import "../../styles/global.css";

import { content } from "../../content/languages";

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
            <i class="fas fa-utensils"></i>
            <h4 className="project-name">{language.sebGourmetTitle}</h4>
          </div>
          <p className="product-description">
            {language.sebGourmetDescription}{" "}
          </p>
          <div className="read-more">
            <h4>{language.readMore}</h4>
            <i class="fas fa-arrow-right" />{" "}
          </div>
        </div>

        <div className="work-item">
          <div className="project-title">
            <i class="fas fa-child"></i>
            <h4 className="project-name">{language.coreMoveTitle}</h4>
          </div>
          <p className="product-description">{language.coreMoveDescription} </p>
          <div className="read-more">
            <h4>{language.readMore}</h4>
            <i class="fas fa-arrow-right" />{" "}
          </div>
        </div>
        <div className="work-item">
          <div className="project-title">
            <i class="fas fa-code"></i>
            <h4 className="project-name">{language.VTSTitle}</h4>
          </div>
          <p className="product-description">{language.VTSDescription} </p>
          <div className="read-more">
            <h4>{language.comingSoon}</h4>
            {/* <i class="fas fa-arrow-right" />{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
