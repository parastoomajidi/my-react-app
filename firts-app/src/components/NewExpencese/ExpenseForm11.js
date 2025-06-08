import { useState } from "react";
import "./ExpenseForm12.css";
const ExpenseForm =(props) =>{
    const [enteredTitle, setEnteredTitle] = useState('eine title');
    const [enteredAmount, setEnteredAmount]= useState("");
    const[enteredDate, setenteredDate]= useState('2025-05-05');

    // define method of handler
    const titleChangeHandler =(event)=>{
        // console.log('title change');
        setEnteredTitle(event.target.value);
    };

    const amountchangeHandler =(event) => {
        // console.log('test amount');
        setEnteredAmount(event.target.value);
    };

    const datechangeHandler =(event) =>{
         // setenteredDate('test3 date');
        setenteredDate(event.target.value);
    };
    // ein wichtig punkt ist, wir benutsen event fur kein auto refresh
    const submitHandler=(event) =>{
        // event . preventDefutl ist fur nicht mache was sie muss zu tun. funyyy=)
        event.preventDefult();
        // console.log( 'submit');
        const expenseDate={
            title:enteredTitle,
            amount:enteredAmount,
            date : new Date (enteredDate)
        };
        props.onSaveExpenseDate(expenseDate);
    }

  
    // fur form
    return <form onSubmit={submitHandler}>
        <div className="new-expense-controls">
            {/* title */}
            <div className="new-expense-control-test">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            {/* amount */}
             <div className="new-expense-control-test">
                <label>Amount</label>
                <input type="number" min="1" step="10" onChange={amountchangeHandler} value={enteredAmount}/>
            </div>

            {/* date */}
             <div className="new-expense-control-test">
                <label>Date</label>
                <input type="date" min="2023-1-1" onChange={datechangeHandler} value={enteredDate}/>
            </div>
            {/* button fur add */}
            <div className="new-expense-action">
                <button type="submit">Add</button>

            </div>
        </div>
    </form>

}

export default ExpenseForm;