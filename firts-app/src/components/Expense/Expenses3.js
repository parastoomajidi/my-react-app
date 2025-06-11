import ExpenseItem from "../Expense/ExpenseItems1";
import Card from "../UI/Card77";
import "./Expenses4.css";
import ExpenseFilter from "./ExpenseFilter13";
import { useState } from "react";
import ExpenseList from "./ExpenseList15";

function Expenses(props) {
  const [year, setYear] = useState("2025");
  const filterChangeHandler = (filterValue) => {
    setYear(filterValue);
  };

  const filteredExpenses = props.items.filter(
    (e) => e.date.getFullYear().toString() === year
  );
  return (
    // expenses form 4 attrebut
    <Card className="expenses">
      <ExpenseFilter
        selected={year}
        onSelectedYearChanged={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses}/>
      {/* items define in APP.js */}
      {/* {filteredExpenses.map(expense => 
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )} */}

      {/* <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        price={props.items[2].price}
        date={props.items[2].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
