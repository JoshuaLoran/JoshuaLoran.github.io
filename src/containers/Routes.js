import React from "react";
import {Switch, Route} from "react-router-dom";
import {HomeDash} from "../components/pages/home/HomeDash";
import {ConmittoPage} from "../components/pages/conmitto/Conmitto";
import {SylvanPage} from "../components/pages/sylvan/Sylvan";
import {HomeControl} from "../components/pages/homecontrol/HomeControl";
import {SocialWilderness} from "../components/pages/socialwilderness/SocialWilderness";
import {FarmFrenzy} from "../components/pages/farmfrenzy/FarmFrenzy";
import {Resume} from "../components/pages/resume/Resume";
import {HomeSetup} from "../components/pages/homesetup/HomeSetup";
import {Vennity} from "../components/pages/vennity/Vennity";
import {Reamaze} from "../components/pages/reamaze/Reamaze";
import {Godaddy} from "../components/pages/godaddy/Godaddy";

// Define routes for all the pages
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeDash/>
      </Route>
      <Route path="/conmitto">
        <ConmittoPage/>
      </Route>
      <Route path="/vennity">
        <Vennity/>
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
      <Route path="/homesetup">
        <HomeSetup/>
      </Route>
      <Route path="/reamaze">
        <Reamaze/>
      </Route>
      <Route path="/resume">
        <Resume/>
      </Route>
      <Route path="/godaddy">
        <Godaddy/>
      </Route>
    </Switch>
  );
};

export {Routes};
