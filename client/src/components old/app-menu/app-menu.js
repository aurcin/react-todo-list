import React, { Component } from 'react';

import './app-menu.css';

import SearchPanel from '../search-panel/search-panel';
import SearchFilter from '../item-status-filter/item-status-filter';
import AddTaskPanel from '../add-task-panel/add-task-panel';

export default class MenuBar extends Component {

  state = {
    classes: {
      search:'hidden',
      add:'hidden',
      filter:'hidden',
    },
  };

  onToggle = (text) => {
    this.setState(({ classes }) => {
      if (classes[text] === '' ){
        classes[text] = 'hidden';
      } else {
        classes = {
          search:'hidden',
          add:'hidden',
          filter:'hidden',
        };
        classes[text] = '';
      }
      return {
        classes,
      }
    })
  };

  render(){
    const { classes } = this.state;
    const { changeFilterKeyword, changeFilterToggle, filterToggle, onAddClick } = this.props;

    return(
      <div className='menu'>
        <div className="menu-top">
          <div className="menu-top-left"></div>
          <div className="menu-top-middle">
            <i className="fas fa-search" onClick={ () => this.onToggle('search')}></i>
            <i className="fas fa-plus-square" onClick={ () => this.onToggle('add')}></i>
            <i className="fas fa-filter" onClick={ () => this.onToggle('filter')}></i>
          </div>
          <div className="menu-top-right"></div>
        </div>
        <div className="menu-bottom">
          <div className={ classes.search } >
            <SearchPanel changeFilterKeyword={ changeFilterKeyword } />
           </div>
          <div className={ classes.add } >
            <AddTaskPanel onAddClick={ onAddClick }/>
          </div>
          <div className={ classes.filter } >
            <SearchFilter changeFilterToggle={ changeFilterToggle } filterToggle={ filterToggle } />
          </div>
        </div>
      </div>
    );
  };
};
