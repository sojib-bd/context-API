import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../../App';

const CategoryDetail = () => {
    const category = useContext(categoryContext);
    return (
        <div>
            <p>CategoryDetail section: {category}</p>
        </div>
    );
};

export default CategoryDetail;