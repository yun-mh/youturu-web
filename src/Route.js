import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "./Auth";
import SignIn from "./SignIn";
import Main from "./Main";
import Revenue from "./Revenue";
import Expenditure from "./Expenditure";
import Item from "./Item";
import Header from "./components/Header";
import { UserContext } from "./UserProvider";

export default () => {
  const user = useContext(UserContext);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Auth>
          <Header user={user}>
            <Route path="/main" exact component={Main} />
            <Route path="/expense" exact component={Expenditure} />
            <Route path="/revenue" exact component={Revenue} />
            <Route path="/item" exact component={Item} />
            <Redirect from="*" to="/main" />
          </Header>
        </Auth>
      </Switch>
    </Router>
  );
};
