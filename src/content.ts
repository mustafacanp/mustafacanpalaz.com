// All site copy lives here. Everything is written to be public-safe:
// no ticket or PR IDs, internal codenames, customer names or security details.

export const profile = {
  name: "Mustafa Can Palaz",
  title: "Full Stack Software Engineer",
  email: "mustafacanpalaz@gmail.com",
  github: "https://github.com/mustafacanp",
  cmd: "https://terminal.mustafacanpalaz.com",
  // Previous version of this site, built with React95.
  retro: "https://retro.mustafacanpalaz.com",
};

export const about = {
  greeting: "Hi, I'm Mustafa Can Palaz.",
  paragraphs: [
    "I'm a full stack software engineer with over ten years of experience building web products. For the last six I've been at Wolfram Research, working on Wolfram Cloud across React and TypeScript front ends, Java/Spring services and the Wolfram Language layer in between.",
    "I like owning a feature from the database to the UI, and I care about the less visible work too: code review, migrations and keeping a large front end on modern tooling. Outside work I learn by building, from Solidity contracts and dApps to, most recently, LLMs.",
  ],
  education: [
    { type: "Degree", label: "B.Sc. in Math & Computer Science", date: "Sep 2011 - Jun 2016" },
    { type: "Bootcamp", label: "Encode Club Solidity Bootcamp", date: "Nov 2021 - Jan 2022" },
    { type: "Bootcamp", label: "Encode Club AI and GPT Bootcamp", date: "Nov 2024 - Jan 2025" },
  ],
};

export const skills = [
  {
    name: "Frontend",
    items: ["React", "TypeScript", "MobX", "Vue.js", "HTML & CSS / SCSS", "Webpack, Vite, Babel, SWC"],
  },
  {
    name: "Backend",
    items: [
      "Java (Spring, Hibernate)",
      "Node.js (Express)",
      "Python (Flask)",
      "PHP (Laravel)",
      "Wolfram Language",
      "REST APIs",
      "OAuth & auth flows",
    ],
  },
  {
    name: "Databases & DevOps",
    items: ["SQL (MySQL, PostgreSQL)", "Flyway migrations", "Redis", "Docker", "Nginx", "CI/CD"],
  },
  {
    name: "AI",
    items: [
      "LLM apps (Vercel AI SDK, OpenAI, Mistral, xAI)",
      "Streaming chat & context management",
      "Prompt engineering",
      "Voice cloning & TTS (Coqui, PyTorch)",
      "Local models",
    ],
  },
  {
    name: "Blockchain",
    items: ["Solidity", "Web3.js, Ethers.js", "dApps (NFT, DAO, ...)"],
  },
];

type Job = {
  company: string;
  role: string;
  date: string;
  bullets: string[];
  tech: string[];
};

export const wolframBase = {
  company: "Wolfram Research",
  role: "Software Engineer",
  date: "Aug 2020 - Present",
  url: "https://www.wolframcloud.com",
  tech: ["React", "TypeScript", "MobX", "Java", "Spring", "Hibernate", "MySQL", "Wolfram Language"],
};

export const wolframBullets: string[] = [
  "Develop and maintain Wolfram Cloud (wolframcloud.com) using React, TypeScript, Java/Spring and Wolfram Language.",
  "Own the web-forms stack behind FormFunction, from the Wolfram Language templating layer to the Java backend and React front end.",
  "Lead the ongoing upgrade of the front-end platform to current tooling.",
  "Serve as one of the team's primary code reviewers across front-end and Java code, keeping a large shared code base consistent and maintainable.",
];

export const otherJobs: Job[] = [
  {
    company: "Destek Engineering",
    role: "Full Stack Web Developer",
    date: "Feb 2018 - Aug 2020",
    bullets: [
      "Worked on the architectural design of the system.",
      "Responsible for people management, including goal setting and providing performance feedback.",
      "Implemented front-end features with React and MaterialUI, and Vue and ElementUI.",
      "Wrote E2E tests with Cypress and API tests with Postman.",
      "Implemented an authentication system using JWT and Redis.",
      "Delivered an educational web application using React and Node, and an e-commerce portal using Laravel and Vue.",
      "CI/CD with Docker and AWS.",
    ],
    tech: ["JavaScript", "React", "Vue", "Node", "AWS", "Docker", "Linux", "Redis", "PostgreSQL", "Cypress", "Postman", "Jira"],
  },
  {
    company: "Bulutsoft Software",
    role: "Frontend Heavy Full Stack Web Developer",
    date: "Jan 2016 - Dec 2017",
    bullets: [
      "Worked across HTML, CSS and the full software development life cycle.",
      "Developed a CRM for tourism agencies with PHP (Laravel) and jQuery.",
    ],
    tech: ["HTML", "CSS", "PHP", "Laravel", "jQuery", "MySQL", "REST & SOAP", "Git"],
  },
];

export type Project = {
  category: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  live?: string;
  repo?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    category: "Web3",
    name: "Purry",
    tagline: "Blockchain based social media platform",
    description: "Designed and wrote the Solidity contracts, and designed and implemented the front-end functionality with ethers.js.",
    tech: ["React", "Solidity", "Ethers.js", "The Graph"],
    live: "https://purry.io",
    repo: "https://github.com/purryrepos",
  },
  {
    category: "Web3 / NFT",
    name: "Amillion Notebooks",
    tagline: "NFT project with physical notebooks",
    description:
      "Owners can sell the physical notebook of the NFTs they own. Designed the Solidity contracts, built the front end and back end, and connected the contracts with Web3.",
    tech: ["Solidity", "Web3", "Node.js"],
    repo: "https://github.com/AmillionNotebooks",
  },
  {
    category: "Web app",
    name: "ReactTerminal",
    tagline: "Ubuntu style terminal in the browser",
    description: "A Linux terminal look-alike built with React. Touch-device friendly.",
    tech: ["JavaScript", "React"],
    live: "https://terminal.mustafacanpalaz.com",
    repo: "https://github.com/mustafacanp/ReactTerminal",
  },
  {
    category: "Game",
    name: "TheDollarRises",
    tagline: "Browser game with pixi.js",
    description: "A small browser game (warning: includes a dictator).",
    tech: ["JavaScript", "pixi.js"],
    live: "https://tdr.mustafacanpalaz.com",
    repo: "https://github.com/mustafacanp/the-dollar-rises",
    note: "Desktop only",
  },
];

type ProjectLink = {
  name: string;
  url?: string;
  // Two short lines: what it is, then what it does or what I built.
  description?: [string, string];
};

export const projectLinks: ProjectLink[] = [
  {
    name: "Risksoft Safety Management",
    url: "https://www.risksoft.com.tr",
    description: ["Occupational safety management platform.", "Built the web application behind it."],
  },
  {
    name: "Seçilenler E-Learning",
    url: "https://secilenler.com.tr",
    description: ["Online learning platform.", "Built the web application behind it."],
  },
  {
    name: "Certification with NFT",
    url: "https://opensea.io/collection/archis-academy-events-nft",
    description: ["Archis Academy event certificates as NFTs.", "66 certificates minted on OpenSea."],
  },
  {
    name: "TextGame",
    url: "https://rpgtextgame.netlify.app",
    description: ["Text-based RPG in Turkish.", "Level up, train stats, explore the map."],
  },
  {
    name: "Random Color",
    url: "https://randomcolor2.netlify.app",
    description: ["Full-screen color flasher.", "Random, black & white and police modes."],
  },
];
