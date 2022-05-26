const brrypt = require('bcrypt') 
const { registerUserService, loginService } = require('../services/userService')

class UserController {
    async registerUser(req, res) {
        const data = await registerUserService(req.body)
        data.message ? res.status(200).json(data) : res.status(400).json(data)
    }

    async login(req, res) {
        const data = await loginService(req.body)
        console.log(data);
        if(data.message) {
            return res.status(200).json(data)
        }
        else {
            return res.status(400).json(data)
        }

    }
}

module.exports = new UserController()
