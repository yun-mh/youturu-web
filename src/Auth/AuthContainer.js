import React from "react";
import AuthPresenter from "./AuthPresenter";

const AuthContainer = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return <AuthPresenter handleLogin={handleLogin} />;
};

export default AuthContainer;
