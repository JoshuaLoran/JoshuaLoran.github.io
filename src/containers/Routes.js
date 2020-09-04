import React from "react";
import {Switch, Route} from "react-router-dom";
import {HomeDash} from "../components/pages/home/HomeDash";
import {ConmittoPage} from "../components/pages/conmitto/Conmitto";
import {SylvanPage} from "../components/pages/sylvan/Sylvan";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeDash/>
      </Route>
      <Route path="/conmitto">
        <ConmittoPage/>
      </Route>
      <Route path="/SYLVAN">
        <SylvanPage/>
      </Route>
      <Route path="/farmfrenzy">
        <div>FARM FRENZY</div>
      </Route>
      <Route path="/homecontrol">
        <div>HOME CONTROL</div>
      </Route>
      <Route path="/socialwilderness">
        <div>SOCIAL WILDERNESS</div>
      </Route>
      <Route path="/frontend">
        <div>FRONTEND</div>
      </Route>
      <Route path="/backend">
        <div>BACKEND</div>
      </Route>
      <Route path="/resume">
        <div>RESUME</div>
      </Route>
      <Route path="/about">
        <HomeDash />
      </Route>
    </Switch>
  );
};

export {Routes};
