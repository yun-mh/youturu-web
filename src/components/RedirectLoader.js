import React from "react";
import { Grid, CssBaseline, makeStyles, Typography } from "@material-ui/core";
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
      <Typography
        component="h2"
        variant="h6"
        style={{ color: "white", marginTop: "10px" }}
      >
        ロード中…
      </Typography>
    </Grid>
  );
};

export default RedirectLoader;
