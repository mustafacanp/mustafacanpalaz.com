import * as React from "react";
import {
  Window,
  WindowContent,
  WindowHeader,
  Tab,
  Tabs,
  TabBody,
  Fieldset,
  themes,
  Button,
} from "react95";
import { ThemeProvider } from "styled-components";
import scrollNext from "../utils/scrollNext";

import experiences from "../../data/experience.json";
import styles from "../../css/Window.css";

class Experience extends React.Component {
  state = {
    activeTab: 0,
  };

  handleChange = (value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <ThemeProvider theme={themes.water}>
          <Window className={styles.windowSpacing}>
            <WindowHeader className={styles.windowHeader}>
              <span style={{ fontWeight: 400 }}>💻 Experience.exe</span>
            </WindowHeader>
            <WindowContent>
              <Tabs value={activeTab} onChange={this.handleChange}>
                {experiences.map((experience, index) => (
                  <Tab key={experience.shortName} value={index}>
                    {activeTab === index
                      ? experience.name
                      : experience.shortName}
                  </Tab>
                ))}
              </Tabs>
              <div>
                {experiences.map(
                  (experience, index) =>
                    activeTab === index && (
                      <TabBody key={experience.name}>
                        <Fieldset label={experience.title}>
                          {experience.startDate} -– {experience.endDate}
                          <ul className={styles.listText}>
                            {experience.responsibilities.map(
                              (responsibility) => (
                                <li
                                  key={responsibility}
                                  className={styles.itemText}
                                >
                                  {responsibility}
                                </li>
                              )
                            )}
                            <li className={styles.itemText}>
                              Technologies: {experience.techStack}
                            </li>
                          </ul>
                          <br />
                        </Fieldset>
                      </TabBody>
                    )
                )}
              </div>
            </WindowContent>
            <div className={styles.buttonGroup}>
              <Button onClick={() => scrollNext("skills", -150)}>
                <span>Back ⇑</span>
              </Button>
              <Button onClick={() => scrollNext("projects", -150)}>
                <span>Next ⇓</span>
              </Button>
            </div>
          </Window>
        </ThemeProvider>
      </div>
    );
  }
}

export default Experience;
