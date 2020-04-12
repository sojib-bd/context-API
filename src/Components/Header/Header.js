import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [count, setCount] = useContext(categoryContext)
    return (
        <div>
            <h2>This is Header:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Header;