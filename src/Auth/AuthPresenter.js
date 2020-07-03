import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#74b9ff",
  },
  menu: {
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: "capitalize",
    color: "white",
  },
}));

const AuthPresenter = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8} />
      <Grid item xs={12} sm={8} md={4} elevation={6} className={classes.menu}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            ゆーちゅーる
          </Typography>
          <Typography component="h4" variant="h5">
            個人YouTubeクリエイターのための会計システム
          </Typography>
          <Link to="/main" style={{ textDecoration: "none" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Googleアカウントで始める
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default AuthPresenter;
