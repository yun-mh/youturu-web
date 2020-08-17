import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  box: {
    width: "100%",
    paddingTop: "10em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  data: {
    width: "40em",
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
    padding: "1em",
    marginLeft: "auto",
    backgroundColor: "#62BDFF",
    color: "#ffffff",
    fontSize: "1.75em",
    border: "1px solid #C7C7C7",
  },
  itemHeader: {
    width: "50%",
    fontSize: "1.3em",
    textAlign: "center",
    backgroundColor: "#c4e6ff",
    color: "#7f7f7f",
    border: "1px solid #C7C7C7",
  },
  revData: {
    width: "50%",
    fontSize: "1.5em",
    textAlign: "center",
    color: "#003AEE",
    border: "1px solid #C7C7C7",
  },
  expData: {
    width: "50%",
    fontSize: "1.5em",
    textAlign: "center",
    color: "#EE0000",
    border: "1px solid #C7C7C7",
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
      <Grid container spacing={3}>
        <div className={classes.box}>
          <div className={classes.data}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.dateData} colSpan="2">
                    今月（{new Date().getFullYear()}年
                    {new Date().getMonth() + 1}月）
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.itemHeader}>収入</TableCell>
                  <TableCell className={classes.itemHeader}>支出</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.revData}>
                    ￥{monthlyRevenueTotal}
                  </TableCell>
                  <TableCell className={classes.expData}>
                    ￥{monthlyExpenditureTotal}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className={classes.data}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.dateData} colSpan="2">
                    今年（{new Date().getFullYear()}年）
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.itemHeader}>収入</TableCell>
                  <TableCell className={classes.itemHeader}>支出</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.revData}>
                    ￥{yearlyRevenueTotal}
                  </TableCell>
                  <TableCell className={classes.expData}>
                    ￥{yearlyExpenditureTotal}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default MainPresenter;
