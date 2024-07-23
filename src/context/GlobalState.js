import React, {createContext, useReducer, useEffect} from 'react'
import { appReducer } from "./AppReducer"



//Initial State
const InitialState = () => {
  const savedTransactions = localStorage.getItem('transactions');
  return {
    transactions: savedTransactions ? JSON.parse(savedTransactions) : []
  };
};


//Create Context
export const GlobalContext = createContext(InitialState);






//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {} , InitialState)
 

  useEffect(() => {
    // Update localStorage whenever transactions change
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);





// Actions

const deleteTransaction = (id) => {
     dispatch({
       type: "DELETE_TRANSACTION",
       payload: id
     })

}

const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    })

}






  return (
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }} >
        {children}
    </GlobalContext.Provider>
  )
}

