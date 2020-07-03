import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Expenditure from "./Expenditure";
import Revenue from "./Revenue";
import Header from "./components/Header";

export default () => (
  <Router>
    <>
      <Header>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/expenditure" component={Expenditure} />
          <Route path="/revenue" component={Revenue} />
        </Switch>
      </Header>
    </>
  </Router>
);
