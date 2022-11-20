import React from 'react'
import { useState } from 'react'

const  TransactionForm = ({getData}) => {
    const[name,setName]=useState('');
    const[amount,setAmount]=useState('');
    
    const btnfun =(type,e)=>{
        e.preventDefault();
        if(name === '') return alert('You should fill the given fields ')
        const newAddition = {id:Date.now(),name:name.trim(),amount:parseInt(amount),type}
        getData(newAddition);
        setName('');
        setAmount('');
    }

  return (
    <div className='trans'>
      <h2>Add New Transactions</h2>
      <form >
      <div>
        <label >Name</label>
       <div> <input type="text" value={name} onChange={e=>setName(e.target.value)}/></div>
      </div>
      <div>
        <label >Amount</label>
        <div><input type="number"  value={amount} onChange={e=>setAmount(e.target.value)} /></div>
      </div>
      <div className="button">
        <button className='btn btn-success my-2 w-100' onClick={e =>btnfun ('income',e)}>Add Income</button>
        <button className='btn btn-danger  w-100' onClick={e =>btnfun ('expense',e)}>Add Expense</button>
      </div>
      </form>
    </div>
  )
}

export default  TransactionForm
