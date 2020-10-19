const express = require('express');

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/todo');

const router = express.Router();

router.route('/').get(getTasks).post(createTask);

router.route('/:id').put(updateTask).delete(deleteTask);

module.exports = router;
