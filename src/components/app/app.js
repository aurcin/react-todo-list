import React from 'react';

import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

const App = () => {
  const todoData = [
    { 
      id: 1,
      task: 'Task 1111111111111111111111 1111111111111111111111111 5555 444444444 aaaaaaa', 
      important: false,
    },
    { 
      id: 2,
      task: 'Task 2', 
      important: true,
    },
    { 
      id: 3,
      task: 'Task 3', 
      important: false,
    }
  ];

  return (
    <>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={ todoData } />
    </>
  );
} 

export default App;
