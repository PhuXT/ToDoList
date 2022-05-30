const repoRespone = require('../utils/repoRespone.untils');
const userModel = require('../models/model').userModel;
const taskModel = require('../models/model').taskModel;

const getAllTaskRepo = async (userID) => {
    try {
        const user = await userModel.findOne({_id: userID}).populate('tasks');
        if (!user) {
            return repoRespone(404, 'User not found', user);
        }
        return repoRespone(200, 'success', user);
    } catch (error) {
        return repoRespone(503, 'Service Unavailable', error);
    }
};

// CREATE TASK
const createTaskRepo = async (task, userID) => {
    try {
        const userLogin = await userModel.findOne({_id: userID});
        if (!userLogin) {
            return repoRespone(404, 'User not exist');
        }
        let idNewTask;
        let newTask;
        try {
            newTask = await taskModel(task).save();
            idNewTask = newTask._id.toString();
        } catch (error) {
            return repoRespone(400, 'Each task is unique', error);
        }

        await userLogin.updateOne({
            $push: {tasks: idNewTask},
        });
        return repoRespone(200, 'Task created', newTask);
    } catch (error) {
        return repoRespone(503, 'Service hhh unavailable', error);
    }
};

// DELETE
deleteTaskRepo = async (userID, taskID) => {
    try {
        const task = await taskModel.findOne({_id: taskID});
        const user = await userModel.findOne({_id: userID});
        if (!task) {
            return repoRespone(404, 'task not exist');
        }
        if (!user) {
            return repoRespone(404, 'user not exist');
        }
        if (task.user !== userID) {
            return repoRespone(401, 'You can only delete your task');
        }

        await taskModel.deleteOne({_id: taskID});

        await user.updateOne({$pull: {tasks: taskID}});
        return repoRespone(200, 'deleted');
    } catch (error) {
        return repoRespone(503, 'Service hhh unavailable', error);
    }
};

updateTaskRepo = async (userID, taskID, taskUpdate) => {
    console.log(taskID);
    console.log(taskUpdate);
    try {
        const task = await taskModel.findOne({_id: taskID});
        if (task.user !== userID) {
            return repoRespone(401, 'You can only update your task');
        }
        await task.updateOne(taskUpdate);
        return repoRespone(200, 'update success');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllTaskRepo,
    createTaskRepo,
    deleteTaskRepo,
    updateTaskRepo,
};
