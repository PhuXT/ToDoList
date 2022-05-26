const taskModel = require('../models/model').taskModel 

const getAllTaskRepo = async (idUSer) => {
    let listTask = await taskModel.findOne({ _id: idUSer }).populate
}

const addTaskRepo = async (objTask) => {
    try {
        let task = await taskModel(objTask).save()
        if(task){
            return {
                message: 'Task added',
                data: task
            }
        }
    } catch (error) {
        return {
            err: 'loi',
            data: error
        }
    }
}

module.exports = {
    getAllTaskRepo,
    addTaskRepo
}