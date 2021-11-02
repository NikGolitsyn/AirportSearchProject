import React from 'react';
import SearchFlightInput from './SearchFlightInput.jsx';

const Search = () => (
  <div className="search-flight">
    <div className="search__content">
      <h2 className="search-flight__title">Search Flight</h2>
      <SearchFlightInput />
    </div>
  </div>
);

export default Search;
