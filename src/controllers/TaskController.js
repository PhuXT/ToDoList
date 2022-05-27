const { getAllTaskService, addTaskService, deleteTaskService, editTaskService, updateTaskService } = require('../services/taskService')

// get all task 
const getAllTask = async (req, res) => {
    const idUser = req.params.id
    const data = await getAllTaskService(idUser)
    console.log(data);
    if(data.message) {
        return res.status(200).json(data)
    }
    return res.status(400).json(data)
}

// add task
const addTask = async (req, res) => {
    console.log('Params');
    req.body.user = req.params.userId
    const data = await addTaskService(req.body)
    if(data.message) {
        return res.status(200).json(data)
    }
    return res.status(400).json(data)
      
}

// delete task
const deleteTask = async (req, res) => {
    const data = await deleteTaskService(req.params.taskId, req.body.userId)
    if(data.message) {
        return res.status(200).json(data)
    }
    return res.status(400).json(data)
}

// updateTask
const updateTask = async (req, res) => {
    req.body.taskId = req.params.taskId
    console.log(req.body);
    const data = await updateTaskService(req.body)
    if(data.message) {
        return res.status(200).json(data)
    }
    return res.status(400).json(data)
}

module.exports = {
    getAllTask,
    addTask,
    deleteTask,
    updateTask
}
