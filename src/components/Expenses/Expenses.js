import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const expenses = [...props.items];

  return (
    <Card className="container">
      {expenses.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))
        .sort((e1, e2) => e1.date - e2.date)
      }
    </Card>
  );
}

export default Expenses;
