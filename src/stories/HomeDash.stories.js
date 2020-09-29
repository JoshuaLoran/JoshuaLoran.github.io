import React from "react";
import {action} from "@storybook/addon-actions";
import {HomeDash} from "../components/pages/home/HomeDash";
import {homepageProps} from "./data";
import {ParticleBG} from "../components/particles/ParticleBG";

export default {
  title: "Home Dash",
  component: HomeDash,
};

export const dashComponent = () => {
  return <HomeDash {...homepageProps}/>;
};

export const particleBackground = () => {
  return <ParticleBG />;
};
