import React from "react";
import GoogleButton from "react-google-button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${require("../assets/background.jpg")})`,
    backgroundSize: "cover",
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
  logo: {
    width: "300px",
    height: "80px",
    marginBottom: "16px",
    backgroundImage: `url(${require("../assets/logo.png")})`,
    backgroundSize: "cover",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: "capitalize",
    color: "white",
  },
}));

const SignInPresenter = ({ handleSignin }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8} />
      <Grid item xs={12} sm={8} md={4} elevation={6} className={classes.menu}>
        <div className={classes.paper}>
          <div className={classes.logo}></div>
          <Typography
            component="h2"
            variant="subtitle1"
            style={{ color: "white" }}
          >
            個人YouTubeクリエイターのための会計システム
          </Typography>
          <GoogleButton
            type="light"
            label="Googleアカウントで始める"
            onClick={handleSignin}
            style={{
              fontSize: "13px",
              marginTop: "16px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default SignInPresenter;
