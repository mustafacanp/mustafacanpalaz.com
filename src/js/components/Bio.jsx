import * as React from "react";
import { Button, Window, WindowContent, WindowHeader, GroupBox } from "react95";
import { ThemeProvider } from "styled-components";
import scrollTo from "../utils/scrollTo";

import water from "react95/dist/themes/water";

import styles from "../../css/Window.css";

const Bio = () => (
	<div className={styles.windowDivLayer}>
		<ThemeProvider theme={water}>
			<Window className={styles.windowSpacing}>
				<WindowHeader className={styles.windowHeader}>
					<span style={{ fontWeight: 400 }}>😎 Hello.exe</span>
				</WindowHeader>
				<WindowContent>
					<GroupBox>
						Hi, I'm{" "}
						<span className={styles.nameInline}>Mustafa Can Palaz.</span>
						<br />
						<br />
						<p className={styles.content}>
							I am a passionate developer who wants to be a part of the creation
							of the future. I never allow myself to be limited by the things I
							need to do and I am always trying to learn new technologies.
							<br />
							<br />I often look at the problems in my life like an algorithm. I
							enjoy solving these problems and making my life easier, hence I
							can literally define myself as a Full Stack Software Developer.
						</p>
					</GroupBox>
					<br />
					<br />
					<GroupBox label="Education & Certifications">
						<div className={styles.textProcess}>
							🎓 Bachelor of Science in Math & Computer Science
							<div className={styles.eduTextLong}>Sep, 2011 - Jun, 2016</div>
						</div>
						<hr />
						<div className={styles.textProcess}>
							🔗 Encode Club Solidity Bootcamp
							<div className={styles.eduTextLong}>Nov, 2021 - Jan, 2022</div>
						</div>
						<hr />
						<div className={styles.textProcess}>
							🤖 Encode Club AI and GPT Bootcamp
							<div className={styles.eduTextLong}>Nov, 2024 - Jan, 2025</div>
						</div>
					</GroupBox>
				</WindowContent>
				<div className={styles.buttonGroup}>
					<Button onClick={() => scrollTo("skills", 150)}>
						<span>Next ⇓</span>
					</Button>
				</div>
			</Window>
		</ThemeProvider>
	</div>
);

export default Bio;
