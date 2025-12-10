import React, { useState, useEffect } from 'react';
import './App.css';

// Import all components (necessary to resolve the ReferenceError previously encountered)
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';

// Function to fetch data from Local Storage or return an empty array
const getInitialTransactions = () => {
  const storedTransactions = localStorage.getItem('transactions');
  return storedTransactions ? JSON.parse(storedTransactions) : [];
};

function App() {
  const [transactions, setTransactions] = useState(getInitialTransactions);

  // useEffect to save transactions to Local Storage whenever the state changes
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [
      transaction,
      ...prevTransactions,
    ]);
  };

  // Function to delete a transaction by its ID
  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  // 3. Calculate Balances
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);

  return (
    <div className="container">
      <h1>💰 Personal Tracker</h1>
      {/* Pass the Rupee symbol and calculated amounts as props */}
      <Balance total={total} symbol="₹" />
      <IncomeExpense income={income} expense={expense} symbol="₹" />

      <TransactionList transactions={transactions} onDelete={deleteTransaction} symbol="₹" />
      <AddTransactionForm onAdd={addTransaction} />
    </div>
  );
}

export default App;