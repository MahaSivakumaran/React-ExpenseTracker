import { useEffect,useState } from 'react'
import Expenses from './Expenses'
import TransactionForm from './Transaction Form'
import Transactionhistory from './Transactionhistory'
import './ExpenseTracker.css'

const ExpenseTracker = () => {
    const [income,setIncome]=useState(0);
    const[expense,setExpense]=useState(0);
    const[transactions,setTransactions]=useState([])

    // Render functionality

    useEffect(()=>{
        let getFromLocal = JSON.parse(localStorage.getItem('expensetracker'))
        if(getFromLocal){
            setTransactions(getFromLocal)
        }else{
            calVal()
        }
            
    },[])
    useEffect(()=>{
        calVal()
    },[transactions])

    // Calculate values by some logics

    const calVal = () =>{
        let income = 0, expense = 0;
        transactions.forEach(data =>{
            if(data.type === 'income'){
                income += data.amount
            } else 
            if(data.type === 'expense'){
                expense += data.amount
            }
            const saveData = () => {localStorage.setItem('expensetracker',JSON.stringify(transactions))}
            saveData();
        })
        setIncome(income);
        setExpense(expense);
    }

    // Getting Data from Form Component

    const getData = value =>{
        const newData = [...transactions,value]
        setTransactions(newData)
        console.log(newData)
    }
    
    // Delete Functionality

    const del = id =>{
        const deleteItem = transactions.filter(data=> data.id !== id)
        setTransactions(deleteItem)
        localStorage.setItem('expensetracker',JSON.stringify(deleteItem))
    }

  return (
    <>
      <h1 className='text-center mt-5 text-primary'> ExpenseTracker</h1>
    
    <div className='tracker-container'>
      <Expenses income={income} expense={expense}/>
      <Transactionhistory api={transactions} del={del}/>
      <TransactionForm getData={getData}/>
    </div>
   
    </>
  )
}

export default ExpenseTracker
