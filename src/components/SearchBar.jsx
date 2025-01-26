// SearchBar.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="d-flex justify-content-center m-5">
      <TextField 
        label="Buscar Productos" 
        variant="outlined" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        style={{ marginRight: '10px' }} 
      />
      <Button variant="contained" onClick={handleSearch}>Buscar</Button>
    </div>
  );
};

export default SearchBar;
