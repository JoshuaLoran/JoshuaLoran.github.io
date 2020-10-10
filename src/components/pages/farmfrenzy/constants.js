import rubyIcon from "@iconify/icons-logos/ruby";
import railsIcon from "@iconify/icons-logos/rails";
import javascriptIcon from "@iconify/icons-logos/javascript";
import html5 from "@iconify/icons-logos/html-5";
import css3 from "@iconify/icons-logos/css-3";
import websocketIcon from "@iconify/icons-logos/websocket";
import herokuIcon from "@iconify/icons-logos/heroku-icon";

// Top intro blurb about Farm Frenzy
export const farmFrenzyBlurb = `I really wanted to branch out from what we were doing in class and make a realtime multiplayer game.
  To keep this game simple and fun for kids, I made tic-tac-toe with a farm animal theme.  This was the first time 
  I used websockets and it worked really well. Kids could choose which farm animal represented their "X" or "O"`;

////////////////////////////////////
// Content for the Farm Frenzy worktree
////////////////////////////////////
export const workTreeData = {
  topHeading: "Highlights",
  topList: [
    "Built Ruby on Rails API enabling users to securely create and log into an account",
    "Websockets using Actioncable for real time fun",
    "Designed graphic interface with personalized icon markers",
    "Constructed game logic"
  ],
  secondHeading: "Fun Parts",
  secondList: [
    "Diving into websockets even though they weren't taught to us",
    "Coming up with the farm theme and designing the graphic interface",
    "Watching people in my class play after it was finished"
  ]
};

// Tech icons used in the Farm Frenzy project
export const farmFrenzyIcons = [
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
    icon: websocketIcon,
    link: "https://guides.rubyonrails.org/action_cable_overview.html"
  },
  {
    icon: herokuIcon,
    link: "https://www.heroku.com/"
  }
];

