import React, { createContext, useReducer } from "react";
import contextReducer from "./contextReducer";

const INITIAL_STATE = JSON.parse(localStorage.getItem("Transactions")) || [
  {
    amount: 152,
    category: "Pets",
    type: "Expense",
    date: "2020-12-22",
    id: "a26e7df7-1352-4ed8-aef8-354f09dd9ad0",
  },
];

export const ExpenseTrackerContext = createContext(INITIAL_STATE);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, INITIAL_STATE);

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );

  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
