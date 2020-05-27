import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LandingPage } from "../features/landing-page";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
