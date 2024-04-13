import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('');

    const handleCurrencyChange = (event) => {
        const value = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
        setCurrency(value);
    }

    return (
        <div>
            <div>
                <select className="widgetDiv currencySelector" id="inputCurrencySelect" onChange={handleCurrencyChange}>
                    <option value="€" name="euro">Currency (€ Euro)</option>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="₹" name="ruppee">₹ Ruppee</option>
                </select>
            </div>
        </div>
    )
};
export default Currency;