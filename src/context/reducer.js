function reducer(state, action) {

    switch(action.type) {
        case "DELETE_TRANSACTION" :
            return {
                ...state,
                transactions : state.transactions.filter(x => x.id !== action.payload)
            }

        case "ADD_TRANSACTION" :
            return {
                ...state,
                transactions : [
                    action.payload,        //pehle qk upar show hojaye
                    ...state.transactions
                ] 
            }

        default:
            return state;
    }
}

export default reducer;