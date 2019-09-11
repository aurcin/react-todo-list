import React from 'react';

import './search-bar.css';
import SearchPanel from '../search-panel/search-panel';
import SearchFilter from '../item-status-filter/item-status-filter';

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <SearchPanel />
      <SearchFilter />
    </div>
  );
}

export default SearchBar;