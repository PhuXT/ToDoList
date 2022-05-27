const { getAllTaskService, addTaskService, deleteTaskService, editTaskService } = require('../services/taskService')

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
    console.log('Controller');
    console.log(req.params.taskId, req.body.userId);
    await deleteTaskService(req.params.taskId, req.body.userId)
}

// editTask
const editTask = (req, res) => {
    
}

module.exports = {
    getAllTask,
    addTask,
    deleteTask,
    editTask
}
