import "./NewExpense10.css";
import Card from "../UI/Card77";
import ExpenseForm from "./ExpenseForm11";

const NewExpense = () => {
  const saveExpenseDataHandler = enterdexpeneDate=>{
    console.log(enterdexpeneDate);
    console.log("test");
  }
  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}></ExpenseForm>
    </Card>
  );
};

export default NewExpense;
