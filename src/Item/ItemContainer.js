import React, { useState, useEffect } from "react";
import ItemPresenter from "./ItemPresenter";
import { firestore, db } from "../firebase";

const ItemContainer = () => {
  const [eachRevCategory, setEachRevCategory] = useState([]);
  const [revType, setRevType] = useState();
  const [revContent, setRevContent] = useState("");

  const [eachExpCategory, setEachExpCategory] = useState([]);
  const [expType, setExpType] = useState();
  const [expContent, setExpContent] = useState("");

  const fetchTypes = async () => {
    let typesRevData = [];
    let typesExpData = [];
    await firestore
      .collection("income_customized")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          typesRevData.push({
            id: doc.data().id,
            types: doc.data().category,
          });
        });
      });
    await setEachRevCategory(typesRevData[0]?.types);
    await setRevType(typesRevData[0]?.types[0]);

    await firestore
      .collection("expense_customized")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          typesExpData.push({
            id: doc.data().id,
            types: doc.data().category,
          });
        });
      });
    await setEachExpCategory(typesExpData[0]?.types);
    await setExpType(typesExpData[0]?.types[0]);
    return;
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  const handleRevSubmit = (e) => {
    if (!revContent) {
      return null;
    } else {
      if (eachRevCategory.find((list) => list === revContent)) {
        return null;
      } else {
        setEachRevCategory((list) => [...list, revContent]);
      }
    }

    firestore
      .collection("income_customized")
      .doc("SfkT2L1HH3t71Evdhd87")
      .update({
        category: db.FieldValue.arrayUnion(revContent),
      });
    e.target.reset();
    e.preventDefault();
    setRevContent("");
  };

  const handleRevDelete = (item) => {
    firestore
      .collection("income_customized")
      .doc("SfkT2L1HH3t71Evdhd87")
      .update({
        category: db.FieldValue.arrayRemove(item),
      });
    setEachRevCategory((eachRevCategory) =>
      eachRevCategory.filter((list) => list !== item)
    );
  };

  const handleExpSubmit = (e) => {
    if (!expContent) {
      return null;
    } else {
      if (eachExpCategory.find((list) => list === expContent)) {
        return null;
      } else {
        setEachExpCategory((list) => [...list, expContent]);
      }
    }
    firestore
      .collection("expense_customized")
      .doc("fm6q4kU1cF4VHyIXL0OR")
      .update({
        category: db.FieldValue.arrayUnion(expContent),
      });
    e.target.reset();
    e.preventDefault();
    setExpContent("");
  };

  const handleExpDelete = (item) => {
    firestore
      .collection("expense_customized")
      .doc("fm6q4kU1cF4VHyIXL0OR")
      .update({
        category: db.FieldValue.arrayRemove(item),
      });
    setEachExpCategory((eachExpCategory) =>
      eachExpCategory.filter((list) => list !== item)
    );
  };

  return (
    <ItemPresenter
      eachRevCategory={eachRevCategory}
      setEachRevCategory={setEachRevCategory}
      revType={revType}
      setRevType={setRevType}
      handleRevSubmit={handleRevSubmit}
      setRevContent={setRevContent}
      handleRevDelete={handleRevDelete}
      eachExpCategory={eachExpCategory}
      setEachExpCategory={setEachExpCategory}
      expType={expType}
      setExpType={setExpType}
      handleExpSubmit={handleExpSubmit}
      setExpContent={setExpContent}
      handleExpDelete={handleExpDelete}
    />
  );
};

export default ItemContainer;
