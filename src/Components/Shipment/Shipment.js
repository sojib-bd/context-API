import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
    const [count, setCount] = useContext(categoryContext)
    return (
        <div>
            <h2>This is Shipment</h2>

            <button onClick={() => setCount(count + 1)}> Increment from category</button>
        </div>
    );
};

export default Shipment;