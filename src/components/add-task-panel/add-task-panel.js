import React, { Component } from 'react';

import './add-task-panel.css';

export default class AddTaskPanel extends Component {

  state = {
    label: '',
  };

  onAddTaskInputChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddClick(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form 
        className='addPanel'
        onSubmit={ this.onSubmit}
      >
        <input
          type='text'
          placeholder='Add task'
          onChange={ this.onAddTaskInputChange }
          value={ this.state.label}
        />
        <div className='addButton' onClick={ this.onSubmit }>
          <i className='far fa-calendar-plus'></i>
        </div>
      </form>
  );
  };
};
