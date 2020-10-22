import axios from 'axios';

export const getTodos = async () => {
  try {
    const result = await axios.get('api/v1/todo');
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const addTodo = async task => {
  try {
    const result = await axios.post('api/v1/todo', { task: task });
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
