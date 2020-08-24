import React, { useState, useEffect, useContext } from "react";
import ItemPresenter from "./ItemPresenter";
import { firestore, db } from "../firebase";
import { UserContext } from "../UserProvider";

const ItemContainer = () => {
  const user = useContext(UserContext);

  const [eachRevCategory, setEachRevCategory] = useState([]);
  const [revType, setRevType] = useState();
  const [revContent, setRevContent] = useState("");

  const [eachExpCategory, setEachExpCategory] = useState([]);
  const [expType, setExpType] = useState();
  const [expContent, setExpContent] = useState("");

  const fetchTypes = async () => {
    const target = user;
    let typesRevData = [];
    let typesExpData = [];

    if (target) {
      await firestore
        .collection("income_customized")
        .where("id", "==", target.email)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            typesRevData.push({
              id: doc.data().id,
              types: doc.data().category,
            });
          });
        });
      setEachRevCategory(typesRevData[0]?.types || []);
      setRevType(typesRevData[0]?.types[0]);

      await firestore
        .collection("expense_customized")
        .where("id", "==", target.email)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            typesExpData.push({
              id: doc.data().id,
              types: doc.data().category,
            });
          });
        });
      setEachExpCategory(typesExpData[0]?.types || []);
      setExpType(typesExpData[0]?.types[0]);
    }
    return;
  };

  useEffect(() => {
    fetchTypes();
  });

  const handleRevSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    let exist, docId;
    const target = user;

    if (!revContent) {
      return null;
    } else {
      if (eachRevCategory.find((list) => list === revContent)) {
        return null;
      } else {
        setEachRevCategory((list) => [...list, revContent]);
      }
    }

    await firestore
      .collection("income_customized")
      .where("id", "==", target.email)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          if (!doc.empty) {
            exist = true;
            docId = doc.id;
          } else {
            exist = false;
          }
        });
      });
    if (!exist) {
      await firestore.collection("income_customized").add({
        id: target.email,
        category: [revContent],
      });
    } else {
      await firestore
        .collection("income_customized")
        .doc(docId)
        .update({
          category: db.FieldValue.arrayUnion(revContent),
        });
    }

    setRevContent("");
  };

  const handleRevDelete = async (item) => {
    let docId;
    const target = user;

    await firestore
      .collection("income_customized")
      .where("id", "==", target.email)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          docId = doc.id;
        });
      });

    await firestore
      .collection("income_customized")
      .doc(docId)
      .update({
        category: db.FieldValue.arrayRemove(item),
      });

    setEachRevCategory((eachRevCategory) =>
      eachRevCategory.filter((list) => list !== item)
    );
  };

  const handleExpSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    let exist, docId;
    const target = user;

    if (!expContent) {
      return null;
    } else {
      if (eachExpCategory.find((list) => list === expContent)) {
        return null;
      } else {
        setEachExpCategory((list) => [...list, expContent]);
      }
    }

    await firestore
      .collection("expense_customized")
      .where("id", "==", target.email)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          if (!doc.empty) {
            exist = true;
            docId = doc.id;
          } else {
            exist = false;
          }
        });
      });
    if (!exist) {
      await firestore.collection("expense_customized").add({
        id: target.email,
        category: [expContent],
      });
    } else {
      await firestore
        .collection("expense_customized")
        .doc(docId)
        .update({
          category: db.FieldValue.arrayUnion(expContent),
        });
    }

    setExpContent("");
  };

  const handleExpDelete = async (item) => {
    let docId;
    const target = user;

    await firestore
      .collection("expense_customized")
      .where("id", "==", target.email)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          docId = doc.id;
        });
      });

    await firestore
      .collection("expense_customized")
      .doc(docId)
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
