import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
    const expenses = [
        { id: 1, amount: '$50', description: 'Groceries' },
        { id: 2, amount: '$100', description: 'Electricity bill' }
    ];

    return (
        <ul className="expense-list">
            {expenses.map((expense) => (
                <li key={expense.id}>
                    {expense.description}: {expense.amount}
                </li>
            ))}
        </ul>
    );
}

export default ExpenseList;
