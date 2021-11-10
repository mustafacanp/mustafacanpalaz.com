import * as React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  themes,
  List,
  ListItem,
  Divider,
  Avatar,
} from "react95";
import { ThemeProvider } from "styled-components";
import scrollNext from "./scrollNext";

import ProfileImage from "../../images/me.png";
import styles from "../../css/HeadBar.css";

function Menu() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      {open && (
        <List
          horizontalAlign="left"
          verticalAlign="bottom"
          open={open}
          onClick={handleClose}
        >
          <ListItem onClick={() => scrollNext("bio", -150)}>
            👨‍💻 Profile
          </ListItem>
          <ListItem onClick={() => scrollNext("skills", -150)}>
            ⚔️ Skills
          </ListItem>
          <ListItem onClick={() => scrollNext("experience", -150)}>
            💼 Experience
          </ListItem>
          <ListItem onClick={() => scrollNext("project", -150)}>
            ⌨️ Projects
          </ListItem>
          <Divider />
          <ListItem onClick={() => scrollNext("projectUrls", -150)}>
            🔗 Project Links
          </ListItem>
        </List>
      )}
      <Button
        onClick={handleClick}
        active={open}
        className={styles.startButton}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAACXBIWXMAAAsSAAALEgHS3X78AAAQR0lEQVRYCQE8EMPvAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAP8AAAAAAP8AAAIAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA//8AAAAB/wAAAgAAAAAAAAAAAQD/AP8AAAAAAAAAAAAAAP8AAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAEAAAAAAAAAAP8AAP8AAAAAAQAAAP8AAAAB/wAAAAAAAAEAAAAAAAAAAAAA//8AAAAAAAABAAAA/wD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAQIAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAA/wAAAAAA/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAQD/AAAAAAD/AAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAAAAAAAAP8AAAD/AAAA/wAAAAAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAABAP//AAAAAAAAAAAAAAEBAAABAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAP8AAAABAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQL/AAD/AAAAAQAAAP8AAAAAAAAA/wAAAP8AAAAAAAAAAP8AAAD/AAAA/wAAAAAAAAAA/wAAAP8AAAAAAAAAAAAAAgEAAAH/AAD/AAAAAQAAAAAAAAABAAAAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAA/wEAAAH/AAD/AAAAAP8AAP//AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAgAA//8AAAABAAAA/wAAAAAAAAD/AAAA/wAAAAAAAAAAAAD/AAAA/wAAAP8AAAAAAP//AAD//wAAAAAAAAAAAAACAAABAQAA//8AAAABAAAAAAAAAAEAAAABAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAD/AAABAQAA//8AAAAAAAD//wAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAD/AAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAEAAAAA/wAA/wEAAAEAAAAAAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAD/AAAAAQAAAP8AAAAAAAAAAAAAAAEAAAD/AAAAAAAAAACAAAAAAAAAAH8AAAAAAAAAAQAAAAAAAAAA/wAAAAAAAACBAAAAAAAAAIAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAD/AAD/AQAAAQAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAP8AAAABAAAAAAAAAAAAAAD/AAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAQIAAAAAAAAA/wAAAAABAAABAAAAAP8AAP//AAD/AAAAAAAAAAH/AAD/AAAAAP8AAAD/AAD//wAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQAAAAAAAAD/AAAAAQEAAAEAAAAAAAAAAP8AAP8BAAABAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAACBAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAACAAAAAAAAAAH8AAAAAAAAAAAAAAAAAAAQAAAAAAAD//wAAAQEAAAABAAAAAAAAAP8AAAAAAAAAAQEAAAEAAAD/AAAAAQEAAAAAAAD/AAAAAAAAAAEAAAAAAAAAAAEAAAAAAIAAAAAAAAAAfwAAAAAAAAABAAAAAAD//wAAAAAAAIGBAAAAAAAAgAEAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAP//AAABAQAAAAAAAAAAAAAAAAAAAP8AAAABAAAAAAAAAP8AAAABAAAAAAAAAAAAAAD/AAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAQIAAAAAAAAA/wAAAAAAAAEBAAAAAAAA//8AAP//AAAAAAAAAAEAAP//AAAAAAAA/wAAAP//AAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQAAAAAAAAD/AAAAAQAAAQEAAAAAAAAAAAAA//8AAAEBAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEAAAAAAAAAgAAAAAAAAAAAAAAAAAABAQAAAAAAAICAAAAAAAAAf38AAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAD/AAAAAQAAAP8AAAAAAAAAAAAAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO4NtYBuc2+1AAAAAElFTkSuQmCC"
          className={styles.winLogo}
        />
        Start
      </Button>
    </div>
  );
}

const Header = () => (
  <div className={styles.headerBar}>
    <ThemeProvider theme={themes.water}>
      <AppBar>
        <Toolbar className={styles.toolBar}>
          <Menu />
          <Divider vertical size="lg" className={styles.verticalLine} />
          <div className={styles.headerButtonGroup}>
            <Button onClick={() => openLink("https://github.com/mustafacanp")}>
              <span className={styles.buttonText}>Github</span>
            </Button>
            {/* <Button onClick={() => openLink('https://mustafacanpalaz.com/resume.pdf')}><span className={styles.buttonText}>Resume</span></Button> */}
            <Button onClick={() => scrollNext("experience", -150)}>
              <span className={styles.buttonText}>Experience</span>
            </Button>
            <Button onClick={() => scrollNext("project", -150)}>
              <span className={styles.buttonText}>Projects</span>
            </Button>
            <Button
              onClick={() =>
                openLink("mailto:mustafacanpalaz@gmail.com?Subject=Hello")
              }
            >
              <span className={styles.buttonText}>Contact</span>
            </Button>
            <Button onClick={() => openLink("/cmd/", "_self")}>
              <span
                className={`${styles.buttonText} ${styles.commandLineButton}`}
              >
                <span className={styles.commandLineIcon}>💻</span> Command Line
              </span>
            </Button>
          </div>
          <Avatar
            onClick={() => openLink("https://mustafacanpalaz.com/me.png")}
            square
            className={styles.headerAvatar}
            src={ProfileImage}
          />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  </div>
);

export default Header;
