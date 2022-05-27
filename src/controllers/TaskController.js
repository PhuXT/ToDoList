const { getAllTaskService, addTaskService, deleteTaskService, editTaskService, updateTaskService } = require('../services/taskService')
const jwt = require('jsonwebtoken')


// get Email
const getEmail = (req) => {
    const authorizationHeader = req.headers.authorization
    const token = authorizationHeader.split(' ')[1]
    const email = jwt.decode(token).email
    return email
}

// get all task 
const getAllTask = async (req, res) => {
    // const authorizationHeader = req.headers.authorization
    // const token = authorizationHeader.split(' ')[1]
    // const email = jwt.decode(token).email
    const email = getEmail(req)

    const idUser = req.params.id
    const data = await getAllTaskService(idUser, email)
    console.log(data);
    if(data.message) {
        return res.status(200).json(data)
    }
    return res.status(400).json(data)
}

// add task
const addTask = async (req, res) => {
    req.body.user = req.params.userId
    const email = getEmail(req)

    const data = await addTaskService(req.body, email)
    if(data.message) {
        return res.status(200).json(data)
    }
    return res.status(400).json(data)
      
}

// delete task
const deleteTask = async (req, res) => {
    const email = getEmail(req)
    const data = await deleteTaskService(req.params.taskId, req.body.userId, email)
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
