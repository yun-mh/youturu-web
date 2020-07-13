import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  withStyles,
  Box,
} from "@material-ui/core";
import { green, grey, blue } from "@material-ui/core/colors";

const GenreButton = withStyles((theme) => ({}))(Button);

const AddButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600],
    "&:hover": {
      backgroundColor: green[900],
    },
  },
}))(Button);

const CancelButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(grey[600]),
    backgroundColor: grey[600],
    "&:hover": {
      backgroundColor: grey[900],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalStyle: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: "30ch",
  },
}));

export const AddModal = ({
  genre,
  open,
  handleClose,
  date,
  types,
  setDate,
  amount,
  setAmount,
  type,
  setType,
  content,
  setContent,
  handleSubmit,
  eachCategory,
  handleEachCategory,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.modalStyle}>
          <div className={classes.paper}>
            <Box
              mb={3}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {types.map((type) => (
                <GenreButton
                  key={type.genre}
                  onClick={() => handleEachCategory(type)}
                  style={{
                    color: genre === type.genre ? "white" : "inherit",
                    backgroundColor:
                      genre === type.genre ? blue[300] : grey[200],
                  }}
                >
                  {type.genre}
                </GenreButton>
              ))}
            </Box>
            <div className={classes.textField}>
              <span>日付</span>
              <TextField
                id="outlined-number"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className={classes.textField}>
              <span>項目</span>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={type}
                  defaultValue={eachCategory[0]}
                  onChange={(e) => setType(e.target.value)}
                >
                  {eachCategory.map((category, index) => (
                    <MenuItem
                      key={index}
                      value={category}
                      selected={index === 0 ? true : false}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={classes.textField}>
              <span>金額</span>
              <TextField
                id="outlined-number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className={classes.textField}>
              <span>内容</span>
              <TextField
                id="outlined-number"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <Box
              mt={3}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CancelButton
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleClose}
              >
                キャンセル
              </CancelButton>
              <AddButton
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleSubmit}
              >
                追加
              </AddButton>
            </Box>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const ModifyModal = ({
  open,
  handleClose,
  date,
  genre,
  types,
  setDate,
  amount,
  setAmount,
  type,
  setType,
  content,
  setContent,
  handleModifySubmit,
  modifyId,
  eachCategory,
  handleEachCategory,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.modalStyle}>
          <div className={classes.paper}>
            <Box
              mb={3}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {types.map((type) => (
                <GenreButton
                  key={type.genre}
                  onClick={() => handleEachCategory(type)}
                  style={{
                    color: genre === type.genre ? "white" : "inherit",
                    backgroundColor:
                      genre === type.genre ? blue[300] : grey[200],
                  }}
                >
                  {type.genre}
                </GenreButton>
              ))}
            </Box>
            <div className={classes.textField}>
              <span>日付</span>
              <TextField
                id="outlined-number"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className={classes.textField}>
              <span>項目</span>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={type}
                  defaultValue={eachCategory[0]}
                  onChange={(e) => setType(e.target.value)}
                >
                  {eachCategory.map((category, index) => (
                    <MenuItem key={index} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={classes.textField}>
              <span>金額</span>
              <TextField
                id="outlined-number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className={classes.textField}>
              <span>内容</span>
              <TextField
                id="outlined-number"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <Box
              mt={3}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CancelButton
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleClose}
              >
                キャンセル
              </CancelButton>
              <AddButton
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => handleModifySubmit(modifyId)}
              >
                修正
              </AddButton>
            </Box>
          </div>
        </div>
      </Modal>
    </div>
  );
};
