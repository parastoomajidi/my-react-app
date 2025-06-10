import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/Expense/ExpenseItems1";
import Expenses from "./components/Expense/Expenses3";
import NewExpense from "./components/NewExpencese/NewExpense9";

const initialexpenses = [
  { title: "test1", amount: 90000, date: new Date(2025, 3, 3), id: 0 },
  { title: "test2", amount: 988000, date: new Date(2025, 5, 3), id: 1 },
  { title: "test3", amount: 1000, date: new Date(2025, 5, 3), id: 2 },
];
function App() {
  const [expenses, setExpenses] = useState(initialexpenses);
  const appSaveExpenseDataHandler = NewExpenseData =>{
    // console.log(NewExpenseData);
    // expenses.push(NewExpenseData);
    //
    setExpenses(prevExpenses =>{
      return [NewExpenseData, ...prevExpenses];
    })
  }
  //
  return (
    <div>
      <h1>hey parastoo</h1>
      <NewExpense onSaveExpenseData={appSaveExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
