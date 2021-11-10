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
import scrollNext from "./scrollNext";

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
              💻 Experience.exe
            </WindowHeader>
            <WindowContent>
              <Tabs value={activeTab} onChange={this.handleChange}>
                {experiences.map((exp, index) => (
                  <Tab key={exp.shortName} value={index}>
                    {activeTab === index ? exp.name : exp.shortName}
                  </Tab>
                ))}
              </Tabs>
              <div>
                {experiences.map(
                  (exp, index) =>
                    activeTab === index && (
                      <TabBody key={exp.name}>
                        <Fieldset label={exp.title}>
                          {exp.startDate} -– {exp.endDate}
                          <ul className={styles.listText}>
                            {exp.responsibilities.map((resp) => (
                              <li key={resp} className={styles.itemText}>
                                {resp}
                              </li>
                            ))}
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
              <Button onClick={() => scrollNext("project", -150)}>
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
