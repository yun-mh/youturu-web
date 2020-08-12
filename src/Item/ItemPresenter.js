import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  box: {
    marginTop: "3em",
    marginLeft: "auto",
    textAlign: "center",
    width: "100em",
    float: "none",
  },
  itemBox: {
    float: "left",
    width: "35em",
    padding: "0em",
    margin: "0em 3em",
    textAlign: "left",
  },
  title: {
    backgroundColor: "#62BDFF",
    textAlign: "center",
    color: "#ffffff",
    padding: "0.5em",
    border: "2px solid #C7C7C7",
    borderBottomWidth: "0",
    marginBottom: "0",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #C7C7C7",
    borderBottomWidth: "0",
    padding: "1em",
  },
  textInput: {
    fontSize: "1.5em",
    borderColor: "#dfdfdf",
  },
  textSubmit: {
    color: "#ffffff",
    backgroundColor: "#11C95C",
    textDecoration: "none",
    border: "0px",
    fontSize: "1.1em",
    padding: "0.5em 1.2em",
    borderRadius: "3px",
    marginLeft: "2em",
    cursor: "pointer",
  },
  list: {
    border: "2px solid #C7C7C7",
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
    backgroundColor: "white",
    color: "#E61212",
    fontWeight: "600",
    border: "0",
    fontSize: "1em",
    cursor: "pointer",
  },
}));

const ItemPresenter = ({
  setRevType,
  eachRevCategory,
  revContent,
  setRevContent,
  handleRevSubmit,
  handleRevDelete,
  revRows,
  expType,
  setExpType,
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
      <div className={classes.box}>
        <div className={classes.itemBox}>
          <h1 className={classes.title}>収入項目</h1>
          <form onSubmit={handleRevSubmit} className={classes.form}>
            <input
              type="text"
              value={revContent}
              onChange={(e) => setRevContent(e.target.value)}
              className={classes.textInput}
            />
            <input type="submit" value="追加" className={classes.textSubmit} />
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
          <h1 className={classes.title}>支出項目</h1>
          <form onSubmit={handleExpSubmit} className={classes.form}>
            <input
              type="text"
              value={expContent}
              onChange={(e) => setExpContent(e.target.value)}
              className={classes.textInput}
            />
            <input type="submit" value="追加" className={classes.textSubmit} />
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
    </Container>
  );
};

export default ItemPresenter;
