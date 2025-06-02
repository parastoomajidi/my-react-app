import "./ExpenseItems2.css";
import Card from "./card7";
import ExpenseDate from './ExpensDate5';

function ExpenseItem(props) {
//   let date = new Date(2025, 2, 2);
//   let price = 50000;
//   let title = "Test";
//   
  return (
    <Card className="expence-item">
      {/* <div>{props.date.toDateString()}</div> */}
      <ExpenseDate date={props.date}/>
      <div className="expence-item__description">
        <h2>{props.title}</h2>
        <div className="expence-item__price">{props.price}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
