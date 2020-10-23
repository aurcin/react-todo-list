import React, { useState } from 'react';

import { addTodo } from '../../services/todo_service';

const Input = ({ appendList }) => {
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task && task.length > 0) {
      addTodo(task)
        .then(res => {
          if (res.data) {
            appendList(res.data);
            setTask('');
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log('input field is required');
    }
  };

  const handleChange = e => {
    setTask(e.target.value);
  };

  return (
    <div className='input'>
      <div className='input__container'>
        <input
          className='input__field'
          type='text'
          onChange={handleChange}
          value={task}
        />
        <button
          className='input__submit-btn'
          onClick={addTask}
          title='Add new task'
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default Input;
