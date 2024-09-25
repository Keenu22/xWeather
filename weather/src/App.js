import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';

const App = () => {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(city); // mtlb jb search button click hua jbhi state set hui aur pass hui toi another component
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city name"
          required
        />
        <button type="submit">Search</button>
      </form>
      {query && <Weather city={query} />}
    </div>
  );
};

export default App;

