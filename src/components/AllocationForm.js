
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

        if (cost > remaining) {
            alert("The value cannot exceed remaining funds  £" + remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div className="allocationForm">
            <div className="widgetDiv">
                <label htmlFor="inputGroupSelect01">Department</label>
                <select className="widget-margin" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                    <option defaultValue>Choose...</option>
                    <option value="Marketing" name="marketing"> Marketing</option>
                    <option value="Sales" name="sales">Sales</option>
                    <option value="Finance" name="finance">Finance</option>
                    <option value="HR" name="hr">HR</option>
                    <option value="IT" name="it">IT</option>
                </select>
            </div>

            <div className="widgetDiv">
                <label htmlFor="inputGroupSelect02">Allocation</label>
            
                <select className="widget-margin" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                </select>
            </div>

            <div className="widgetDiv">
                <p className="set-display">{currency}</p>
                <input
                    className="input widget-margin"
                    required='required'
                    type='number'
                    id='cost'
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}>
                </input>

                <button className="btn btn-primary widget-margin" onClick={submitEvent}>
                    Save
                </button>
            </div>

        </div>
    );
};

export default AllocationForm;