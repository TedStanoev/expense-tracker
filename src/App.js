import { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpenses/NewExpense";

import "./components/Expenses/ExpensesList.css";

const initialExpenses = [
  {
    id: "e1",
    title: "Speaker",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Jacket",
    amount: 79.99,
    date: new Date(2022, 1, 8),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const sortedExpenses = expenses.sort((e1, e2) => e2.date - e1.date);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList className="expenses-list" items={sortedExpenses} />
    </div>
  );
}

export default App;
