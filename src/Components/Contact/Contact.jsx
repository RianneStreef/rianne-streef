import React from "react";

import "../../styles/global.css";
import "./Contact.css";

import { content } from "../../content/languages";

function Contact(props) {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="contact">
      <h3>{language.contactTitle}</h3>
      <hr className="title-underline" />
      <h5>{language.contactUnderTitle}</h5>
      <form
        className="contact-form"
        name="contact"
        method="post"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="form-items">
          <label htmlFor="name">Name:</label> <br />
          <input className="input" type="text" id="name" name="name" required />
        </p>
        <p className="form-items">
          <label htmlFor="email">Email:</label> <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            required
          />
        </p>
        <p className="form-items">
          <label htmlFor="message">Message:</label> <br />
          <textarea id="message" name="message" required></textarea>
        </p>
        <div className="button-container">
          <button
            className="custom_button"
            type="submit"
            value="Submit message"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
