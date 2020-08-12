import React from "react";
import SignInPresenter from "./SignInPresenter";
import { signInWithGoogle } from "../firebase";
import { useHistory } from "react-router-dom";

const SignInContainer = () => {
  const history = useHistory();

  const handleSignin = async () => {
    const signedIn = await signInWithGoogle();
    if (signedIn) {
      history.push("/main");
    }
  };

  return <SignInPresenter handleSignin={handleSignin} />;
};

export default SignInContainer;
