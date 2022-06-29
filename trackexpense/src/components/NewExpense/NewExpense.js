import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
function NewExpense(props) {
  const [show,setShow]=useState(false);
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
        setShow(false);
    };
    const startShowingHandler=()=>{
        setShow(true);
    }
    const stopShowing=()=>{
      setShow(false);
    }
  return (
    <div className='new-expense'>
      {!show&&<button onClick={startShowingHandler}>Add new Expense</button>}
      {show&&<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopShowing}/>}
    </div>
  )
}

export default NewExpense