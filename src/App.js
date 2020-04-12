import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import { useState } from 'react';
import { createContext } from 'react';

export const categoryContext = createContext();



function App() {
  const [category, setCategory] = useState('laptop')
  return (

    <div className="App">
      <categoryContext.Provider value={[category, setCategory]}>
        <Header />
        <Home />
        <Shipment />
      </categoryContext.Provider>
    </div>
  );
}

export default App;

