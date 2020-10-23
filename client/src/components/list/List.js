import React from 'react';

import ListItem from './list_item';
import { deleteTodo } from '../../services/todo_service';

const List = ({ todos, onRemove }) => {
  const onDelete = id => {
    deleteTodo(id)
      .then(result => {
        if (result.success) {
          onRemove(id);
        }
      })
      .catch(error => console.log(error));
  };

  let list = <ListItem todo={{ task: 'Noting to do' }} />;
  if (todos && todos.length > 0) {
    list = todos.map(item => (
      <ListItem key={item._id} todo={item} onDelete={onDelete} />
    ));
  }

  return <ul className='todo__list'>{list}</ul>;
};

export default List;
