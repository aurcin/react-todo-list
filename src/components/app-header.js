import React from 'react';

const AppHeader = () => {
  return(
    <div>
      <span> { new Date().toDateString() } </span>
      <h1>Todo list</h1>
    </div>
  );
};

export default AppHeader;