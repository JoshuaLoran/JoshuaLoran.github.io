import React from 'react';
import { action } from '@storybook/addon-actions';
import {HomeDash} from "../components/pages/home/HomeDash";
import {homepageProps} from "./data";

export default {
  title: 'Home Dash',
  component: HomeDash,
};

export const dashComponent = () => {
  return <HomeDash {...homepageProps}/>
};

