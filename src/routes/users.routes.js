const express = require('express');
const userController = require('../controllers/users.controller');
const validateUser = require('../middleware/validateUser');

let router = express.Router();

router.post('/register', validateUser, userController.registerUser);
router.post('/login', userController.login);
module.exports = router;
