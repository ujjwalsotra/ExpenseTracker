import { useState } from 'react';
import './App.css';
import Expensedetail from './components/Expensedetail';
import NewExpense from './components/NewExpense/NewExpense';
const dummy=[
  {
    id:'a1',
    title:'Bought a 24 inch monitor',
    price: 11999,
    date: new Date(2022,5,19)
  },
  {
    id:'a2',
    title:'Gave money to a friend',
    price: 5000,
    date: new Date(2022,6,19)
  },
  {
    id:'a3',
    title:'Bought a new course',
    price: 1000,
    date: new Date(2022,5,26)
  },
  {
    id:'a4',
    title:'Paid electricity Bill',
    price: 2000,
    date: new Date(2022,5,29)
  }
]

function App() {
  const [expenses,setExpenses]=useState(dummy);
  const addExpenseHandler=(expense)=>
  {
    setExpenses(prevExpense=>{
      return [expense,...prevExpense];
      
    });
     // console.log(expense);
  }
 
  return (
    <div className="App">
     <h2>WELCOME BUDDY</h2>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expensedetail item={expenses}/>
    <div className='hello'>
      hello
    </div>
    </div>
  );
}

export default App;
