import intellijIdea from "@iconify/icons-logos/intellij-idea";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-logos/redux";
import storybookIcon from "@iconify/icons-logos/storybook-icon";
import html5 from "@iconify/icons-logos/html-5";
import css3 from "@iconify/icons-logos/css-3";
import pythonIcon from "@iconify/icons-logos/python";
import djangoIcon from "@iconify/icons-logos/django";
import websocketIcon from "@iconify/icons-logos/websocket";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import dockerIcon from "@iconify/icons-logos/docker-icon";
import cypressIcon from "@iconify/icons-logos/cypress";
import githubIcon from "@iconify/icons-logos/github-icon";
import gitlabIcon from "@iconify/icons-logos/gitlab";
import trelloIcon from "@iconify/icons-logos/trello";
import yarnIcon from "@iconify/icons-logos/yarn";

const bridgeQuote = "We help bridge the digital and physical industrial worlds.";

const userCentricQuote = "Conmitto designs user-centric systems for your organization’s biggest asset and operational challenges.";

const digitalAssetQuote = "A digital, real-time catalog of the assets & equipment that keep your organization running.";

const IMLQuote = "Inventory, Material and Logistics Management to keep track of the goods needed to keep your organization running.";

const productionQuote = "View Production Lines, Plan Production Schedules and Track Production Statuses Simply and Efficiently.";

const autoQuote = "An automated assets, facilities and inventory management system to prevent the spread of infections.";

export const quotes = [
  {quoteOne: bridgeQuote, quoteTwo: userCentricQuote, quoteThree: productionQuote},
  {quoteOne: digitalAssetQuote, quoteTwo: IMLQuote, quoteThree: autoQuote}
];

export const workTreeData = {
  topHeading: "Technical Responsibilties",
  topList: [
    "Assisted with much of the frontend design and implementation",
    "Built and/or modified models, views, serializers, and various features in a Django/Postgres API",
    "Worked within React and Redux, including generated base stores with RSAA CRUD and other actions",
    "Designed an internal responsive and composable library, including HOC wrappers to encapsulate shared structure/logic",
    "Designed, reusable forms (and form components), item bars, and data tables for many models",
    "Created self documenting code using tools like Proptypes, JSdocs, and Storybook.",
    "Wrote a bulk deleting system for many models",
    "Implemented full stack Beta option to give beta test approved users access to to beta features site wide.",
    "Onboard and help new developers become familiar withe codebase.",
    "Setup and maintain runner for Gitlab CI/CD",
    "Write and maintain E2E testing with Cypress",
    "Work and troubleshoot environment within Docker containerization."
  ],
  secondHeading: "Libraries / Tools",
  secondList: [
    "Python / Django / Postgres / Postgis",
    "React / Redux / Storybook / Styled Components / SASS",
    "Cypress End-to-End testing",
    "Docker"
  ],
  linkUrl: "https://conmittomanager.com/#/"
};

export const conmittoIcons = [
  {
    icon: intellijIdea,
    link: "https://www.jetbrains.com/"
  },
  {
    icon: reactIcon,
    link: "https://reactjs.org/"
  },
  {
    icon: reduxIcon,
    link: "https://redux.js.org/"
  },
  {
    icon: storybookIcon,
    link: "https://storybook.js.org/"
  },
  {
    icon: html5,
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
  },
  {
    icon: css3,
    link: "https://developer.mozilla.org/en-US/docs/Archive/CSS3"
  },
  {
    icon: pythonIcon,
    link: "https://www.python.org/"
  },
  {
    icon: djangoIcon,
    link: "https://www.djangoproject.com/"
  },
  {
    icon: websocketIcon,
    link: "https://channels.readthedocs.io/en/latest/"
  },
  {
    icon: postgresqlIcon,
    link: "https://www.postgresql.org/"
  },
  {
    icon: dockerIcon,
    link: "https://www.docker.com/"
  },
  {
    icon: cypressIcon,
    link: "https://www.cypress.io/"
  },
  {
    icon: githubIcon,
    link: "https://github.com/JoshuaLoran"
  },
  {
    icon: gitlabIcon,
    link: "https://gitlab.com/JoshuaLoran"
  },
  {
    icon: trelloIcon,
    link: "https://trello.com/"
  },
  {
    icon: yarnIcon,
    link: "https://classic.yarnpkg.com/en/"
  }
];
