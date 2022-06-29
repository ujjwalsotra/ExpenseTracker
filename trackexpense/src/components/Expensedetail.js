import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expensedetail.css'
import Expensefilter from './NewExpense/Expensefilter'
import ExpensesChart from './NewExpense/ExpensesChart';
function Expensedetail(props) 
{
  const [year,setYear]=useState('2022');
  const  filterChangeHandler=(selectedYear)=>{
    setYear(selectedYear);
  };
  const filteredExpenses=props.item.filter(expense=>{
    return expense.date.getFullYear().toString()===year;
  });
  return (
    <div>
    <div className='expense-detail'>
        <Expensefilter selected={year} onfilterChange={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length===0?<h2 className='error'>NO EXPENSES THIS YEAR</h2>:
      filteredExpenses.map(e=><ExpenseItem 
        key={e.id}
        title={e.title}
        price={e.price}
        date={e.date}/>
        )}
    </div>
     </div>
  )
}

export default Expensedetail