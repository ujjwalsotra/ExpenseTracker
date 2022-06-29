import React, { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
    const [enteredtitle,setEnteredTitle]=useState('');
    const [enteredPrice,setEnteredPrice]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };
    const priceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };
    const addClickHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredtitle,
            price:+enteredPrice,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
    }
  return (
    <form onSubmit={addClickHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" value={enteredtitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Price</label>
            <input type='number' min='0.01' step='0.01' value={enteredPrice} onChange={priceChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" min="2019-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
        </div>
        <div className='new_expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm