import React, { useState, useEffect } from "react";
import MainPresenter from "./MainPresenter";
import { firestore } from "../firebase";

const MainContainer = () => {
  const [monthlyRevenueTotal, setMontlyRevenueTotal] = useState();
  const [monthlyExpenditureTotal, setMontlyExpenditureTotal] = useState();
  const [yearlyRevenueTotal, setYearlyRevenueTotal] = useState();
  const [yearlyExpenditureTotal, setYearlyExpenditureTotal] = useState();

  const fetchCurrentMonthRevenueData = async () => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let total = 0;
    await firestore
      .collection("test_revenue")
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
  };

  const fetchCurrentYearRevenueData = async () => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const lastDay = new Date(date.getFullYear(), 12, 0);
    let total = 0;
    await firestore
      .collection("test_revenue")
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
  };

  useEffect(() => {
    fetchCurrentMonthRevenueData();
    fetchCurrentYearRevenueData();
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
