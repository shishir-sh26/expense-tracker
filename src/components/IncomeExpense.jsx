import React from 'react';
import '../components/Component.css';

// Accept the symbol prop
const IncomeExpense = ({ income, expense, symbol }) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>INCOME</h4>
        {/* Use the symbol prop */}
        <p className="money plus">+{symbol}{income}</p>
      </div>
      <div className="divider"></div>
      <div>
        <h4>EXPENSE</h4>
        {/* Use the symbol prop */}
        <p className="money minus">-{symbol}{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;