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

import styles from "../../css/Window.css";

const items = [
  {
    value: "https://purry.io",
    label: "😸 Purry - Blockchain Based Social Media Platform",
  },
  {
    value: "https://opensea.io/collection/archis-academy-events-nft",
    label: "📜 Certification with NFT",
  },
  {
    value: "https://mustafacanpalaz.com/cmd",
    label: "💻 React Terminal",
  },
  {
    value: "https://app.risksoft.com.tr/login",
    label: "👷‍♂️ Risksoft Safety Management Software",
  },
  {
    value: "https://secilenler.com.tr/panel/login",
    label: "👩‍🏫 E-Learning System",
  },
  {
    value: "https://thedollarrises.netlify.app",
    label: "💵 The Dollar Rises",
  },
  {
    value: "https://rpgtextgame.netlify.app",
    label: "🎮👾 Text Game",
  },
  {
    value: "https://randomcolor2.netlify.app",
    label: "🎨 Random Color",
  },
  {
    value:
      "https://mustafacanpalaz.com/isItWetAPI/?coordinates=29.9773,31.1325",
    label: "💧 Is It Wet?",
  },
  {
    value: "https://www.spoileral.com",
    label: "🎬 Spoiler Al",
  },
];

const openLink = (url, name = "_blank") => {
  window.open(url, name);
};

const UrlList = () => (
  <div>
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
                items={items}
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
  </div>
);

export default UrlList;
