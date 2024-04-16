import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='display'>
                            {/* Add Budget component here */}
                            <div className='col-sm position-row'>
                                <Budget />
                             </div>   
                               
                            {/* Add Remaining component here */}
                            <div className='col-sm position-row'>
                                <Remaining />
                            </div> 

                            {/* Add ExpenseTotal component here  */}
                            <div className='col-sm position-row'>
                                <ExpenseTotal />
                            </div>

                            <div className='col-sm position-row'>
                                <Currency />
                            </div>   

                            {/* Add ExpenseList component here */}
                            <div className='col-sm position-row widget-full'>
                                <ExpenseList />
                            </div>

                           { /* Add AllocationForm component here under */}
                            <div className='col-sm position-row widget-form'>
                                <AllocationForm/>
                            </div>    

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
