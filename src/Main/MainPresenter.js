import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }));

const MainPresenter = () => {
    const classes = useStyles();
    return (
      <Container maxWidth="lg" className={classes.container}>
        <Typography component="h1" variant="h5">
          ダッシュボード
        </Typography>
        <Grid container spacing={3}></Grid>
      </Container>
    )
};

export default MainPresenter;
