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
  ListItem,
  Divider,
  List,
} from "react95";
import { ThemeProvider } from "styled-components";
import scrollNext from "../utils/scrollNext";

import projects from "../../data/projects.json";
import styles from "../../css/Window.css";

class Project extends React.Component {
  state = {
    activeTab: 1,
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
              <span style={{ fontWeight: 400 }}>🤩 Projects.exe</span>
            </WindowHeader>
            <WindowContent>
              <Tabs value={activeTab} onChange={this.handleChange}>
                {projects.map((project, i) => (
                  <Tab value={i + 1}>{project.name}</Tab>
                ))}
              </Tabs>
              <div>
                {projects.map((project) => {
                  if (activeTab === project.id)
                    return (
                      <TabBody>
                        <Fieldset>
                          <ul className={styles.listText}>
                            {project.items.map((item) => (
                              <li className={styles.itemText}>{item}</li>
                            ))}
                          </ul>
                          <List
                            inline={true}
                            horizontalAlign="left"
                            verticalAlign="bottom"
                            open={true}
                          >
                            <ListItem
                              as="a"
                              href={project.demoLink}
                              target="_blank"
                            >
                              💻 Check it out!
                            </ListItem>
                            {project.githubLink && (
                              <>
                                <Divider />
                                <ListItem
                                  as="a"
                                  href={project.githubLink}
                                  target="_blank"
                                >
                                  📁 Github!
                                </ListItem>
                              </>
                            )}
                          </List>
                        </Fieldset>
                      </TabBody>
                    );
                })}
              </div>
            </WindowContent>
            <div className={styles.buttonGroup}>
              <Button onClick={() => scrollNext("experience", -150)}>
                <span>Back ⇑</span>
              </Button>
              <Button onClick={() => scrollNext("projectUrls")}>
                <span>Next ⇓</span>
              </Button>
            </div>
          </Window>
        </ThemeProvider>
      </div>
    );
  }
}

export default Project;
