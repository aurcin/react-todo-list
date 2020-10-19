class ToDoService {
   data = [];
   nextId = 0;

   createTask(taskText, important=false) {
    return {
      id: this.nextId++,
      task: taskText,
      important,
      completed: false,
    };
  };

  addTask(task) {
    this.data.push(task);
    return this.data;
  }

}

export default ToDoService;