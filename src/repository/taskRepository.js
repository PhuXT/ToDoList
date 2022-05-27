const { editTask } = require('../controllers/TaskController');

const userModel = require('../models/model').userModel 
const taskModel = require('../models/model').taskModel 

const getAllTaskRepo = async (idUSer) => {
    try {
        let listTask = await userModel.findOne({ _id: idUSer }).populate('tasks')
        return {
             message: 'success',
             listTask
        }
    } catch (error) {
        return {
            err: 'success',
            error
        }
    }
}

const addTaskRepo = async (objTask, email) => {
    try {
        let checkUser = await(userModel).findOne({_id: objTask.user})
        if(checkUser.email !== email) {
            return {
                err: 'You can only add task in your account'
            }
        }
        let task = await taskModel(objTask).save()
        let user = await userModel.findOne({_id: task.user})
        let newUser = await user.updateOne( { $push: { tasks: task._id.toString()}})

        if( newUser ){
            return {
                message: 'Task added',
                data: task
            }
        }

    } catch (error) {
        console.log(error);
        return {
            err: 'loi',
            data: error
        }
    }
}

deleteTaskRepo = async ( taskId, userId, email ) => {
    try {
        const task = await taskModel.findOne( {_id:taskId})
        if(checkUser.email !== email) {
            return {
                err: 'You can only add task in your account'
            }
        }
        const user = await userModel.findOne({_id: userId})
        if(task) {
            if(user.tasks.includes(task._id.toString())){
                try {
                    await taskModel.deleteOne({_id: taskId})
                    await user.updateOne( {$pull : {tasks: taskId }} )
                    console.log('Task Deleted');
                    return {
                        message: 'Deleted',
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            return {
                err: 'You can delete only your task!'
            }
        }
        return {
            err: 'Task is not exitst'
        }
    } catch (error) {
        
    }
}

updateTaskRepo = async (objUpdate) => {
    // const task = await taskModel.findOne({_id: objUpdate.taskId})
    // await task.updateOne({})
    const {taskId, ...newobj} = objUpdate
    console.log(newobj); 
    try {
        await taskModel.findByIdAndUpdate({_id: objUpdate.taskId}, newobj)
        return {
            message: 'update sucessully'
        }
    } catch (error) {
        console.log(error);
    }
    
}


module.exports = {
    getAllTaskRepo,
    addTaskRepo,
    deleteTaskRepo,
    updateTaskRepo
}