import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'


const ExpenseItem = (props) => {

  const clickHandler = () => {
    console.log('clicked!!!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
       <h2>{props.title}</h2>
       <div className="expense-item_price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>

  );
};

export default ExpenseItem;
