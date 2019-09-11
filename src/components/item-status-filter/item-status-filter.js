import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = () => {
  
  return (
    <div className="status-filter">
      <div className="btn">All</div>
      <div className="btn">Active</div>
      <div className="btn">Done</div>
    </div>
  );
};

export default ItemStatusFilter;