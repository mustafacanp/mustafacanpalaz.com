import * as React from "react";
import {
  Window,
  WindowHeader,
  WindowContent,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableDataCell,
  TableHeadCell,
  themes,
  Button,
} from "react95";
import { ThemeProvider } from "styled-components";
import scrollNext from "./scrollNext";

import styles from "../../css/Window.css";

const fullStar = (
  <img
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgLjI4OGwyLjgzMyA4LjcxOGg5LjE2N2wtNy40MTcgNS4zODkgMi44MzMgOC43MTgtNy40MTYtNS4zODgtNy40MTcgNS4zODggMi44MzMtOC43MTgtNy40MTYtNS4zODloOS4xNjd6Ii8+PC9zdmc+"
    alt="fullStar"
  />
);
const emptyStar = (
  <img
    alt="emptyStar"
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgNS4xNzNsMi4zMzUgNC44MTcgNS4zMDUuNzMyLTMuODYxIDMuNzEuOTQyIDUuMjctNC43MjEtMi41MjQtNC43MjEgMi41MjUuOTQyLTUuMjctMy44NjEtMy43MSA1LjMwNS0uNzMzIDIuMzM1LTQuODE3em0wLTQuNTg2bC0zLjY2OCA3LjU2OC04LjMzMiAxLjE1MSA2LjA2NCA1LjgyOC0xLjQ4IDguMjc5IDcuNDE2LTMuOTY3IDcuNDE2IDMuOTY2LTEuNDgtOC4yNzkgNi4wNjQtNS44MjctOC4zMzItMS4xNS0zLjY2OC03LjU2OXoiLz48L3N2Zz4="
  />
);
const halfStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
  </svg>
);
const tech = [
  { name: "JavaScript ES6", level: 9 },
  { name: "Node.js", level: 8 },
  { name: "Vue.js", level: 8 },
  { name: "React.js", level: 7 },
  { name: "PHP Laravel", level: 8 },
];

const getStars = (level) => {
  switch (level) {
    case 9:
      return (
        <span>
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
          {halfStar}
        </span>
      );
    case 8:
      return (
        <span>
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
          {emptyStar}
        </span>
      );
    case 7:
      return (
        <span>
          {fullStar}
          {fullStar}
          {fullStar}
          {halfStar}
          {emptyStar}
        </span>
      );
    default:
      return (
        <span>
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
          {fullStar}
        </span>
      );
  }
};
const Skill = () => (
  <div className={styles.windowDivLayer}>
    <ThemeProvider theme={themes.water}>
      <Window className={styles.windowSpacing}>
        <WindowHeader className={styles.windowHeader}>
          ⚔️ Skills.exe
        </WindowHeader>
        <WindowContent className={styles.skills}>
          <Table className={styles.tableCenter}>
            <TableHead>
              <TableRow head>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Lvl.</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tech.map((item) => (
                <TableRow key={item.name}>
                  <TableDataCell className={styles.processCell}>
                    {item.name}
                  </TableDataCell>
                  <TableDataCell className={styles.processCell}>
                    {getStars(item.level)}
                  </TableDataCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </WindowContent>
        <div className={styles.buttonGroup}>
          <Button onClick={() => scrollNext("bio", -150)}>
            <span>Back ⇑</span>
          </Button>
          <Button onClick={() => scrollNext("experience", -150)}>
            <span>Next ⇓</span>
          </Button>
        </div>
      </Window>
    </ThemeProvider>
  </div>
);

export default Skill;
