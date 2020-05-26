import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Switch>{/* <Route exact path="/" component={DummyIndex} /> */}</Switch>
    </Router>
  );
};

export default AppRouter;
