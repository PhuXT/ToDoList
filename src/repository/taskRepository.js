const { editTask } = require('../controllers/TaskController');

const userModel = require('../models/model').userModel 
const taskModel = require('../models/model').taskModel 

const getAllTaskRepo = async (idUSer) => {
    console.log(idUSer);
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

const addTaskRepo = async (objTask) => {
    try {
        let task = await taskModel(objTask).save()
        let user = await userModel.findOne({user: task.user})
        console.log('Task ID');
        console.log(task._id.toString());
        let newUser = await user.updateOne( { $push: { tasks: task._id.toString()}})
        if(newUser){
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

deleteTaskRepo = async ( taskId, userId ) => {
    try {
        const task = await taskModel.findOne( {_id:taskId})
        const user = await userModel.findOne({_id: userId})
        console.log(task);
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