const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskcontroller');

router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:title', taskController.getTaskByTitle);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:title', taskController.updateTaskByTitle);
router.delete('/tasks/:title', taskController.deleteTaskByTitle);

module.exports = router;
