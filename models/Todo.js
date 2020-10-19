const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: {
    trim: true,
    type: String,
    required: [true, 'Todo must have a task field'],
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
