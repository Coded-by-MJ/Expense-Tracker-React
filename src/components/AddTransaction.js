import { useState, useContext } from "react"
import { GlobalContext } from '../context/GlobalState'





export const AddTransaction = () => {

    const [amount, setAmount] = useState('')
    const [text, setText] = useState("")

  const { addTransaction } = useContext(GlobalContext)


  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }


    const handleSubmit = (e) => {
      e.preventDefault();
      if (amount.length === 0 || text.length === 0) {
        alert('Please add a text and amount');
        return;
      }

      const newTransaction = {
        id: generateID(),
        text,
        amount: +amount
      }

      addTransaction(newTransaction)
      setAmount('')
      setText('')
    }


  return (
     <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text"
           value={text}
           onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount"
           value={amount}
           onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
     
     
     </>
  )
}
