const jwt = require('jsonwebtoken')
const authenToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorization
    if(!authorizationHeader) 
        return res.status(401).json({
            err: 'access token erro'
        })

    const token = authorizationHeader.split(' ')[1]
    if(!token) res.status(401).json({
        err: 'access token erro'
    })
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, 
        (err, data) => {
            if(err){
                res.status(401).json({
                err: 'access token erro'
            })
            }
            next()
    })
}

module.exports = authenToken