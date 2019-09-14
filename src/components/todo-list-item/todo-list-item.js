import React from 'react';

import './todo-list-item.css';

const TodoListItem = (props) => {
  const { task, completed, important, onDeleteClick, onImportantClick, onDoneClick } = props;  
  
  let classNames = 'task-text';
  if (completed) {
    classNames += ' done';
  };
  if (important) {
    classNames +=' red-text'
  };

  return (
     <div className="task">
      <div
        className={ classNames }
        onClick={ onDoneClick }
      >
        { task }
      </div>
      <i className="btn important fas fa-exclamation-circle" onClick={ onImportantClick }></i>
      <i className="btn delete fas fa-trash-alt" onClick={ onDeleteClick}></i>
    </div>
  );
};

export default  TodoListItem;
