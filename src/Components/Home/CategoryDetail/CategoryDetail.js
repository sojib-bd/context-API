import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../../App';

const CategoryDetail = (props) => {
    const { name } = props.product
    return (
        <div>
            <p>CategoryDetail section</p>
            <p style={{ color: 'red' }}> Name: {name}</p>
        </div>
    );
};

export default CategoryDetail;