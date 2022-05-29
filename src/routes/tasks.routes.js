const express = require('express');
const route = express.Router();
const {
    getAllTask,
    createTask,
    deleteTask,
    updateTask,
} = require('../controllers/tasks.controller');

route.post('/:userID', createTask);
route.get('/:userID/all', getAllTask);
route.delete('/:userID/:taskID', deleteTask);
route.put('/:taskID', updateTask);

module.exports = route;
