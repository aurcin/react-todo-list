import React, { Component } from 'react';

import Service from '../../services/to-do-service';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import Menu from '../app-menu/app-menu';
import EditTaskWindow from '../edit-task-window/edit-task-window';

export default class App extends Component {

  service = new Service();

  state = {
    todoData: [],
    filterKeyword: '',
    filterToggleValue: 'all',
    editWindowOpen: false,
    editTaskId: null,
    editTaskLabel: '',
  };

  componentDidMount(){
    this.service.addTask(this.service.createTask('Task one'));
    this.service.addTask(this.service.createTask('Task two', true));
    this.service.addTask(this.service.createTask('Task three'));
    this.setState({
      todoData: this.service.data,
    })
  }

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
    if (taskText ===''){
      return;
    };

    const newTask = this.createTask(taskText);
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, newTask],
      };
    });
  };

  onEditTaskClick = (id) => {
    const editLabel = this.state.todoData.filter(el => el.id === id)[0].task;
    this.setState({
      editTaskId:id,
      editWindowOpen: true,
      editTaskLabel: editLabel,
    });
  };

  changeTask = (text) => {
    this.setState(({todoData, editTaskId}) => {
      const index = todoData
        .map(el => el.id)
        .indexOf(editTaskId);
        todoData[index].task = text;
      return {
        editWindowOpen: false,
        todoData,
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

  onMarkDoneClick = (id) => {
    this.setState( ({todoData}) => {
      return({
        todoData: this.toggleProperty(todoData, id, 'completed')
      });
    });
  };

  search = (items, keyword) => {
    if (keyword.length === 0 ){
      return items;
    };

    return items.filter( item => item.task.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
  };

  filterByStatus = (items, status) => {
    switch(status) {
      case 'all': return items;
      case 'active': return items.filter(item => !item.completed);
      case 'done': return items.filter(item => item.completed);
      default: return items;
    };
  };

  changeFilterKeyword = (keyword) => {
    this.setState({
      filterKeyword: keyword,
    });
  };

  changeFilterToggle = (value) => {
    this.setState({
      filterToggleValue: value,
    });
  };

  closeEditWindow = () => {
    this.setState({
      editWindowOpen: false,
    });
  };
  
  render() {

    const { todoData, filterKeyword, editWindowOpen, editTaskLabel } = this.state;
    const taskDoneCount = todoData.filter( task => task.completed).length;
    const taskLeftCount = todoData.length - taskDoneCount;

    const filteredTasks = this.search(this.filterByStatus(todoData, this.state.filterToggleValue), filterKeyword);
    
    return (
      <>
        <AppHeader done={ taskDoneCount } left={ taskLeftCount } />
        <Menu changeFilterKeyword={ this.changeFilterKeyword }
          changeFilterToggle={ this.changeFilterToggle }
          filterToggle={ this.state.filterToggleValue}
          onAddClick={ this.onAddTaskClick }
        />
        <TodoList 
          todos={ filteredTasks }
          onDeleteClick={ this.onDeleteTaskClick }
          onImportantClick={ this.onMarkImportantClick }
          onDoneClick={ this.onMarkDoneClick }
          onEditClick={ this.onEditTaskClick }
        />
        <EditTaskWindow shown={ editWindowOpen } label={ editTaskLabel } edit= { this.changeTask } close={ this.closeEditWindow }/>
      </>
    );
  };
};
