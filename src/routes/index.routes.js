const authenToken = require('../middleware/authenToken');
const userRoute = require('./users.routes');
const taskRoute = require('./tasks.routes');

let initialWebRouter = (app) => {
    app.use('/api/v1/user', userRoute);
    app.use('/api/v1/task/', authenToken, taskRoute);
};

module.exports = initialWebRouter;
