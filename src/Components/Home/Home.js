import React from 'react';
import Categories from './Categories/Categories';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const Home = () => {
    const count = useContext(categoryContext)

    return (
        <div>
            <h2>This is Home:{count}  </h2>
            <Categories />

        </div>
    );
};

export default Home;