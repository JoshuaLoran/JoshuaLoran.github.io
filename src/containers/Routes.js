import React from "react";
import {Switch, Route} from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div>HOME</div>
      </Route>
      <Route path="/conmitto">
        <div>CONMITTO</div>
      </Route>
      <Route path="/SYLVAN">
        <div>SYLVAN</div>
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
        <div>ABOUT</div>
      </Route>
    </Switch>
  );
};

export {Routes};
