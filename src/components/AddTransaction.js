import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

function AddTransaction() {
    const [ text  , setText   ] = useState("");
    const [ amount, setAmount ] = useState(0);
  
    const { addTransaction } = useContext(GlobalContext);
  
    const onSubmit = (e) => {
       e.preventDefault();
       const newTransaction = {
          id     : Math.floor(Math.random() * 100000000),
          text,
          amount : Number(amount)
       }
       addTransaction(newTransaction);
    }
  
    return (
        <>
            <h3 className="underlined"> Add new transaction </h3>
            <form id="form" onSubmit={onSubmit}>
                <div>
                   <label> Text </label>
                   <input
                      type="text"
                      className="form-control"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Enter text..."
                   />
                </div>
 
                <div>
                   <label>
                      Amount
                      (-ve = expense, +ve = income)
                   </label>
                   <input
                      type="number"
                      className="form-control"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount..."
                   />
                </div>
 
                <button
                   className="btn btn-warning"
                   id="btnX"
                > add transaction </button>
            </form>
        </>
    )
}

export default AddTransaction;