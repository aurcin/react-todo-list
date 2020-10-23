import React from 'react';

const ListItem = ({ todo, onDelete }) => {
  return (
    <li className='todo__item'>
      <div className='todo__task'>{todo.task}</div>
      <i className='btn edit fas fa-edit' title='Edit task'></i>
      <i
        className='btn important fas fa-exclamation-circle'
        title='Toggle important'
      ></i>
      <i
        className='btn delete fas fa-trash-alt'
        title='Delete task'
        onClick={() => onDelete(todo._id)}
      ></i>
    </li>
  );
};

export default ListItem;
