// All site copy lives here. Everything is written to be public-safe:
// no ticket or PR IDs, internal codenames, customer names or security details.

export const profile = {
  name: 'Mustafa Can Palaz',
  title: 'Full Stack Software Engineer',
  email: 'mustafacanpalaz@gmail.com',
  github: 'https://github.com/mustafacanp',
  cmd: '/cmd/'
};

export const about = {
  greeting: "Hi, I'm Mustafa Can Palaz.",
  paragraphs: [
    'I am a passionate developer who wants to be a part of the creation of the future. I never allow myself to be limited by the things I need to do and I am always trying to learn new technologies.',
    'I often look at the problems in my life like an algorithm. I enjoy solving these problems and making my life easier, hence I can literally define myself as a Full Stack Software Developer.'
  ],
  education: [
    { icon: '🎓', label: 'B.Sc. in Math & Computer Science', date: 'Sep 2011 - Jun 2016' },
    { icon: '🔗', label: 'Encode Club Solidity Bootcamp', date: 'Nov 2021 - Jan 2022' },
    { icon: '🤖', label: 'Encode Club AI and GPT Bootcamp', date: 'Nov 2024 - Jan 2025' }
  ]
};

export const skills = [
  {
    icon: '🎨',
    name: 'Frontend',
    items: ['React', 'TypeScript', 'MobX', 'Vue.js', 'HTML & CSS / SCSS', 'Webpack, Vite, Babel, SWC']
  },
  {
    icon: '⚙️',
    name: 'Backend',
    items: ['Java (Spring, Hibernate)', 'Node.js (Express)', 'PHP (Laravel)', 'Wolfram Language', 'REST APIs', 'OAuth & auth flows']
  },
  {
    icon: '🗄️',
    name: 'Databases & DevOps',
    items: ['SQL (MySQL, PostgreSQL)', 'Flyway migrations', 'Redis', 'Docker', 'Nginx', 'CI/CD']
  },
  {
    icon: '🤖',
    name: 'AI',
    items: ['LLMs', 'Prompt design & chaining', 'RAG, LangChain', 'Local training (LoRA, fine-tuning)', 'AI-assisted development']
  },
  {
    icon: '🔗',
    name: 'Blockchain',
    items: ['Solidity', 'Web3.js, Ethers.js', 'dApps (NFT, DAO, ...)']
  }
];

type Job = {
  company: string;
  role: string;
  date: string;
  bullets: string[];
  tech: string[];
};

export const wolframBase = {
  company: 'Wolfram Research',
  role: 'Software Engineer',
  date: 'Aug 2020 - Present',
  url: 'https://www.wolframcloud.com',
  tech: ['React', 'TypeScript', 'MobX', 'Java', 'Spring', 'Hibernate', 'MySQL', 'Wolfram Language']
};

export const wolframBullets: string[] = [
  'Develop and maintain Wolfram Cloud (wolframcloud.com) using React, TypeScript, Java/Spring and Wolfram Language.',
  'Own the web-forms stack behind FormFunction, from the Wolfram Language templating layer to the Java backend and React front end.',
  'Lead the ongoing upgrade of the front-end platform to current tooling.',
  'One of the main code reviewers in the team.'
];

export const otherJobs: Job[] = [
  {
    company: 'Destek Engineering',
    role: 'Full Stack Web Developer',
    date: 'Feb 2018 - Aug 2020',
    bullets: [
      'Worked on the architectural design of the system.',
      'Responsible for people management, including goal setting and providing performance feedback.',
      'Implemented front-end features with React and MaterialUI, and Vue and ElementUI.',
      'Wrote E2E tests with Cypress and API tests with Postman.',
      'Implemented an authentication system using JWT and Redis.',
      'Delivered an educational web application using React and Node, and an e-commerce portal using Laravel and Vue.',
      'CI/CD with Docker and AWS.'
    ],
    tech: ['JavaScript', 'React', 'Vue', 'Node', 'AWS', 'Docker', 'Linux', 'Redis', 'PostgreSQL', 'Cypress', 'Postman', 'Jira']
  },
  {
    company: 'Bulutsoft Software',
    role: 'Frontend Heavy Full Stack Web Developer',
    date: 'Jan 2016 - Dec 2017',
    bullets: [
      'Worked across HTML, CSS and the full software development life cycle.',
      'Developed a CRM for tourism agencies with PHP (Laravel) and jQuery.'
    ],
    tech: ['HTML', 'CSS', 'PHP', 'Laravel', 'jQuery', 'MySQL', 'REST & SOAP', 'Git']
  }
];

export type Project = {
  icon: string;
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
    icon: '😸',
    name: 'Purry',
    tagline: 'Blockchain based social media platform',
    description: 'Designed and wrote the Solidity contracts, and designed and implemented the front-end functionality with ethers.js.',
    tech: ['React', 'Solidity', 'Ethers.js', 'The Graph'],
    live: 'https://purry.io',
    repo: 'https://github.com/purryrepos'
  },
  {
    icon: '📓',
    name: 'Amillion Notebooks',
    tagline: 'NFT project with physical notebooks',
    description: 'Owners can sell the physical notebook of the NFTs they own. Designed the Solidity contracts, built the front end and back end, and connected the contracts with Web3.',
    tech: ['Solidity', 'Web3', 'Node.js'],
    repo: 'https://github.com/AmillionNotebooks'
  },
  {
    icon: '💻',
    name: 'ReactTerminal',
    tagline: 'Ubuntu style terminal in the browser',
    description: 'A Linux terminal look-alike built with React. Touch-device friendly.',
    tech: ['JavaScript', 'React'],
    live: '/cmd/',
    repo: 'https://github.com/mustafacanp/ReactTerminal'
  },
  {
    icon: '💵',
    name: 'TheDollarRises',
    tagline: 'Browser game with pixi.js',
    description: 'A small browser game (warning: includes a dictator).',
    tech: ['JavaScript', 'pixi.js'],
    live: '/tdr/',
    repo: 'https://github.com/mustafacanp/the-dollar-rises',
    note: 'Desktop only'
  }
];

export const projectLinks = [
  { icon: '📜', name: 'Certification with NFT', url: 'https://opensea.io/collection/archis-academy-events-nft' },
  { icon: '👷', name: 'Risksoft Safety Management', url: 'https://app.risksoft.com.tr/login' },
  { icon: '👩‍🏫', name: 'E-Learning System', url: 'https://secilenler.com.tr/panel/login' },
  { icon: '👾', name: 'TextGame', url: 'https://rpgtextgame.netlify.app' },
  { icon: '🎨', name: 'Random Color', url: 'https://randomcolor2.netlify.app' },
  { icon: '💧', name: 'Is It Wet?', url: '/isItWetAPI/?coordinates=29.9773,31.1325' },
  { icon: '🚀', name: 'Spoiler Al', url: 'https://www.spoileral.com' }
];
