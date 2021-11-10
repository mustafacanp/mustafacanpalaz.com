import * as React from "react";
import Header from "./components/Header.jsx";
import Bio from "./components/Bio.jsx";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import UrlList from "./components/UrlList.jsx";
import { Element } from "react-scroll";
import Skill from "./components/Skill.jsx";
import styles from "../css/App.css";

const App = () => (
  <div className={styles.mainDiv}>
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
        <Element name="project" className={styles.w750}>
          <Project />
        </Element>
      </div>

      <div className={styles.windowContainer}>
        <Element name="projectUrls">
          <UrlList />
        </Element>
      </div>
    </div>
  </div>
);

export default App;
