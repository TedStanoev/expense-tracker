import "./ExpenseItem.css";

function ExpenseItem() {
  const date = new Date(2022, 1, 8);
  const expenseTitle = 'Jacket';
  const amount = 79.99;
  
  return (
    <div className="expense-item">
      <div>{date.toUTCString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
