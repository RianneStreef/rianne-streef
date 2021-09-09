import addToMailchimp from "gatsby-plugin-mailchimp";
import React, { useState } from "react";

function MailChimp() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function errorHandling(data) {
    // your error handling
  }

  const handleSubmit = () => {
    addToMailchimp(email).then((data) => {
      if (data.result === "error") {
        errorHandling(data);
      } else {
        setSubmitted(true);
      }
    });
  };

  return (
    <>
      {submitted ? (
        <form>
          <div>
            <h2>Successfully subscribed!</h2>
            <p>Thank your for your interest in my content.</p>
          </div>
        </form>
      ) : (
        <form>
          <div>
            <p>
              Do you want to know when I post something new? <br />
              Then subscribe to my newsletter.
            </p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="mail"
              label="email-input"
              placeholder="Your e-mail address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              aria-label="Subscribe"
              onClick={() => handleSubmit()}
            >
              "Subscribe"
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default MailChimp;
