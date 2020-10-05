import rubyIcon from "@iconify/icons-logos/ruby";
import railsIcon from "@iconify/icons-logos/rails";
import reactIcon from "@iconify/icons-logos/react";
import html5 from "@iconify/icons-logos/html-5";
import css3 from "@iconify/icons-logos/css-3";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import raspberryPi from "@iconify/icons-logos/raspberry-pi";
import websocketIcon from "@iconify/icons-logos/websocket";
import npmIcon from "@iconify/icons-logos/npm";
import semanticUi from "@iconify/icons-logos/semantic-ui";
import herokuIcon from "@iconify/icons-logos/heroku-icon";

export const homeControlBlurb = `Utilising devices such as Arduino and RaspberryPi was my
        first dive into programming and development. While it was simple enough to put together devices/hacks, connecting
        these things to be controlled from anywhere there is internet was  another story. I made Home Control to help new tinkerers
        and makers connect their devices without needing knowledge of anything internet related. I was given special
        recognition for this project for both building example devices and using several technologies we were not taught.`;


export const workTreeData = {
  topHeading: "Highlights",
  topList: [
    "Built Ruby on Rails API enabling users to securely create and log into an account",
    "Integrated Actioncable and Node websockets seamlessly for fast communication",
    "Created boilerplate Node.js software for the RaspberryPi",
    "One of two students to receive special recognition for individual projects"
  ],
  secondHeading: "Fun Parts",
  secondList: [
    "The most fun I had for this project was orchestrating all the components to work together",
    "I got to show off some self built hardware with my self built software",
    "First time using a react component library like Semantic, which actually helped solidify some react concepts for me",
  ],
  linkUrl: "https://homecontrolsystem.herokuapp.com/"
};

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
    icon: semanticUi,
    link: "https://react.semantic-ui.com/"
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
  },
  {
    icon: herokuIcon,
    link: "https://www.heroku.com/"
  }
];
