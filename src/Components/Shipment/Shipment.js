import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(categoryContext)
    return (
        <div>
            <h2>This is Shipment</h2>

            <button onClick={() => setCategory('mobile')}> Mobile</button>
        </div>
    );
};

export default Shipment;