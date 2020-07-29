import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import RevenueTable from "../components/RevenueTable";

const AddButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600],
    "&:hover": {
      backgroundColor: green[900],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  toolBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textField: {
    display: "flex",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "15ch",
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const RevenuePresenter = ({
  rows,
  date,
  setDate,
  genre,
  type,
  types,
  setType,
  amount,
  setAmount,
  content,
  setContent,
  addOpen,
  modifyId,
  modifyOpen,
  handleAddOpen,
  handleAddClose,
  handleModifyClose,
  handleSubmit,
  handleModify,
  handleModifySubmit,
  handleDelete,
  eachCategory,
  handleEachCategory,
}) => {
  const classes = useStyles();

  return (
    <Container container="true" maxWidth="lg" className={classes.container}>
      <Typography component="h1" variant="h5">
        収入一覧
      </Typography>
      <Box container="true" mt={3} className={classes.toolBox}>
        <div className={classes.textField}>
          <TextField
            id="outlined-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
          />
          <span>年</span>
          <TextField
            id="outlined-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
          />
          <span>月</span>
        </div>
        <div>
          <AddButton
            variant="contained"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handleAddOpen}
          >
            追加
          </AddButton>
        </div>
      </Box>
      <Box container="true" mt={3}>
        <RevenueTable
          rows={rows}
          date={date}
          setDate={setDate}
          genre={genre}
          type={type}
          types={types}
          setType={setType}
          amount={amount}
          setAmount={setAmount}
          content={content}
          setContent={setContent}
          addOpen={addOpen}
          modifyId={modifyId}
          modifyOpen={modifyOpen}
          handleAddClose={handleAddClose}
          handleModifyClose={handleModifyClose}
          handleSubmit={handleSubmit}
          handleModify={handleModify}
          handleModifySubmit={handleModifySubmit}
          handleDelete={handleDelete}
          eachCategory={eachCategory}
          handleEachCategory={handleEachCategory}
        />
      </Box>
    </Container>
  );
};

export default RevenuePresenter;
