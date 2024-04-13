import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
        setNewBudget(event.target.value);
    }


    // if(budget < totalExpenses) {
    //     setNewBudget(totalExpenses + 10);
    //     dispatch({
    //         type: 'SET_BUDGET',
    //         payload: totalExpenses + 10
    //     });
    //     alert("You cannot reduce the budget value lower than the spending");
    // }

    return (
<div className='alert alert-secondary widgetDiv'>
    <span>Budget: {currency} </span>
        <input className="input" type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
}
export default Budget;