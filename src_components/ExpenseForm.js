import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">Amount</label>
                <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
