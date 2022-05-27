const authenToken = require('../middleware/authenToken')
const express = require('express')
let router = express.Router()
const userRoute = require('../routes/user')
const taskRoute = require('../routes/task')

let initialWebRouter = ( app ) => {
    app.use('/user', userRoute)
    app.use('/task', authenToken , taskRoute)
}

module.exports = initialWebRouter
