import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  
  render() {
    return (
      <div className="status-filter">
        <div className="btn">All</div>
        <div className="btn">Active</div>
        <div className="btn">Done</div>
      </div>
    );
  }
};
