import * as React from "react";
import { styleReset } from "react95";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header.jsx";
import Bio from "./components/Bio.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import ProjectLinks from "./components/ProjectLinks.jsx";
import Skill from "./components/Skill.jsx";

import styles from "../css/App.css";

const ResetStyles = createGlobalStyle`
  ${styleReset}
`;

const App = () => (
	<div className={styles.mainDiv}>
		<ResetStyles />
		<Header />
		<div className={styles.mainContainer}>
			<div className={styles.windowContainer}>
				<div id="bio">
					<Bio />
				</div>
			</div>

			<div className={styles.windowContainer}>
				<div id="skills">
					<Skill />
				</div>
			</div>

			<div className={styles.windowContainer}>
				<div id="experience">
					<Experience />
				</div>
			</div>

			<div className={styles.windowContainer}>
				<div id="projects" className={styles.w750}>
					<Projects />
				</div>
			</div>

			<div className={styles.windowContainer}>
				<div id="projectUrls">
					<ProjectLinks />
				</div>
			</div>
		</div>
	</div>
);

export default App;
