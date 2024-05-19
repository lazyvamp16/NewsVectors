import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dropdown.css'; // Import your CSS file

const Dropdown = () => {
  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState('');

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:8000/symbols_json/')  // Adjust the URL to your API endpoint
      .then(response => {
        setSymbols(response.data.symbols);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedSymbol(event.target.value);
  };

  
  return (
    <div className="container mt-4"> 
      <label htmlFor="symbol-dropdown" className="form-label">Choose a symbol:</label> 
      <select className="form-select " id="symbol-dropdown" value={selectedSymbol} onChange={handleChange}>
        <option value="">--Select a symbol--</option>
        {symbols.map((symbol, index) => (
          <option key={index} value={symbol}>{symbol}</option>
        ))}
      </select>
    </div>
  );




};

export default Dropdown;
