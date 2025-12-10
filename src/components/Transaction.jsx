import React from 'react';
import '../components/Component.css';

// Accept the symbol prop
const Transaction = ({ transaction, onDelete, symbol }) => {
  const transactionClass = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <div className={`list-item ${transactionClass}`}> 
      {/* Transaction description */}
      <div>{transaction.text}</div> 
      {/* Transaction amount with symbol */}
      <span>
        {transaction.amount < 0 ? '-' : '+'}{symbol}{Math.abs(transaction.amount).toFixed(2)}
      </span>
      <button 
        onClick={() => onDelete(transaction.id)} 
        className="delete-btn"
      >
        ✕
      </button>
    </div>
  );
};

export default Transaction;