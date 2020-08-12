import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Route from "./Route";
import UserProvider from "./UserProvider";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "M PLUS Rounded 1c",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  pallete: {
    white: {
      main: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Route />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
