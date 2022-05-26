const {userModel} = require('../models/model')

// Store user to DB
const saveUser = async ( data ) => {
    const user = userModel(data)
    try {
        let newUser = await user.save()
        console.log(newUser);
        let {password, createdAt, ...newUser2} = newUser._doc
        if(newUser2) {
            return {
                message: 'user created',
                data: newUser2
            }
        }
    } catch (error) {
        console.log(error);
        return {
            err: 'create user failure',
            data: error
        }
    }
    
}

// Login User

const LoginRepo = async ( user) => {
    let { email, password} = user
    let userFinding = await userModel.findOne({email})
    console.log(userFinding);
}
module.exports = {
    saveUser
}
