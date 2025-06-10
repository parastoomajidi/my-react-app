import "./NewExpense10.css";
import Card from "../UI/Card77";
import ExpenseForm from "./ExpenseForm11";

const NewExpense=(props) =>{
    const saveExpenseDataHandler = enteredExpenseDate=>{
      const expenseData={
        ...enteredExpenseDate,
        id:Math.round(Math.random()*1000).toString()
      }
      props.onSaveExpenseData(expenseData);
    }
    return<Card className ="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
     </Card>
    }




export default NewExpense;
