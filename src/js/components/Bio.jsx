import * as React from "react";
import {
  Button,
  Checkbox,
  Window,
  WindowContent,
  WindowHeader,
  Fieldset,
  reset,
  themes,
} from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { scroller } from "react-scroll";
import styles from "../../css/Window.css";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export const scrollNext = (elementName, offsetNum) => {
  scroller.scrollTo(elementName, {
    duration: 3000,
    smooth: "easeInOutQuint",
    offset: offsetNum ? offsetNum : null,
  });
};

export const openLink = (url, name = "_blank") => {
  window.open(url, name);
};

const Bio = () => (
  <div className={styles.windowDivLayer}>
    <ResetStyles />
    <ThemeProvider theme={themes.water}>
      <Window className={styles.windowSpacing}>
        <WindowHeader className={styles.windowHeader}>
          😎 Hello.exe
        </WindowHeader>
        <WindowContent>
          <Fieldset>
            Hi, I'm{" "}
            <span className={styles.nameInline}>Mustafa Can Palaz.</span>
            <br />
            <br />
            I am a passionate developer who wants to be a part of the creation
            of the future. I never allow myself to be limited by the things I
            need to do and I am always trying to learn new technologies.
            <br />
            <br />I often look at the problems in my life like an algorithm. I
            enjoy solving these problems and making my life easier, hence I can
            literally define myself as a Full Stack Software Developer.
          </Fieldset>
          <br />
          <Fieldset label="Education">
            <div className={styles.radioProcess}>
              <Checkbox
                checked={true}
                onChange={() => null}
                value="OGU"
                label="TR Eskişehir Osmangazi University"
                name="school"
              />
              <div className={styles.textProcess}>
                <div className={styles.eduTextLong}>
                  Bachelor of Science in Math & Computer Science
                </div>
                <div className={styles.eduTextLong}>Sep, 2011 -- Jun, 2016</div>
              </div>
              <br />
            </div>
          </Fieldset>
        </WindowContent>
        <div className={styles.buttonGroup}>
          <Button onClick={() => scrollNext("skills", -150)}>
            <span>Next ⇓</span>
          </Button>
        </div>
      </Window>
    </ThemeProvider>
  </div>
);

export default Bio;
