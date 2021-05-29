import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../Page/Home/Index";
import Profile from "../../Page/Profile/Index";
import Projects from "../../Page/Projects/Index";

const Content = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/projects" exact>
        <Projects />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
    </Switch>
  );
};

export default Content;
