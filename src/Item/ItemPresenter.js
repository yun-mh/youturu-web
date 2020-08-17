import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, withStyles, TextField, Grid } from "@material-ui/core";

const AddButton = withStyles((theme) => ({
  root: {
    marginLeft: "1em",
    color: "#ffffff",
    fontSize: "1.1em",
    backgroundColor: "#00e676",
    "&:hover": {
      backgroundColor: "#00a152",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  box: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  itemBox: {
    paddingTop: "8em",
    width: "35em",
  },
  title: {
    backgroundColor: "#62BDFF",
    textAlign: "center",
    color: "#ffffff",
    padding: "0.5em",
    border: "1px solid #C7C7C7",
    borderBottomWidth: "0",
    marginBottom: "0",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #C7C7C7",
    borderBottomWidth: "0",
    padding: "1em",
  },
  list: {
    border: "1px solid #C7C7C7",
    paddingTop: "1em",
    paddingBottom: "1em",
    verticalAlign: "center",
  },
  item: {
    fontSize: "1.3em",
    padding: "0.3em 1em",
    fontWeight: "500",
    marginLeft: "0.75em",
  },
  deleteBtn: {
    marginLeft: "0.5em",
    backgroundColor: "#fafafa",
    color: "#E61212",
    fontWeight: "600",
    border: "0",
    fontSize: "1em",
    cursor: "pointer",
  },
}));

const ItemPresenter = ({
  eachRevCategory,
  revContent,
  setRevContent,
  handleRevSubmit,
  handleRevDelete,
  eachExpCategory,
  expContent,
  setExpContent,
  handleExpSubmit,
  handleExpDelete,
}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography component="h1" variant="h5">
        項目設定
      </Typography>
      <Grid container spacing={3}>
        <div className={classes.box}>
          <div className={classes.itemBox}>
            <h2 className={classes.title}>収入項目</h2>
            <form onSubmit={handleRevSubmit} className={classes.form}>
              <TextField
                variant="outlined"
                value={revContent}
                size="small"
                onChange={(e) => setRevContent(e.target.value)}
              />
              <AddButton
                type="submit"
                value="追加"
                className={classes.textSubmit}
              >
                追加
              </AddButton>
            </form>
            <div className={classes.list}>
              {eachRevCategory !== undefined &&
                eachRevCategory.map((item, index) => (
                  <div key={index} value={item} className={classes.item}>
                    {item}
                    <input
                      type="button"
                      value="X"
                      onClick={() => handleRevDelete(item)}
                      className={classes.deleteBtn}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className={classes.itemBox}>
            <h2 className={classes.title}>支出項目</h2>
            <form onSubmit={handleExpSubmit} className={classes.form}>
              <TextField
                variant="outlined"
                value={expContent}
                size="small"
                onChange={(e) => setExpContent(e.target.value)}
              />
              <AddButton
                type="submit"
                value="追加"
                className={classes.textSubmit}
              >
                追加
              </AddButton>
            </form>
            <div className={classes.list}>
              {eachExpCategory !== undefined &&
                eachExpCategory.map((item, index) => (
                  <div key={index} value={item} className={classes.item}>
                    {item}
                    <input
                      type="button"
                      value="X"
                      onClick={() => handleExpDelete(item)}
                      className={classes.deleteBtn}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default ItemPresenter;
