import React from 'react';
import Categories from './Categories/Categories';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const Home = () => {
    const [category] = useContext(categoryContext)

    return (
        <div>
            <h2>This is Home:{category} </h2>
            <Categories />

        </div>
    );
};

export default Home;