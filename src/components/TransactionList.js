import React, { useContext } from 'react';
import Transaction from './Transaction.js';
import { GlobalContext } from '../context/GlobalState.js';

function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3 className="underlined"> History </h3>
            <ul id="transactionList">
                {
                    transactions.map((x, index) =>
                        <Transaction
                            key={x.id}
                            transaction={x}
                        />
                    )
                }
            </ul> 
        </>
    )
}

export default TransactionList
