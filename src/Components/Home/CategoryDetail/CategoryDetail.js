import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../../App';

const CategoryDetail = () => {
    const [count] = useContext(categoryContext);
    return (
        <div>
            <p>CategoryDetail section: {count}</p>
        </div>
    );
};

export default CategoryDetail;