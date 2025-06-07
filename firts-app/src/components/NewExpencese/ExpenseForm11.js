import { useState } from "react";
import "./ExpenseForm12.css";
const ExpenseForm =() =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount]= useState('');
    const[enteredDate, setenteredDate]= useState('');

    // define method of handler
    const titleChangeHandler =()=>{
        console.log('title change');
    }

    const amountchangeHandler =() => {
        console.log('test amount');
    }

    const datechangeHandler =() =>{
        console.log('test date ');
    }

  
    // fur form
    return <form>
        <div className="new-expense-controls">
            {/* title */}
            <div className="new-expense-control-test">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            {/* amount */}
             <div className="new-expense-control-test">
                <label>Amount</label>
                <input type="number" min="1" step="10" onChange={amountchangeHandler}/>
            </div>

            {/* date */}
             <div className="new-expense-control-test">
                <label>Date</label>
                <input type="date" min="2023-1-1" onChange={datechangeHandler}/>
            </div>
            {/* button fur add */}
            <div className="new-expense-action">
                <button type="submit">Add</button>

            </div>
        </div>
    </form>

}

export default ExpenseForm;