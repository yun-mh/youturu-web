import React, { useState, useEffect, useContext } from "react";
import MainPresenter from "./MainPresenter";
import { firestore } from "../firebase";
import { UserContext } from "../UserProvider";

const MainContainer = () => {
  const user = useContext(UserContext);

  const [monthlyRevenueTotal, setMontlyRevenueTotal] = useState();
  const [monthlyExpenditureTotal, setMontlyExpenditureTotal] = useState();
  const [yearlyRevenueTotal, setYearlyRevenueTotal] = useState();
  const [yearlyExpenditureTotal, setYearlyExpenditureTotal] = useState();

  const fetchCurrentMonthRevenueData = async () => {
    const target = await user;
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let total = 0;
    if (target) {
      await firestore
        .collection("income")
        .where("id", "==", target.email)
        .where("date", ">=", firstDay)
        .where("date", "<=", lastDay)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            total += parseInt(doc.data().amount);
          });
        });
      await setMontlyRevenueTotal(total);
      return;
    }
  };

  const fetchCurrentYearRevenueData = async () => {
    const target = await user;
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const lastDay = new Date(date.getFullYear(), 12, 0);
    let total = 0;
    if (target) {
      await firestore
        .collection("income")
        .where("id", "==", target.email)
        .where("date", ">=", firstDay)
        .where("date", "<=", lastDay)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            total += parseInt(doc.data().amount);
          });
        });
      await setYearlyRevenueTotal(total);
      return;
    }
  };

  const fetchCurrentMonthExpenditureData = async () => {
    const target = await user;
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let total = 0;
    if (target) {
      await firestore
        .collection("expense")
        .where("id", "==", target.email)
        .where("date", ">=", firstDay)
        .where("date", "<=", lastDay)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            total += parseInt(doc.data().amount);
          });
        });
      await setMontlyExpenditureTotal(total);
      return;
    }
  };

  const fetchCurrentYearExpenditureData = async () => {
    const target = await user;
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const lastDay = new Date(date.getFullYear(), 12, 0);
    let total = 0;
    if (target) {
      await firestore
        .collection("expense")
        .where("id", "==", target.email)
        .where("date", ">=", firstDay)
        .where("date", "<=", lastDay)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            total += parseInt(doc.data().amount);
          });
        });
      await setYearlyExpenditureTotal(total);
      return;
    }
  };

  useEffect(() => {
    fetchCurrentMonthRevenueData();
    fetchCurrentYearRevenueData();
    fetchCurrentMonthExpenditureData();
    fetchCurrentYearExpenditureData();
  });

  return (
    <MainPresenter
      monthlyRevenueTotal={monthlyRevenueTotal}
      monthlyExpenditureTotal={monthlyExpenditureTotal}
      yearlyRevenueTotal={yearlyRevenueTotal}
      yearlyExpenditureTotal={yearlyExpenditureTotal}
    />
  );
};

export default MainContainer;
