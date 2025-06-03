import "./ExpenseItems2.css";
import Card from "../UI/Card77";
import ExpenseDate from './ExpensDate5';
import React, {useState} from "react";

function ExpenseItem(props) {
//   let date = new Date(2025, 2, 2);
//   let price = 50000;
//   let title = "Test";

//   Events * in alles DOM Element man kannn Event hinzufügen
// let title = props.title;
// ----------------------------------------------------------------
// useState(initialValue) => {value, setter}
// Title State
const [title,setTitle] = useState(props.title);
const clickHandler =() =>{
  // title = 'change by click';
  // console.log(title);
  setTitle(title + '/Ich bin ein test');
  console.log(title);
}
// ----------------------------------------------------------------
// Date state
const [date,setDate] = useState(props.date);
const clickDHandler =() =>{
setDate(new Date(2030, 5, 15));
console.log(title);
}



  return (
    <Card className="expence-item">
      {/* <div>{props.date.toDateString()}</div> */}
      <ExpenseDate date={date}/>
      <div className="expence-item__description">
        <h2>{title}</h2>
        <div className="expence-item__price">{props.price}</div>
        <button onClick={clickHandler}> Change</button>
        <button onClick={clickDHandler}> dateTest</button>
        <button > im test </button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
