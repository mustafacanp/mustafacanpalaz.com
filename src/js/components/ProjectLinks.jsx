import * as React from "react";
import {
	Button,
	Window,
	WindowContent,
	WindowHeader,
	Select,
	GroupBox,
} from "react95";
import { ThemeProvider } from "styled-components";
import scrollTo from "../utils/scrollTo";

import water from "react95/dist/themes/water";

import projects from "../../data/other-projects.json";
import styles from "../../css/Window.css";

const openLink = (url, name = "_blank") => {
	if (url) window.open(url, name);
};

const ProjectLinks = () => (
	<ThemeProvider theme={water}>
		<Window className={styles.windowSpacing}>
			<WindowHeader className={styles.windowHeader}>
				<span style={{ fontWeight: 400 }}>🔗 ProjectLinks.exe</span>
			</WindowHeader>

			<WindowContent>
				<GroupBox>
					<div className={styles.radioProcess}>
						Select a name to get redirected to the project page.
					</div>
				</GroupBox>
				<br />
				<GroupBox label="Direct link to all projects live">
					<div className={styles.radioProcess}>
						<Select
							options={projects}
							onChange={(link) => openLink(link.value)}
							className={styles.projectUrl}
						/>
						<br />
					</div>
				</GroupBox>
			</WindowContent>
			<div className={styles.buttonGroup}>
				<Button onClick={() => scrollTo("projects", 150)}>
					<span>Back ⇑</span>
				</Button>
				<Button onClick={() => scrollTo("bio", 100)}>
					<span>Top ⇑⇑</span>
				</Button>
			</div>
		</Window>
	</ThemeProvider>
);

export default ProjectLinks;
