const express = require('express')
const UserController = require('../controllers/UserController')
const validateUser = require('../middleware/validateUser')

let router = express.Router()

router.post('/register', validateUser, UserController.registerUser)
router.post('/login', UserController.login)
module.exports = router
