const Task = require('../models/Task');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Server error while fetching tasks' });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, priority, duration, category } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: 'Task title is required' });
    }

    if (!duration || Number(duration) <= 0) {
      return res.status(400).json({ message: 'Duration must be a positive number' });
    }

    const newTask = await Task.create({
      title: title.trim(),
      priority: priority || 'Medium',
      duration: Number(duration),
      category: category || 'Personal'
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: 'Server error while creating task' });
  }
};

const toggleTaskComplete = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.isCompleted = !task.isCompleted;
    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error toggling task complete status:', error);
    res.status(500).json({ message: 'Server error while updating task' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Server error while deleting task' });
  }
};

module.exports = {
  getTasks,
  createTask,
  toggleTaskComplete,
  deleteTask
};
