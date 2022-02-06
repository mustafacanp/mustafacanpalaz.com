import * as React from "react";
import { reset } from "react95";
import { createGlobalStyle } from "styled-components";
import { Element } from "react-scroll";
import Header from "./components/Header.jsx";
import Bio from "./components/Bio.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import ProjectLinks from "./components/ProjectLinks.jsx";
import Skill from "./components/Skill.jsx";

import styles from "../css/App.css";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const App = () => (
  <div className={styles.mainDiv}>
    <ResetStyles />
    <Header />
    <div className={styles.mainContainer}>
      <div className={styles.windowContainer}>
        <Element name="bio">
          <Bio />
        </Element>
      </div>

      <div className={styles.windowContainer}>
        <Element name="skills">
          <Skill />
        </Element>
      </div>

      <div className={styles.windowContainer}>
        <Element name="experience">
          <Experience />
        </Element>
      </div>

      <div className={styles.windowContainer}>
        <Element name="projects" className={styles.w750}>
          <Projects />
        </Element>
      </div>

      <div className={styles.windowContainer}>
        <Element name="projectUrls">
          <ProjectLinks />
        </Element>
      </div>
    </div>
  </div>
);

export default App;
