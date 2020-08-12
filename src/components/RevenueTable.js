import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { red, yellow } from "@material-ui/core/colors";
import { AddModal, ModifyModal } from "./Modal";
import PropTypes from "prop-types";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const DeleteButton = withStyles((theme) => ({
  root: {
    color: red[600],
  },
}))(IconButton);

const ModifyButton = withStyles((theme) => ({
  root: {
    color: yellow[600],
  },
}))(IconButton);

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function RevenueTable({
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
  handleAddClose,
  handleModifyClose,
  handleSubmit,
  handleModify,
  handleModifySubmit,
  handleDelete,
  eachCategory,
  handleEachCategory,
}) {
  const classes = useStyles2();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  let newRows =
    rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <AddModal
        open={addOpen}
        handleClose={handleAddClose}
        date={date}
        setDate={setDate}
        genre={genre}
        types={types}
        type={type}
        setType={setType}
        amount={amount}
        setAmount={setAmount}
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
        eachCategory={eachCategory}
        handleEachCategory={handleEachCategory}
      />
      <ModifyModal
        open={modifyOpen}
        handleClose={handleModifyClose}
        date={date}
        setDate={setDate}
        genre={genre}
        types={types}
        type={type}
        setType={setType}
        amount={amount}
        setAmount={setAmount}
        content={content}
        setContent={setContent}
        handleModifySubmit={handleModifySubmit}
        modifyId={modifyId}
        eachCategory={eachCategory}
        handleEachCategory={handleEachCategory}
      />
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell align="center">日付</TableCell>
            <TableCell align="center">科目</TableCell>
            <TableCell align="center">内容</TableCell>
            <TableCell align="center">金額</TableCell>
            <TableCell align="center">修正</TableCell>
            <TableCell align="center">削除</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{ width: 160 }} align="center">
                {row.date}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.type}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.content}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.amount}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                <ModifyButton
                  aria-label="modify"
                  onClick={() => handleModify(row.id)}
                >
                  <CreateIcon />
                </ModifyButton>
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                <DeleteButton
                  aria-label="delete"
                  onClick={() => handleDelete(row.id)}
                >
                  <DeleteIcon />
                </DeleteButton>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              labelDisplayedRows={({ from, to, count }) =>
                `全体${count}件 中 ${from}-${to}`
              }
              rowsPerPage={rowsPerPage}
              labelRowsPerPage="1ページ当表示件数"
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "1ページ当表示件数" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
