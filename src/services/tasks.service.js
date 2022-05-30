const serviceRespone = require('../utils/repoRespone.untils');
const jwt = require('jsonwebtoken');
const {
    getAllTaskRepo,
    createTaskRepo,
    deleteTaskRepo,
    updateTaskRepo,
} = require('../repository/tasks.repository');
const res = require('express/lib/response');

const getUserID = (authorizationHeader) => {
    const accessToken = authorizationHeader.split(' ')[1];
    const userID = jwt.decode(accessToken).id;
    return userID;
};

// GET ALL TASK userID
const getAllTaskService = async (authorizationHeader) => {
    const userID = getUserID(authorizationHeader);
    const user = await getAllTaskRepo(userID);
    const tasks = user.data.data.tasks;
    return serviceRespone(200, 'success', tasks);
};

// CREATE TASK
const createTaskService = async (task, authorizationHeader) => {
    const userID = getUserID(authorizationHeader);
    task.user = userID;
    const data = await createTaskRepo(task, userID);
    return data;
};

// UPDATE
const updateTaskService = async (taskID, taskUpdate, authorizationHeader) => {
    const userID = getUserID(authorizationHeader);
    const data = await updateTaskRepo(userID, taskID, taskUpdate);
    return data;
};

// DELETE TASK
const deleteTaskService = async (taskID, authorizationHeader) => {
    const userID = getUserID(authorizationHeader);
    const data = await deleteTaskRepo(userID, taskID);
    return data;
};

module.exports = {
    getAllTaskService,
    createTaskService,
    updateTaskService,
    deleteTaskService,
};
