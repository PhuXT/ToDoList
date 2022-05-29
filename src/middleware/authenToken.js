const authenTokenRespone = require('../utils/repoRespone.untils');
const jwt = require('jsonwebtoken');
const authenToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader)
        return res.status(404).json({
            message: 'Token not found',
        });

    const token = authorizationHeader.split(' ')[1];
    if (!token)
        return res.status(404).json({
            message: 'Token not found',
        });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) {
            res.status(401).json({
                message: 'Token not verify',
            });
        }
        next();
    });
};

module.exports = authenToken;
