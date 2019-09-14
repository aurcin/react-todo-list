import React, { Component } from 'react';

import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchBar from '../search-bar/search-bar';
import AddTaskPanel from '../add-task-panel/add-task-panel';

export default class App extends Component {

  nextId = 0;

  state = {
    todoData: [
     this.createTask('Task one'),
     this.createTask('Task two', true),
     this.createTask('Task three'),
    ]
  };

  createTask(taskText, important=false) {
    return {
      id: this.nextId++,
      task: taskText,
      important,
      completed: false,
    };
  };

  toggleProperty(arr, id, propertyName) {
    const taskIndex = arr.findIndex( el => el.id === id);
    const clickedTask = {...arr[taskIndex]};
    clickedTask[propertyName] = !clickedTask[propertyName];
    return [
          ...arr.slice(0, taskIndex),
          clickedTask,
          ...arr.slice(taskIndex + 1),
        ];
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
    const newTask = this.createTask(taskText);
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, newTask],
      };
    });
  };

  onMarkImportantClick = (id) => {
    this.setState( ({todoData}) => {
      return({
        todoData: this.toggleProperty(todoData, id, 'important')
      });
    });
  };

  onMarkDoneClick= (id) => {
    this.setState( ({todoData}) => {
      return({
        todoData: this.toggleProperty(todoData, id, 'completed')
      });
    });
  };
  
  render() {

    const { todoData } = this.state;
    const taskDoneCount = todoData.filter( task => task.completed).length;
    const taskLeftCount = todoData.length - taskDoneCount;
    
    return (
      <>
        <AppHeader done={ taskDoneCount } left={ taskLeftCount } />
        <SearchBar />
        <TodoList 
          todos={ todoData }
          onDeleteClick={ this.onDeleteTaskClick }
          onImportantClick={ this.onMarkImportantClick }
          onDoneClick={ this.onMarkDoneClick }
        />
        <AddTaskPanel onAddClick={ this.onAddTaskClick } />
      </>
    );
  };
};
