//  validate email
const validateEmail = email => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

// validate User
const validateUser = (req, res, next) => {
    if (!req.body.userName || !req.body.email || !req.body.password) {
        return res.status(400).json({
            message: 'All field is require.',
        });
    }

    if (!validateEmail(req.body.email)) {
        return res.status(400).json({
            message: 'email is not valid',
        });
    }
    next();
};

module.exports = validateUser;
