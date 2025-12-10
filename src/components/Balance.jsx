import React from 'react';
import '../components/Component.css';

// Accept the symbol prop
const Balance = ({ total, symbol }) => { 
  const sign = total >= 0 ? '' : '-';
  const balanceClass = total >= 0 ? 'plus' : 'minus';
  
  return (
    <div className="balance-box">
      <h4>YOUR CURRENT BALANCE</h4>
      <h2 className={balanceClass}>
        {/* Use the symbol prop */}
        {sign}{symbol}{Math.abs(total).toFixed(2)} 
      </h2>
    </div>
  );
};

export default Balance;