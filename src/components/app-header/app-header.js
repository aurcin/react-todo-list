import React from 'react';

import './app-header.css';

const AppHeader = (props) => {

  const { done, left } = props;

  const progressText = left ? `${left} more to do, ${done} done` : 'There is no task to do'

  return(
    <header>
      <div className="date"> { new Date().toDateString() } </div>
      <h1>Todo list</h1>
      <div className="progress">{ progressText }</div>
    </header>
  );
};

export default AppHeader;