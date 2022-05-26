const validateUser = (req, res, next) => {
    if(!req.body.userName || !req.body.email || !req.body.password) {
        return res.status(400).json({
            message: 'All field is require!'
        })
    }
    next()
}

module.exports = validateUser
