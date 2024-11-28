import React from 'react';
import Navbar from './components/navbar/navbar';
import Landingpage from './components/landingpage/landingpage';
import Herosection from './components/herosection/herosection';
import Valuescontent from './components/content/valuescontent';
import Prices from './components/content/prices';
import Pricelist from './components/content/pricelist';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Valuescontent/>
      <Prices/>
      <Pricelist/>
    </div>
  );
}

export default App;
