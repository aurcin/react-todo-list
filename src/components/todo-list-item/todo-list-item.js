import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ task, important = false }) => {
  const className = important ? 'red-text' : '';

  return (
    <div className="task">
      <div className={'task-text ' + className }>
        { task }
      </div>
      <i className="btn important fas fa-exclamation-circle"></i>
      <i className="btn delete fas fa-trash-alt"></i>
    </div>
  );
};

export default TodoListItem;

