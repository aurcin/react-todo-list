import React from 'react';

import './add-task-panel.css';

const AddTaskPanel = ( {onAddClick}) => {
  return (
    <div className='addPanel'>
      <div className='addButton' onClick={ () => onAddClick('New added task')}>
        <i className="fas fa-file"></i>
      </div>
    </div>
  );
};

export default AddTaskPanel;