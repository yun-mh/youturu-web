import React from "react";
import { Grid, CssBaseline, makeStyles } from "@material-ui/core";
import BeatLoader from "react-spinners/BeatLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "rgb(27, 62, 116)",
  },
}));

const RedirectLoader = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <BeatLoader size={40} color={"white"} />
    </Grid>
  );
};

export default RedirectLoader;
