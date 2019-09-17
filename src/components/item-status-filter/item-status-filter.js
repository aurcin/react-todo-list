import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttonData = [
    { name:'all', label:'All' },
    { name:'active', label:'Active' },
    { name:'done', label:'Done' },
  ];


  
  render() {
    const active = this.props.filterToggle;
    const buttons = this.buttonData.map( ({ name, label }) => {
       const clazz = (active===name) ? 'btn-active' : 'btn-regular';
      return  <div key={ name }
                  className={`btn ${clazz}`}
                  onClick={ () => this.props.changeFilterToggle(name) }
                >
                  { label }
                </div>
    })

    return (
      <div className="status-filter">
        { buttons }
      </div>
    );
  }
};
