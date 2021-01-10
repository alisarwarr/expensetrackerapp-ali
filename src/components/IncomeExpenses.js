import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);
  
    const amounts = transactions.map(x => x.amount);
  
    const income = amounts
    .filter(x => x > 0)
    .reduce((acc, item) => (acc += item), 0)
    
    const expense = amounts
    .filter(x => x < 0)
    .reduce((acc, item) => (acc += item), 0)
   
    return (
        <div className="incomeExpences">
            <div>
               <h4 id="income"> Income </h4>
               <p className="money plus"> {income.toFixed(2)}   </p>
            </div>
            <div>
               <h4 id="expense"> Expense </h4>
               <p className="money minus"> {expense.toFixed(2)} </p>
            </div>
        </div>
    )
}

export default IncomeExpenses;