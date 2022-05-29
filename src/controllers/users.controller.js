const {registerUserService, loginService} = require('../services/user.service');

class UserController {
    async registerUser(req, res) {
        const data = await registerUserService(req.body);
        return res.status(data.statusCode).json(data.data);
    }

    async login(req, res) {
        const data = await loginService(req.body.email, req.body.password);
        return res.status(data.statusCode).json(data.data);
    }
}

module.exports = new UserController();
