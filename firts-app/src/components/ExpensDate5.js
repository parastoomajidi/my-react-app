import './ExpenseDate6.css';

function ExpenseDate(props) {
  const month =props.date.toLocaleString('fa-Ir', {month:'long'});
  const year = props.date.toLocaleString('fa-Ir', {year:'numeric'});
  const day = props.date.toLocaleString('fa-Ir',{day:'2-digit'});
  
  return (
    <div className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
