import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "./firebase";
import RedirectLoader from "./components/RedirectLoader";

class Auth extends React.Component {
  state = {
    signinCheck: false,
    signedIn: false,
  };

  _isMounted = false;

  componentDidMount = () => {
    this._isMounted = true;

    auth.onAuthStateChanged((user) => {
      if (user) {
        if (this._isMounted) {
          this.setState({
            signinCheck: true,
            signedIn: true,
          });
        }
      } else {
        if (this._isMounted) {
          this.setState({
            signinCheck: true,
            signedIn: false,
          });
        }
        console.log(this.state);
      }
    });
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render() {
    if (!this.state.signinCheck) {
      return <RedirectLoader />;
    }

    if (this.state.signedIn) {
      return this.props.children;
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Auth;
