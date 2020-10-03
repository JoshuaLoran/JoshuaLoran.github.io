import React from "react";
import {Switch, Route} from "react-router-dom";
import {HomeDash} from "../components/pages/home/HomeDash";
import {ConmittoPage} from "../components/pages/conmitto/Conmitto";
import {SylvanPage} from "../components/pages/sylvan/Sylvan";
import {HomeControl} from "../components/pages/homecontrol/HomeControl";
import {SocialWilderness} from "../components/pages/socialwilderness/SocialWilderness";
import {FarmFrenzy} from "../components/pages/farmfrenzy/FarmFrenzy";
import {Frontend} from "../components/pages/frontend/Frontend";
import {Backend} from "../components/pages/backend/Backend";
import {Resume} from "../components/pages/resume/Resume";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/Portfolio">
        <HomeDash/>
      </Route>
      <Route path="/conmitto">
        <ConmittoPage/>
      </Route>
      <Route path="/SYLVAN">
        <SylvanPage/>
      </Route>
      <Route path="/farmfrenzy">
        <FarmFrenzy/>
      </Route>
      <Route path="/homecontrol">
        <HomeControl/>
      </Route>
      <Route path="/socialwilderness">
        <SocialWilderness/>
      </Route>
      <Route path="/frontend">
        <Frontend/>
      </Route>
      <Route path="/backend">
        <Backend/>
      </Route>
      <Route path="/resume">
        <Resume/>
      </Route>
      <Route path="/about">
        <HomeDash />
      </Route>
    </Switch>
  );
};

export {Routes};
