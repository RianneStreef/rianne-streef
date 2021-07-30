import React from "react";

import { useState } from "react";
import Home from "../Components/Home/Home";

import { Helmet } from "react-helmet";

function App() {
  let [language, setLanguage] = useState("english");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rianne Streef</title>
      </Helmet>

      <Home language={language} setLanguage={setLanguage} />
    </>
  );
}

export default App;
