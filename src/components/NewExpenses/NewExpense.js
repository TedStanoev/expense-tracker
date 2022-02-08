import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const createExpense = (expenseObj) => {
    const expense = {
      ...expenseObj,
      id: Math.random.toString(),
    }
    props.onAddExpense(expense);
  }

  return (
      <div className="new-expense">
          <ExpenseForm onExpenseCreated={createExpense}/>
      </div>
  )
};

export default NewExpense;