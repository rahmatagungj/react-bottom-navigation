import React from "react";
import { Switch, Route } from "react-router-dom";

const Content = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <h1>home</h1>
      </Route>
      <Route path="/projects" exact>
        <h1>projects</h1>
      </Route>
      <Route path="/profile" exact>
        <h1>profile</h1>
      </Route>
    </Switch>
  );
};

export default Content;
