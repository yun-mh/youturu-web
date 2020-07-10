import React from "react";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ItemTable from "../components/Table";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import SimpleModal from "../components/Modal";

const AddButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600],
    '&:hover': {
      backgroundColor: green[900],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  toolBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textField: {
    display: "flex",
    alignItems: "center",
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '15ch',
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const RevenuePresenter = () => {
  const classes = useStyles();
  const [addOpen, setAddOpen] = React.useState(false);

  const handleAddOpen = () => {
    setAddOpen(true);
  };

  const handleAddClose = () => {
    setAddOpen(false);
  };

  return (
    <Container container maxWidth="lg" className={classes.container}>
      <Typography component="h1" variant="h5">
        収入一覧
      </Typography>
      <Box container mt={3} className={classes.toolBox}>
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
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleAddOpen}
          >
            追加
          </AddButton>
        </div>
      </Box>
        <SimpleModal open={addOpen} handleClose={handleAddClose} />
      <Box container mt={3}>
        <ItemTable />
      </Box>
    </Container>
  );
};

export default RevenuePresenter;
