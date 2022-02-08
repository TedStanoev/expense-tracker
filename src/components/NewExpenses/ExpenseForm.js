import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setTitle] = useState("");
  const [inputAmount, setAmount] = useState("");
  const [inputDate, setDate] = useState("");

  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const setDateHandler = (event) => {
    setDate(event.target.value);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    const expenseObj = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onExpenseCreated(expenseObj);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={setTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={setAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={setDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
