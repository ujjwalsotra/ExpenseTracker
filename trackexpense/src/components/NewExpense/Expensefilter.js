import React from 'react'
import './Expensefilter.css'
function Expensefilter(props) {
    const dropHandler=(event)=>{
       props.onfilterChange(event.target.value);
    }
  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter years</label>
            <select  value={props.selected} onChange={dropHandler}>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2020'>2019</option>
            </select>
        </div>
    </div>
  )
}

export default Expensefilter