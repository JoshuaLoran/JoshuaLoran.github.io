import pythonIcon from "@iconify/icons-logos/python";
import rubyIcon from "@iconify/icons-logos/ruby";
import railsIcon from "@iconify/icons-logos/rails";
import djangoIcon from "@iconify/icons-logos/django";
import html5 from "@iconify/icons-logos/html-5";
import css3 from "@iconify/icons-logos/css-3";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-logos/redux";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import dockerIcon from "@iconify/icons-logos/docker-icon";
import githubIcon from "@iconify/icons-logos/github-icon";
import gitlabIcon from "@iconify/icons-logos/gitlab";
import trelloIcon from "@iconify/icons-logos/trello";
import cypressIcon from "@iconify/icons-logos/cypress";
import intellijIdea from "@iconify/icons-logos/intellij-idea";
import storybookIcon from "@iconify/icons-logos/storybook-icon";
import raspberryPi from "@iconify/icons-logos/raspberry-pi";
import arduinoIcon from "@iconify/icons-logos/arduino";
import npmIcon from "@iconify/icons-logos/npm";
import yarnIcon from "@iconify/icons-logos/yarn";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import weeblyIcon from "@iconify/icons-logos/weebly";
import mailchimpFreddie from "@iconify/icons-logos/mailchimp-freddie";
import websocketIcon from "@iconify/icons-logos/websocket";
import es6Icon from "@iconify/icons-logos/es6";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import javascriptIcon from "@iconify/icons-logos/javascript";


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

export const sylvanIcons = [
  {
    icon: weeblyIcon,
    link: "https://www.weebly.com/"
  },
  {
    icon: mailchimpFreddie,
    link: "https://mailchimp.com/"
  },
  {
    icon: nodejsIcon,
    link: "https://nodejs.org/en/"
  },
];

export const homeControlIcons = [
  {
    icon: rubyIcon,
    link: "https://www.ruby-lang.org/en/"
  },
  {
    icon: railsIcon,
    link: "https://rubyonrails.org/"
  },
  {
    icon: reactIcon,
    link: "https://reactjs.org/"
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
    icon: nodejsIcon,
    link: "https://nodejs.org/en/"
  },
  {
    icon: raspberryPi,
    link: "https://www.raspberrypi.org/"
  },
  {
    icon: websocketIcon,
    link: "https://guides.rubyonrails.org/action_cable_overview.html"
  },
  {
    icon: npmIcon,
    link: "https://www.npmjs.com/"
  }
];

export const socialWildernessIcons = [
  {
    icon: rubyIcon,
    link: "https://www.ruby-lang.org/en/"
  },
  {
    icon: railsIcon,
    link: "https://rubyonrails.org/"
  },
  {
    icon: javascriptIcon,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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
    icon: bootstrapIcon,
    link: "https://getbootstrap.com/"
  }
];

export const farmFrenzyIcons = socialWildernessIcons.slice(0, socialWildernessIcons.length - 1).concat([
  {
    icon: websocketIcon,
    link: "https://guides.rubyonrails.org/action_cable_overview.html"
  }
]);

const funcForreducing = () => {
  const result = [];
  const allIconsObjs = conmittoIcons
    .concat(sylvanIcons)
    .concat(homeControlIcons)
    .concat(socialWildernessIcons)
    .concat(farmFrenzyIcons)
    .map(iconObj => iconObj).filter((v, i, a) => a.indexOf(v) === i);

  return allIconsObjs;
};

console.log(funcForreducing());

