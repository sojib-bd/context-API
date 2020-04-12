import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import { useState } from 'react';
import { createContext } from 'react';

export const categoryContext = createContext();



function App() {
  const [count, setCount] = useState(0)
  return (

    <div className="App">
      <categoryContext.Provider value={[count, setCount]}>
        <Header />
        <Home />
        <Shipment />
      </categoryContext.Provider>
    </div>
  );
}

export default App;

