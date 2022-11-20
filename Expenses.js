import React from 'react'

const Expenses = ({income,expense}) => {
  return (
    <div className='expenses'>
      <h2>Your Balance</h2>
      <div style={{fontSize:"25px"}}>₹{income - expense}</div>
      <div className="income">
        <h2>Income</h2>
        <div className='income-amt'>₹{income}</div>
      </div>
      <div className="expense">
        <h2>Expense</h2>
        <div className='expense-amt'>₹{expense}</div>
      </div>
    </div>
  )
}

export default Expenses
