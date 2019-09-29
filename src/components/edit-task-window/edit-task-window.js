import React, { Component } from 'react';

import './edit-task-window.css';

export default class EditWindow extends Component {

  state = {
    label: this.props.label,
  }

  onAddTaskInputChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { edit } = this.props;
    const { label } = this.state;

    event.preventDefault();
    edit(label);
    this.setState({
      label:'',
    });
  };

  onClose = () => {
    const { close } = this.props;
    close();
    this.setState({
      label:'',
    });
  };
  
  render() {

    const { shown } = this.props
    let clazz = 'edit-task-window';
    if(!shown){
      clazz += " hidden";
    };

    return (
      <div className={ clazz }>
      <div className="edit-task-window-body">
      <i className="fas btn cancel-task fa-window-close" onClick={ this.onClose }></i>
        <form 
          className='addPanel'
          onSubmit={ this.onSubmit}
        >
          <input
            type='text'
            placeholder={ this.props.label }
            onChange={ this.onAddTaskInputChange }
            value={ this.state.label}
          />
          <div className='addButton' onClick={ this.onSubmit }>
          <div>
            <i className='fas fa-edit'></i>
          </div>
          </div>
        </form>
      </div>
     </div>
    );
  };
};
