import "./App.css";
import ExpenseItem from "./components/Expense/ExpenseItems1";
import Expenses from "./components/Expense/Expenses3";
import NewExpense from "./components/NewExpencese/NewExpense9";

function App() {
  const expenses = [
    { title: "test1", price: 90000, date: new Date(2025, 3, 3), id: 0 },
    { title: "test2", price: 988000, date: new Date(2025, 5, 3), id: 1 },
    { title: "test3", price: 1000, date: new Date(2025, 5, 3), id: 2},
  ];
// 
  return (
    <div>
      <h1>hey parastoo</h1>
      <NewExpense/>
      <Expenses items={expenses}/>
     

    </div>
  );
}

export default App;
