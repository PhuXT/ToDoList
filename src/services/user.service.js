const serviceRespone = require('../utils/repoRespone.untils');
const bcrypt = require('bcrypt');
const {createUser, findUser} = require('../repository/users.repository');
const jwt = require('jsonwebtoken');

require('dotenv').config();

// Register User
const registerUserService = async (user) => {
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashPassword;
    return createUser(user);
};

// Login
const loginService = async (email, password) => {
    const data = await findUser(email);
    if (data.statusCode !== 200) {
        return data;
    }

    const user = data.data.data;
    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
        return serviceRespone(401, 'Wrong passwrord');
    }

    const accessToken = jwt.sign(
        {email: user.email, id: user._id},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '86400s'},
    );
    return serviceRespone(200, 'Login Success', {accessToken});
};

module.exports = {
    registerUserService,
    loginService,
};
