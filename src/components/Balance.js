import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

function Balance() {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(x => x.amount);
    const total   = amounts.reduce((acc, item) => (acc + item), 0);

    return (
        <>
            <h4 id="balance"> Your Balance        </h4>
            <h1 id="total">   ${total.toFixed(2)} </h1>
        </>
    )
}

export default Balance;