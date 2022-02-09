import Expenses from "./Expenses";

import './ExpensesList.css'

const ExpensesList = (props) => {
  let expenses = props.items;

  if (expenses.length === 0)
    return <h2 className='expenses-list__fallback'>No expenses.</h2>

  return (
      <ul  className='expenses-list'>
          <Expenses items={expenses}/>
      </ul>
  )
};

export default ExpensesList;