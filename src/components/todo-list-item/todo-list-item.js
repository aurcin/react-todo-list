import React from 'react';

import './todo-list-item.css';

const TodoListItem = (props) => {
  const { task, completed, important, onDeleteClick, onImportantClick, onDoneClick, onEditClick } = props;  
  
  let classNames = 'task-text';
  let taskClassNames = 'task';
  if (completed) {
    classNames += ' done';
    taskClassNames += ' task-done';
  };
  if (important) {
    classNames +=' red-text'
  };

  return (
     <div className={ taskClassNames }>
      <div
        className={ classNames }
        onClick={ onDoneClick }
      >
        { task }
      </div>
      <i className="btn edit fas fa-edit" onClick={ onEditClick } title="Edit task" ></i>
      <i className="btn important fas fa-exclamation-circle" onClick={ onImportantClick } title="Toggle important"></i>
      <i className="btn delete fas fa-trash-alt" onClick={ onDeleteClick } title="Delete task"></i>
    </div>
  );
};

export default  TodoListItem;
