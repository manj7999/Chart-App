import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'; // Import the ExpenseDetails component


const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
    </div>
  );
};

export default ExpenseItem;
