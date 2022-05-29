const {userModel} = require('../models/model');
const repoRespone = require('../utils/repoRespone.untils');
// Store user to DB
const createUser = async (user) => {
    try {
        const newUser = await userModel(user).save();
        const {password, createdAt, tasks, __v, ...useCreated} = newUser._doc;
        return repoRespone(200, 'User created', useCreated);
    } catch (error) {
        return repoRespone(400, 'Create user failed', error);
    }
};

// Login User
const findUser = async (email) => {
    try {
        const user = await userModel.findOne({email});
        if (!user) {
            return repoRespone(404, 'User not found');
        }
        return repoRespone(200, 'User found', user);
    } catch (error) {
        return repoRespone(503, 'Service unavailable', error);
    }
};
module.exports = {
    createUser,
    findUser,
};
