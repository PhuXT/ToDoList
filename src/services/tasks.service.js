const serviceRespone = require('../utils/repoRespone.untils');
const jwt = require('jsonwebtoken');
const {
    getAllTaskRepo,
    createTaskRepo,
    deleteTaskRepo,
    updateTaskRepo,
} = require('../repository/tasks.repository');
const res = require('express/lib/response');
// CHECK isAccountLogin
const isAccountLogin = (userID, authorizationHeader) => {
    const accessToken = authorizationHeader.split(' ')[1];
    const userIDLogin = jwt.decode(accessToken).id;
    if (userID !== userIDLogin) {
        return false;
    }
    return true;
};

// GET ALL TASK
const getAllTaskService = async (userID, authorizationHeader) => {
    if (!isAccountLogin(userID, authorizationHeader))
        return serviceRespone(401, 'You can only act on your account');
    const data = await getAllTaskRepo(userID);
    const tasks = data.data.data.tasks;
    return serviceRespone(200, 'success', tasks);
};

// CREATE TASK
const createTaskService = async (task, userID, authorizationHeader) => {
    if (!isAccountLogin(userID, authorizationHeader))
        return serviceRespone(401, 'You can only act on your account');
    task.user = userID;
    const data = await createTaskRepo(task, userID);
    return data;

    // await createTask(task, userID)
};

// UPDATE
const updateTaskService = async (taskID, taskUpdate, authorizationHeader) => {
    const accessToken = authorizationHeader.split(' ')[1];
    const userID = jwt.decode(accessToken).id;
    const data = await updateTaskRepo(userID, taskID, taskUpdate);
    return data;
};

// DELETE TASK
const deleteTaskService = async (userID, taskID, authorizationHeader) => {
    if (!isAccountLogin(userID, authorizationHeader))
        return serviceRespone(401, 'You can only act on your account');
    const data = await deleteTaskRepo(userID, taskID);
    return data;
};

module.exports = {
    getAllTaskService,
    createTaskService,
    updateTaskService,
    deleteTaskService,
};
