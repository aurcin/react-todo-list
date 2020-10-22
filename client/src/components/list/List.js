import React from 'react';

const List = ({ todos }) => {
  return (
    <ul className='todos__list'>
      {todos && todos.length > 0 ? (
        todos.map(item => {
          return <li key={item._id}>{item.task}</li>;
        })
      ) : (
        <li>Nothing to do</li>
      )}
    </ul>
  );
};

export default List;
