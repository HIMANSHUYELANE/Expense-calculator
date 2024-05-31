import "./App.css";

import React, { useState } from "react";
import Table from "./Components/Table";
import Form from "./Components/Form";
import ExpensesData from "./ExpensesData";

export default function App() {
  const [expenses ,setExpenses]=useState(ExpensesData)
  return (
    <main>
      <div className="">
        <h1 className="font-bold text-5xl py-3 ">Expenses Tracker</h1>
        <div className="expense-tracker">
         <Form setExpenses={setExpenses} />
        <Table expenses={expenses} />
        </div>
      </div>
    </main>
  );
}
