import React from 'react'

const Transactionhistory = ({api,del}) => {
  return (
    <div className='th'>
      <h2>Transaction History</h2>
      <ol>
        {api.map(data=>{
            return <li style={{backgroundColor : data.type === 'income' ? "#198754" :"#dc3545"}} key={data.id}><span style={{textTransform:'capitalize'}}>{data.name} - ₹{data.amount}</span>  <button onClick={()=>del(data.id)}><i className="fa-solid fa-trash"></i></button></li>
        })}
      </ol>

    </div>
  )
}

export default Transactionhistory
