// controllers/taskController.js
const Task = require('../models/task');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single task by title
exports.getTaskByTitle = async (req, res) => {
    const title = req.params.title;
    try {
        const task = await Task.findOne({ title });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a task by title
exports.updateTaskByTitle = async (req, res) => {
    const title = req.params.title;
    try {
        const updatedTask = await Task.findOneAndUpdate({ title }, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a task by title
exports.deleteTaskByTitle = async (req, res) => {
    const title = req.params.title;
    try {
        const deletedTask = await Task.findOneAndDelete({ title });
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
