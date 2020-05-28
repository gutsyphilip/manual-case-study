import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { LandingPage } from "../features/landing-page";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
