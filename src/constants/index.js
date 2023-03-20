import {
  fullstack,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  express,
  sql,
  nextjs,
  redditclone,
  quickelectric,
  yelpcamp,
  dashboard,
  chakraui,
  firebase,
  bootstrap,
  mui,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Full-stack Developer",
    icon: fullstack,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "chakra ui",
    icon: chakraui,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MUI",
    icon: mui,
  },
];

const projects = [
  {
    name: "Reddit clone",
    description: "A clone site of one of the most popular websites: Reddit",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: redditclone,
    source_code_link: "https://github.com/yarinlaniado/RedditClone",
    live_address: "https://redditclone-nu.vercel.app/",
  },
  {
    name: "YelpCamp",
    description:
      "Web application that enables users to search for camp sites, view, edit, rate and add sites, and locate them on map. (Please have patient with the site loading due to slow loading service provided free by render)",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap 5",
        color: "pink-text-gradient",
      },
    ],
    image: yelpcamp,
    source_code_link: "https://github.com/yarinlaniado/YelpCamp",
    live_address: "https://yelpcamp-express.onrender.com",
  },
  {
    name: "Quick Electric",
    description:
      "A E-commerece site which allow users to view item, edit their cart and pay with Paypal - SandBox",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: quickelectric,
    source_code_link: "https://github.com/yarinlaniado/Ecommerce-QuickElectric",
    live_address: "https://ecommerce-quick-electric.vercel.app/",
  },
  {
    name: "Dashboard",
    description:
      "A site that gives a user the ability so see his business users and revenue, with charts and pies that shows the info visually  (Please have patient with the site loading due to slow loading service provided free by render)",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/yarinlaniado/Dashboard-Fullstack",
    live_address: "https://dashboard-frontend-m1q2.onrender.com/",
  },
];

export { services, technologies, projects };
