import React from "react";

import { content } from "../../content/languages";

import "./Footer.css";
import "../../styles/global.css";

function Footer(props) {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="footer-outer">
      <div className="footer-inner">
        <div className="footer-element">
          <h4>{language.footerContact}</h4>
          <hr className="title-underline-footer" />
          <p>rianne@riannestreef.com</p>
        </div>

        <div className="footer-element">
          <h4>{language.footerLocation}</h4>
          <hr className="title-underline-footer" />
          <p>Val Thorens, France</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
