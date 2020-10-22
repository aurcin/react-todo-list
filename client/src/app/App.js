import React, { useState, useEffect } from 'react';

import Input from '../components/input';
import TodoList from '../components/list';

import { getTodos } from '../services/todo_service';

const App = () => {
  const [todos, setTodos] = useState([]);

  const appendList = todo => {
    setTodos(prev => [...prev, todo]);
  };

  useEffect(() => {
    getTodos().then(result => setTodos(result.data));
  }, []);

  return (
    <>
      <Input appendList={appendList} />
      <TodoList todos={todos} />
    </>
  );
};

export default App;
