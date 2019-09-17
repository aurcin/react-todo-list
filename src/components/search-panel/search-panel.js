import React from 'react';

import './search-panel.css';

const SearchPanel = ({changeFilterKeyword}) =>  {
  return <input placeholder="search" onChange={ (e) => changeFilterKeyword(e.target.value) }/>
}

export default SearchPanel;
