import React, { useState } from "react";
import AuthContainer from "./Auth";
import MainContainer from "./Main";
import Router from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {!isLoggedIn ? (
        <AuthContainer setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Router />
      )}
    </>
  );
}

export default App;
