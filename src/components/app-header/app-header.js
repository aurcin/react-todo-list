import React from 'react';

import './app-header.css';

const AppHeader = () => {

  return(
    <header>
      <h1>Todo list</h1>
      <div className="date"> { new Date().toDateString() } </div>
      <div className="progress">1 more to do, 2 done</div>
    </header>
  );
};

export default AppHeader;