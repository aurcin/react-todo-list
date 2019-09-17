import React from 'react';

import './search-bar.css';
import SearchPanel from '../search-panel/search-panel';
import SearchFilter from '../item-status-filter/item-status-filter';

const SearchBar = ({ changeFilterKeyword, changeFilterToggle, filterToggle  }) => {
  return (
    <div className='searchBar'>
      <SearchPanel changeFilterKeyword={ changeFilterKeyword } />
      <SearchFilter changeFilterToggle={ changeFilterToggle } filterToggle={ filterToggle } />
    </div>
  );
}

export default SearchBar;