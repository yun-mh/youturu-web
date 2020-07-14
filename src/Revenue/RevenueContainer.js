import React, { useState, useCallback, useEffect } from "react";
import RevenuePresenter from "./RevenuePresenter";
import { firestore } from "../firebase";

const RevenueContainer = () => {
  const [rows, setRows] = useState([]);
  const [types, setTypes] = useState([]);
  const [eachCategory, setEachCategory] = useState([]);
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState();
  const [type, setType] = useState();
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [modifyId, setModifyId] = useState("");
  const [modifyOpen, setModifyOpen] = useState(false);

  const fetchTypes = async () => {
    let typesData = [];
    await firestore
      .collection("test_revenue_type")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          typesData.push({ genre: doc.data().genre, types: doc.data().types });
        });
      });
    await setTypes(typesData);
    await setEachCategory(typesData[0]?.types);
    await setGenre(typesData[0]?.genre);
    await setType(typesData[0]?.types[0]);
    return;
  };

  const fetchRows = async () => {
    let rowsData = [];
    await firestore
      .collection("test_revenue")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          rowsData.push({
            id: doc.id,
            date: doc.data().date,
            genre: doc.data().genre,
            type: doc.data().type,
            amount: doc.data().amount,
            content: doc.data().content,
          });
        });
      });
    await setRows(rowsData);
    return;
  };

  useEffect(() => {
    fetchTypes();
    fetchRows();
  }, []);

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
    firestore
      .collection("test_revenue")
      .add({ date, genre, type, amount, content })
      .then((res) => {
        const nextRows = rows.concat({
          id: res.id,
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
      });
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
    firestore
      .collection("test_revenue")
      .doc(id)
      .delete()
      .then(() => {
        const nextRows = rows.filter((row) => row.id !== id);
        setRows(nextRows);
      });
  };

  return (
    <RevenuePresenter
      rows={rows}
      setRows={setRows}
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
