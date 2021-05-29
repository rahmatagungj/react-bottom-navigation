import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../Page/Home/Index";
import Profile from "../../Page/Profile/Index";
import Projects from "../../Page/Projects/Index";
import "./Style.scss";

const Content = () => {
  return (
    <div className="content">
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
    </div>
  );
};

export default Content;
