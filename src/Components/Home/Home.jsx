import React from "react";

import Navbar from "../Nav/Navbar";
import Title from "../Title/Title.jsx";
import About from "../About/About.jsx";
import Work from "../Work/Work.jsx";
import Skills from "../Skills/Skills.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import Copyright from "../Copyright/Copyright.jsx";

// import MailChimp from "../MailChimp/MailChimp";

import "../../styles/global.css";

function Home(props) {
  let { language, setLanguage } = props;
  return (
    <div>
      <div className="home">
        <Navbar language={language} setLanguage={setLanguage} />
        <Title language={language} />
      </div>
      <About language={language} />
      <Work language={language} />
      <Skills language={language} />
      <Contact language={language} />

      {/* <MailChimp /> */}

      <Footer language={language} />
      <Copyright language={language} />
    </div>
  );
}

export default Home;
