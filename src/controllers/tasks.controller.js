const {
    getAllTaskService,
    createTaskService,
    deleteTaskService,
    updateTaskService,
} = require('../services/tasks.service');
const jwt = require('jsonwebtoken');

// GET ALL TASK
const getAllTask = async (req, res) => {
    const data = await getAllTaskService(
        req.params.userID,
        req.headers.authorization,
    );
    return res.status(data.statusCode).json(data.data);
};

// CREATE TASK
const createTask = async (req, res) => {
    const data = await createTaskService(
        req.body,
        req.params.userID,
        req.headers.authorization,
    );
    return res.status(data.statusCode).json(data.data);
};

// DELETE TASK
const deleteTask = async (req, res) => {
    const data = await deleteTaskService(
        req.params.userID,
        req.params.taskID,
        req.headers.authorization,
    );
    return res.status(400).json(data);
};

// UPDATE
const updateTask = async (req, res) => {
    const data = await updateTaskService(
        req.params.taskID,
        req.body,
        req.headers.authorization,
    );
    return res.status(data.statusCode).json(data.data);
};

module.exports = {
    getAllTask,
    createTask,
    deleteTask,
    updateTask,
};
