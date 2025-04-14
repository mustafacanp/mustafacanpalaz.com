import * as React from "react";
import { Window, WindowHeader, WindowContent, TreeView, Button } from "react95";
import { ThemeProvider } from "styled-components";
import scrollTo from "../utils/scrollTo";

import water from "react95/dist/themes/water";

import skills from "../../data/skills.json";
import styles from "../../css/Window.css";

const Skill = () => (
	<div className={styles.windowDivLayer}>
		<ThemeProvider theme={water}>
			<Window className={styles.windowSpacing}>
				<WindowHeader className={styles.windowHeader}>
					<span style={{ fontWeight: 400 }}>⚔️ Skills.exe</span>
				</WindowHeader>
				<WindowContent className={styles.skills}>
					<TreeView tree={skills} defaultExpanded={["frontend", "backend"]} />
				</WindowContent>
				<div className={styles.buttonGroup}>
					<Button onClick={() => scrollTo("bio", 100)}>
						<span>Back ⇑</span>
					</Button>
					<Button onClick={() => scrollTo("experience", 150)}>
						<span>Next ⇓</span>
					</Button>
				</div>
			</Window>
		</ThemeProvider>
	</div>
);

export default Skill;
