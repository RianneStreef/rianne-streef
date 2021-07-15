import React from "react";

import { useState } from "react";
import Home from "../Components/Home/Home";

function App() {
  let [language, setLanguage] = useState("english");
  return <Home language={language} setLanguage={setLanguage} />;
}

export default App;
