const express = require('express')
const route = express.Router()
const { getAllTask, addTask, deleteTask, updateTask } = require('../controllers/TaskController')

route.post('/add/:userId', addTask)
route.get('/:id', getAllTask)
route.delete('/:taskId', deleteTask)
route.put('/:taskId', updateTask)

module.exports = route