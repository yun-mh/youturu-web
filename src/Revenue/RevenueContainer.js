import React, { useState } from "react";
import RevenuePresenter from "./RevenuePresenter";

const RevenueContainer = () => {
  const [rows, setRows] = useState([]);
  const [types] = useState([
    { genre: "ゲーム", types: ["キャスター報酬", "テスター報酬"] },
    { genre: "音楽", types: ["著作権収入"] },
    { genre: "健康", types: ["トレーニング報酬"] },
  ]);
  const [eachCategory, setEachCategory] = useState([...types[0].types]);
  const [id, setId] = useState(0);
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState(types[0].genre);
  const [type, setType] = useState(types[0].types[0]);
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [modifyId, setModifyId] = useState("");
  const [modifyOpen, setModifyOpen] = useState(false);

  const handleAddOpen = () => {
    setAddOpen(true);
  };

  const handleModifyOpen = () => {
    setModifyOpen(true);
  };

  const handleAddClose = () => {
    setAddOpen(false);
  };

  const handleModifyClose = () => {
    setModifyOpen(false);
  };

  const handleEachCategory = ({ genre, types }) => {
    setGenre(genre);
    setEachCategory(types);
    setType(types[0]);
  };

  const handleSubmit = () => {
    const nextRows = rows.concat({
      id,
      date,
      genre,
      type,
      amount,
      content,
    });
    const sorted = nextRows.sort(
      (first, second) =>
        first.date.split("-").join("") - second.date.split("-").join("")
    );
    setRows(sorted);
    setId((id) => id + 1);
    setDate("");
    setGenre(types[0].genre);
    setType(types[0].types[0]);
    setEachCategory([...types[0].types]);
    setAmount("");
    setContent("");
    handleAddClose();
  };

  const handleModify = (id) => {
    const selectRow = rows.find((row) => row.id === id);
    const findTypeIndex = types.findIndex((el) => el.genre === selectRow.genre);
    setModifyId(id);
    setDate(selectRow.date);
    setGenre(selectRow.genre);
    setEachCategory([...types[findTypeIndex].types]);
    setType(selectRow.type);
    setAmount(selectRow.amount);
    setContent(selectRow.content);
    handleModifyOpen();
  };

  const handleModifySubmit = (id) => {
    const selectRow = rows.find((row) => row.id === id);
    selectRow.date = date;
    selectRow.genre = genre;
    selectRow.type = type;
    selectRow.amount = amount;
    selectRow.content = content;
    rows.sort(
      (first, second) =>
        first.date.split("-").join("") - second.date.split("-").join("")
    );
    setDate("");
    setGenre(types[0].genre);
    setType(types[0].types[0]);
    setEachCategory([...types[0].types]);
    setAmount("");
    setContent("");
    setModifyId("");
    handleModifyClose();
  };

  const handleDelete = (id) => {
    const nextRows = rows.filter((row) => row.id !== id);
    setRows(nextRows);
  };

  return (
    <RevenuePresenter
      rows={rows}
      setRows={setRows}
      id={id}
      setId={setId}
      date={date}
      setDate={setDate}
      genre={genre}
      type={type}
      setType={setType}
      types={types}
      eachCategory={eachCategory}
      setEachCategory={setEachCategory}
      amount={amount}
      setAmount={setAmount}
      content={content}
      setContent={setContent}
      addOpen={addOpen}
      setAddOpen={setAddOpen}
      modifyId={modifyId}
      setModifyId={setModifyId}
      modifyOpen={modifyOpen}
      setModifyOpen={setModifyOpen}
      handleAddOpen={handleAddOpen}
      handleModifyOpen={handleModifyOpen}
      handleAddClose={handleAddClose}
      handleModifyClose={handleModifyClose}
      handleSubmit={handleSubmit}
      handleModify={handleModify}
      handleModifySubmit={handleModifySubmit}
      handleDelete={handleDelete}
      handleEachCategory={handleEachCategory}
    />
  );
};

export default RevenueContainer;
