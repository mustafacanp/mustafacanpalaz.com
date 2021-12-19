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
import scrollNext from "./scrollNext";

import styles from "../../css/Window.css";

class Project extends React.Component {
  state = {
    activeTab: 0,
    tabTitles: [
      "ReactTerminal",
      "TextGame",
      "RandomColor",
      "IsItWet",
      "SpoilerAl",
      "TheDollarRises",
    ],
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
              <span style={{ fontWeight: 400 }}>🤩 PersonalProjects.exe</span>
            </WindowHeader>
            <WindowContent>
              <Tabs value={activeTab} onChange={this.handleChange}>
                <Tab value={0}>{this.state.tabTitles[0]}</Tab>
                <Tab value={1}>{this.state.tabTitles[1]}</Tab>
                <Tab value={2}>{this.state.tabTitles[2]}</Tab>
                <Tab value={3}>{this.state.tabTitles[3]}</Tab>
                <Tab value={4}>{this.state.tabTitles[4]}</Tab>
                <Tab value={5}>{this.state.tabTitles[5]}</Tab>
              </Tabs>
              <div>
                {activeTab === 0 && (
                  <TabBody>
                    <Fieldset>
                      <ul className={styles.listText}>
                        <li className={styles.itemText}>
                          Linux Ubuntu style terminal with React.JS
                        </li>
                        <li className={styles.itemText}>
                          Technology: JavaScript, React.JS
                        </li>
                        <li className={styles.itemText}>
                          Touch devices friendly!
                        </li>
                      </ul>
                      <List
                        inline={true}
                        horizontalAlign="left"
                        verticalAlign="bottom"
                        open={true}
                      >
                        <ListItem
                          as="a"
                          href="https://mustafacanpalaz.com/cmd"
                          target="_blank"
                        >
                          💻 Check it out!
                        </ListItem>
                        <Divider />
                        <ListItem
                          as="a"
                          href="https://github.com/mustafacanp/ReactTerminal"
                          target="_blank"
                        >
                          📁 Github!
                        </ListItem>
                      </List>
                    </Fieldset>
                  </TabBody>
                )}
                {activeTab === 1 && (
                  <TabBody>
                    <Fieldset>
                      <ul className={styles.listText}>
                        <li className={styles.itemText}>
                          Text based role playing game.
                        </li>
                        <li className={styles.itemText}>
                          Technology: JavaScript, Jquery (Working on rewrite
                          with React.JS)
                        </li>
                        <li className={styles.itemText}>
                          Available only for desktop
                        </li>
                      </ul>
                      <List
                        inline={true}
                        horizontalAlign="left"
                        verticalAlign="bottom"
                        open={true}
                      >
                        <ListItem
                          as="a"
                          href="https://textgamerpg.com"
                          target="_blank"
                        >
                          🎮👾 Check it out!
                        </ListItem>
                        <Divider />
                        <ListItem
                          as="a"
                          href="https://github.com/mustafacanp/TextGame"
                          target="_blank"
                        >
                          📁 Github!
                        </ListItem>
                      </List>
                    </Fieldset>
                  </TabBody>
                )}
                {activeTab === 2 && (
                  <TabBody>
                    <Fieldset>
                      <ul className={styles.listText}>
                        <li className={styles.itemText}>
                          Turn off the lights and press space!
                        </li>
                        <li className={styles.itemText}>
                          Technology: JavaScript, Jquery (Will rewrite with
                          React.JS or Vue.JS)
                        </li>
                        <li className={styles.itemText}>
                          Touch devices friendly!
                        </li>
                      </ul>
                      <List
                        inline={true}
                        horizontalAlign="left"
                        verticalAlign="bottom"
                        open={true}
                      >
                        <ListItem
                          as="a"
                          href="https://mustafacanpalaz.com/randomColor"
                          target="_blank"
                        >
                          🎨 Check it out!
                        </ListItem>
                        <Divider />
                        <ListItem
                          as="a"
                          href="https://github.com/mustafacanp/RandomColor"
                          target="_blank"
                        >
                          📁 Github!
                        </ListItem>
                      </List>
                    </Fieldset>
                  </TabBody>
                )}
                {activeTab === 3 && (
                  <TabBody>
                    <Fieldset>
                      <ul className={styles.listText}>
                        <li className={styles.itemText}>
                          An API for determine if it's on the water according to
                          a point's coordinates.
                        </li>
                        <li className={styles.itemText}>
                          Technology: PHP(Curl), Google Maps
                        </li>
                        <li className={styles.itemText}>API</li>
                      </ul>
                      <List
                        inline={true}
                        horizontalAlign="left"
                        verticalAlign="bottom"
                        open={true}
                      >
                        <ListItem
                          as="a"
                          href="https://mustafacanpalaz.com/isItWetAPI/?coordinates=29.9773,31.1325"
                          target="_blank"
                        >
                          💧 Check it out!
                        </ListItem>
                        <Divider />
                        <ListItem
                          as="a"
                          href="https://github.com/mustafacanp/isItWet"
                          target="_blank"
                        >
                          📁 Github!
                        </ListItem>
                      </List>
                    </Fieldset>
                  </TabBody>
                )}
                {activeTab === 4 && (
                  <TabBody>
                    <Fieldset>
                      <ul className={styles.listText}>
                        <li className={styles.itemText}>
                          IMSDB (Internet Movie Spoiler Database)
                        </li>
                        <li className={styles.itemText}>
                          Technology: PHP(Laravel), JavaScript(Jquery)
                        </li>
                        <li className={styles.itemText}>
                          Touch devices friendly!
                        </li>
                      </ul>
                      <List
                        inline={true}
                        horizontalAlign="left"
                        verticalAlign="bottom"
                        open={true}
                      >
                        <ListItem
                          as="a"
                          href="https://www.spoileral.com"
                          target="_blank"
                        >
                          🎬 Check it out!
                        </ListItem>
                      </List>
                    </Fieldset>
                  </TabBody>
                )}
                {activeTab === 5 && (
                  <TabBody>
                    <Fieldset>
                      <ul className={styles.listText}>
                        <li className={styles.itemText}>
                          pixi.js based Browser Game
                        </li>
                        <li className={styles.itemText}>
                          Technology: JavaScript, pixi.js
                        </li>
                        <li className={styles.itemText}>
                          Available only for desktop
                        </li>
                      </ul>
                      <List
                        inline={true}
                        horizontalAlign="left"
                        verticalAlign="bottom"
                        open={true}
                      >
                        <ListItem
                          as="a"
                          href="https://mustafacanpalaz.com/theDollarRises"
                          target="_blank"
                        >
                          💵 Check it out!
                        </ListItem>
                        <Divider />
                        <ListItem
                          as="a"
                          href="https://mustafacanpalaz.com/theDollarRises"
                          target="_blank"
                        >
                          📁 Github!
                        </ListItem>
                      </List>
                    </Fieldset>
                  </TabBody>
                )}
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
