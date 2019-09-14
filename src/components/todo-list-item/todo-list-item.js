import React,  { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {

    const { task, important = false } = this.props;
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
  }
}
