import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./Auth";
import Main from "./Main";
import Revenue from "./Revenue";
import Expenditure from "./Expenditure";
import Item from "./Item";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Header>
          <Route path="/main" exact component={Main} />
          <Route path="/expense" exact component={Expenditure} />
          <Route path="/revenue" exact component={Revenue} />
          <Route path="/item" exact component={Item} />
        </Header>
      </Switch>
    </Router>
  );
}

export default App;
