const express = require('express')
const route = express.Router()
const { getAllTask, addTask } = require('../controllers/TaskController')

route.post('/add/:userId', addTask)

module.exports = route