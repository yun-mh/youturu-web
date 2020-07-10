import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, TextField, Select, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
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
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  }
}));

export default function SimpleModal({open, handleClose}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [item, setItem] = React.useState();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div >
      <Modal open={open} onClose={handleClose}>
        <div className={classes.modalStyle}>
            <div className={classes.paper}>
                <div className={classes.textField}>
                    <span>日付</span>
                    <TextField
                        id="outlined-number"
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                </div>
                <div className={classes.textField}>    
                    <span>項目</span>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={item}
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
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
                    />
                </div>
                <div className={classes.textField}>    
                    <span>内容</span>
                    <TextField
                        id="outlined-number"
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                    />
                </div>
            </div>
        </div>
      </Modal>
    </div>
  );
}