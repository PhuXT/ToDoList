const bcrypt = require('bcrypt')
const { userModel } = require('../models/model')
const { saveUser, LoginRepo } = require('../repository/userRepositoty')

const registerUserService = async (data) => {
    const saltRound = 10
    const hashPassword = await bcrypt.hash(data.password, saltRound)
    data.password = hashPassword
    return saveUser(data)

}

// Login
const loginService = async (user) => {
    let { email, password } = user
    let userFinding = await userModel.findOne({email})
    if( !userFinding ) {
        return { err: 'Email is not exist'}
    } else {
        let comparePass = await bcrypt.compare(password, userFinding.password)
        if(comparePass) {
            return { message: 'Login Success', data: 'abc'}
        }
        return { err: 'password is incorrect'}
    }

}

module.exports = {
    registerUserService,
    loginService
}
