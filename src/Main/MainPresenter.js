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
  box: {
    marginTop: "13.5em",
    marginLeft: "auto",
    textAlign: "center",
  },
  data: {
    display: "inline-block",
    width: "40em",
    marginLeft: "2em",
    padding: "0em",
  },
  table: {
    textAlign: "center",
    height: "12.5em",
    margin: "auto",
    padding: "0.25em",
  },
  dateData: {
    textAlign: "center",
    width: "30em",
    padding: "0em",
    marginLeft: "auto",
    backgroundColor: "#62BDFF",
    color: "#ffffff",
    fontSize: "1.75em",
    border: "2px solid #C7C7C7",
  },
  revData: {
    width: "50%",
    paddingTop: "0em",
    fontSize: "1.5em",
    color: "#003AEE",
    border: "2px solid #C7C7C7",
  },
  expData: {
    width: "50%",
    paddingTop: "0em",
    fontSize: "1.5em",
    color: "#EE0000",
    border: "2px solid #C7C7C7",
  },
}));

const MainPresenter = ({
  monthlyRevenueTotal,
  monthlyExpenditureTotal,
  yearlyRevenueTotal,
  yearlyExpenditureTotal,
}) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography component="h1" variant="h5">
        ダッシュボード
      </Typography>
      <Grid container spacing={3}></Grid>
      <div className={classes.box}>
        <div className={classes.data}>
          <table className={classes.table}>
            <tr>
              <th className={classes.dateData} colSpan="2">
                2020年7月現在
              </th>
            </tr>
            <tr>
              <td className={classes.revData}>￥{monthlyRevenueTotal}</td>
              <td className={classes.expData}>￥{monthlyExpenditureTotal}</td>
            </tr>
          </table>
        </div>
        <div className={classes.data}>
          <table className={classes.table}>
            <tr>
              <th className={classes.dateData} colSpan="2">
                2020年現在
              </th>
            </tr>
            <tr>
              <td className={classes.revData}>￥{yearlyRevenueTotal}</td>
              <td className={classes.expData}>￥{yearlyExpenditureTotal}</td>
            </tr>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default MainPresenter;
