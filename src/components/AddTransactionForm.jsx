import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../components/Component.css';

const AddTransactionForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(''); // Initialize as empty string
  // State to toggle between Income (true) and Expense (false)
  const [isIncome, setIsIncome] = useState(false); 

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text.trim() || !amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid description and a positive amount.');
      return;
    }

    // Determine the final amount based on the toggle state
    const finalAmount = isIncome ? +amount : -parseFloat(amount);

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text.trim(),
      amount: finalAmount,
    };

    onAdd(newTransaction);

    // Clear form fields
    setText('');
    setAmount('');
    setIsIncome(false); // Reset to default (Expense)
  };

  return (
    <motion.form 
      onSubmit={onSubmit} 
      className="form-style"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Add New Transaction</h3>
      
      {/* 1. INCOME / EXPENSE TOGGLE BUTTONS */}
      <div className="transaction-type-toggle">
        <button
          type="button"
          className={`toggle-btn ${isIncome ? 'active-income' : ''}`}
          onClick={() => setIsIncome(true)}
        >
          Income
        </button>
        <button
          type="button"
          className={`toggle-btn ${!isIncome ? 'active-expense' : ''}`}
          onClick={() => setIsIncome(false)}
        >
          Expense
        </button>
      </div>

      {/* 2. FLOATING LABEL INPUT: Text */}
      <div className="form-control floating-label">
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=" " // Required for floating label CSS
          required
        />
        <label htmlFor="text">Description (e.g., Salary, Coffee)</label>
      </div>
      
      {/* 3. FLOATING LABEL INPUT: Amount */}
      <div className="form-control floating-label">
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder=" " // Required for floating label CSS
          required
          min="0.01"
          step="0.01"
        />
        <label htmlFor="amount">Amount (e.g., 500)</label>
      </div>
      
      {/* 4. SUBMIT BUTTON */}
      <motion.button 
        type="submit" 
        className={`btn submit-btn ${isIncome ? 'btn-income' : 'btn-expense'}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isIncome ? 'Add Income' : 'Add Expense'}
      </motion.button>
    </motion.form>
  );
};

export default AddTransactionForm;