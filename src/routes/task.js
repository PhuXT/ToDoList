const express = require('express')
const route = express.Router()
const { getAllTask, addTask, deleteTask } = require('../controllers/TaskController')

route.post('/add/:userId', addTask)
route.get('/:id', getAllTask)
route.delete('/:taskId', deleteTask)

module.exports = route