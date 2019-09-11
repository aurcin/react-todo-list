import React from 'react';

import './todo-list.css';
import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({ todos }) => {
  
  const list = todos.map( element =>  {
    const { id, ...restElementProps } = element;
    return (
      <li key={ id }> 
        <TodoListItem { ...restElementProps } /> 
      </li>
      );
    });

  return (
    <ul>
      { list }
    </ul>
  );
};

export default TodoList;