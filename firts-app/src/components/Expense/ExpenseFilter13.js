import './ExpenseFilter14.css';

const ExpenseFilter = props =>{
    const selectedYearChangeHandler = event=>{
        props.onSelectedYearChanged(event.target.value);
    }

return(
    <div className='expense-Filter'>
        <div className='expense-filter-control'>
            <label>year</label>
            <select value={props.selected} onChange={selectedYearChangeHandler}>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
            </select>
        </div>
    </div>
)
}

export default ExpenseFilter;