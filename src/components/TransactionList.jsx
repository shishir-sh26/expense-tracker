import React from 'react';
// 1. Import Framer Motion components
import { motion, AnimatePresence } from 'framer-motion'; 

import Transaction from './Transaction';
import '../components/Component.css';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <>
      <h3>History</h3>
      
      {/* 2. motion.ul for the container, giving it a subtle fade-in */}
      <motion.ul 
        className="list"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 3. AnimatePresence handles components that are removed (deleted) */}
        <AnimatePresence>
          {transactions.map((transaction) => (
            // 4. Wrap each Transaction in a motion.li
            <motion.li
                key={transaction.id}
                
                // Animation for when the item enters (e.g., when adding)
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}

                // Animation for when the item exits (e.g., when deleting)
                exit={{ 
                    opacity: 0, 
                    height: 0, 
                    padding: 0, 
                    marginBottom: 0,
                    transition: { duration: 0.3 } 
                }}
            >
                <Transaction 
                    transaction={transaction} 
                    onDelete={onDelete} 
                />
            </motion.li>
          ))}
        </AnimatePresence>
        
        {transactions.length === 0 && (
            <p className="no-transactions">No transactions yet. Add one above!</p>
        )}
      </motion.ul>
    </>
  );
};

export default TransactionList;