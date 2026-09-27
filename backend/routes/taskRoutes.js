const express = require('express');
const {
  getTasks,
  createTask,
  toggleTaskComplete,
  deleteTask
} = require('../controllers/taskController');

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id/complete', toggleTaskComplete);
router.delete('/:id', deleteTask);

module.exports = router;
