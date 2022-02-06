import * as React from "react";
import {
  Button,
  Window,
  WindowContent,
  WindowHeader,
  Select,
  themes,
  Fieldset,
} from "react95";
import { ThemeProvider } from "styled-components";
import scrollNext from "./scrollNext";

import projects from "../../data/other-projects.json";
import styles from "../../css/Window.css";

const openLink = (url, name = "_blank") => {
  window.open(url, name);
};

const ProjectLinks = () => (
  <ThemeProvider theme={themes.water}>
    <Window className={styles.windowSpacing}>
      <WindowHeader className={styles.windowHeader}>
        <span style={{ fontWeight: 400 }}>🔗 ProjectLinks.exe</span>
      </WindowHeader>

      <WindowContent>
        <Fieldset>
          <div className={styles.radioProcess}>
            Select a name to get redirected to the project page.
          </div>
        </Fieldset>
        <br />
        <Fieldset label="Direct link to all projects live.">
          <div className={styles.radioProcess}>
            <Select
              items={projects}
              onChange={(value) => openLink(value)}
              className={styles.projectUrl}
            />
            <br />
          </div>
        </Fieldset>
      </WindowContent>
      <div className={styles.buttonGroup}>
        <Button onClick={() => scrollNext("project", -150)}>
          <span>Back ⇑</span>
        </Button>
        <Button onClick={() => scrollNext("bio", -150)}>
          <span>Top ⇑⇑</span>
        </Button>
      </div>
    </Window>
  </ThemeProvider>
);

export default ProjectLinks;
