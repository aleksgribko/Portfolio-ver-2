import React from "react";
import NavPanel from "./components/NavPanel.js";
import FirstPage from "./components/FirstPage.js";
import Technologies from "./components/Technologies.js";
import Overlap from "./components/Overlap.js";
import AboutMe from "./components/AboutMe.js";
import ProjectsSector from "./components/ProjectsSector.js";

import "./sass/App.scss";

function App() {
  return (
    <div className="App" id="mainPagesFlow">
      <Overlap />
      <NavPanel />
      <FirstPage />
      <AboutMe />
      <Technologies />
      <ProjectsSector />
    </div>
  );
}

export default App;
