import ExpenseItem from './ExpenseItems1';
import './ExpenseList16.css';
const ExpenseList = (props)=>{
    if(props.items.length===0){
        return <h2 className='expense-list-fallback'>No Expense Found.</h2>
    }
    return(
    <li className='expense-list'>
        {
      props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
} 
    </li>
    )
   
};
export default ExpenseList;