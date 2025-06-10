import { useState } from "react";
import "./ExpenseForm12.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  // define method of handler
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };
  // ein wichtig punkt ist, wir benutsen event fur kein auto refresh
  const submitHandler = (event) => {
    // event . preventDefutl ist fur nicht mache was sie muss zu tun. funyyy=)
    event.preventDefault();
    // console.log( 'submit');
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setenteredDate("");
    // props.onSaveExpenseData(expenseData);
    props.onSaveExpenseData(expenseData);
  };

  // fur form
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        {/* title */}
        <div className="new-expense-control-test">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        {/* amount */}
        <div className="new-expense-control-test">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        {/* date */}
        <div className="new-expense-control-test">
          <label>Date</label>
          <input
            type="date"
            min="2023-1-1"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        {/* button fur add */}
        <div className="new-expense-action">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
