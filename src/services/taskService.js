const res = require('express/lib/response')
const {getAllTaskRepo, addTaskRepo, deleteTaskRepo, updateTaskRepo} = require('../repository/taskRepository')

const getAllTaskService = async (idUSer, email) =>{
    const data = await getAllTaskRepo(idUSer)
    if(data.email !== email) {
        return {
            err: 'you can only get your information'
        }
    }
    if(data.message) {
        return {
            message: data.message,
            listTasks: data.listTask.tasks
        }
    }
    return data
}

// add Task 
const addTaskService = async ( objTask , email) =>  {

    const data = await addTaskRepo(objTask, email) 
    return data
}

// updateTask Service
const updateTaskService = async ( objUpdate ) => {
    const data = await updateTaskRepo(objUpdate)
    return data
}

// delete Task Service
const deleteTaskService = async ( taskId, userId ) => {
    const data = await deleteTaskRepo(taskId, userId, email)
    return data
}



module.exports = {
    getAllTaskService,
    addTaskService,
    updateTaskService,
    deleteTaskService
}
