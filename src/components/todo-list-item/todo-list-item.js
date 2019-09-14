import React,  { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done,
      };
    });
  };

  onImportantClick = () => {
    this.setState(({important}) => {
      return {
        important: !important,
      };
    });
  };

  render() {

    const { task, onDeleteClick } = this.props;  
    const { done, important } = this.state;

    let classNames = 'task-text';
    if (done) {
      classNames += ' done';
    };
    if (important) {
      classNames +=' red-text'
    };

    return (
      <div className="task">
        <div
          className={ classNames }
          onClick={ this.onLabelClick }
        >
          { task }
        </div>
        <i className="btn important fas fa-exclamation-circle" onClick={ this.onImportantClick}></i>
        <i className="btn delete fas fa-trash-alt" onClick={ onDeleteClick}></i>
      </div>
    );
  };
};
