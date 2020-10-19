const Todo = require('../models/Todo');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get tasks
// @route   GET /api/v1/todo
// @access  Public
exports.getTasks = asyncHandler(async (req, res, next) => {
  const tasks = await Todo.find({});

  res.status(200).json({
    success: true,
    data: tasks,
    count: tasks.length,
  });
});

// @desc    Create task
// @route   POST /api/v1/todo
// @access  Public
exports.createTask = asyncHandler(async (req, res, next) => {
  const task = await Todo.create(req.body);

  res.status(201).json({
    success: true,
    data: task,
  });
});

// @desc    Update task
// @route   PUT /api/v1/todo/:id
// @access  Public
exports.updateTask = asyncHandler(async (req, res, next) => {
  let task = await Todo.findById(req.params.id);

  if (!task) {
    return next(
      new ErrorResponse(`There is no task with ${req.params.id} id`, 404)
    );
  }

  task = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: task,
  });
});

// @desc    Delete task
// @route   DELETE /api/v1/todo/:id
// @access  Public
exports.deleteTask = asyncHandler(async (req, res, next) => {
  const task = await Todo.findById(req.params.id);

  if (!task) {
    return next(
      new ErrorResponse(`There is no task with ${req.params.id} id`, 404)
    );
  }

  task.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
