import React, { Component } from 'react';

import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchBar from '../search-bar/search-bar';
import AddTaskPanel from '../add-task-panel/add-task-panel';

export default class App extends Component {

  nextId = 100;

  state = {
    todoData: [
      { 
        id: 1,
        task: 'Task 1111111111111111111111 1111111111111111111111111 5555 444444444 aaaaaaa', 
      },
      { 
        id: 2,
        task: 'Task 2', 
      },
      { 
        id: 3,
        task: 'Task 3', 
      }
    ],
  };

  onDeleteTaskClick = (id) => {
    this.setState(({todoData})=> {
      const newList = todoData.filter( el => el.id !== id);
      return {
        todoData: newList,
      };
    });
  };

  onAddTaskClick = (taskText) => {
    this.setState(({todoData}) => {
      const newTask = {
        id: this.nextId++,
        task: taskText,
      };

      return {
        todoData: [...todoData, newTask],
      };
    });
  };
  
  render() {
    return (
      <>
        <AppHeader />
        <SearchBar />
        <TodoList 
          todos={ this.state.todoData }
          onDeleteClick={ this.onDeleteTaskClick }
        />
        <AddTaskPanel onAddClick={ this.onAddTaskClick } />
      </>
    );
  };
};
