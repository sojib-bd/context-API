import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { useContext } from 'react';
import { categoryContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const allProducts = [
    { name: 'Lenovo', category: 'laptop' }, { name: 'Asus', category: 'laptop' }, { name: 'Dell', category: 'laptop' },
    { name: 'Samsung', category: 'mobile' }, { name: 'Nokia', category: 'mobile' }, { name: 'Apple', category: 'mobile' },
    { name: 'Canon', category: 'camera' }, { name: 'Nikkon', category: 'camera' }, { name: 'Sony', category: 'camera' }
]

const Categories = () => {
    const [category] = useContext(categoryContext)
    const [product, setProduct] = useState([]);

    useEffect(() => {
        console.log(category);
        const matchProduct = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProduct(matchProduct)
    }, [category])
    return (
        <div>
            <h3>Categories section : {category}</h3>
            {
                product.map(pd => <CategoryDetail
                    key={pd.name}
                    product={pd} />)
            }
        </div>
    );
};

export default Categories;