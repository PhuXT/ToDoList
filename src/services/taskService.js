const res = require('express/lib/response')
const {getAllTaskRepo, addTaskRepo, deleteTaskRepo, updateTaskRepo} = require('../repository/taskRepository')

const getAllTaskService = async (idUSer) =>{
    const data = await getAllTaskRepo(idUSer)
    if(data.message) {
        return {
            message: data.message,
            listTasks: data.listTask.tasks
        }
    }
    return data
}

// add Task 
const addTaskService = async ( objTask ) =>  {
    const data = await addTaskRepo(objTask) 
    return data
}

// updateTask Service
const updateTaskService = async ( objUpdate ) => {
    const data = await updateTaskRepo(objUpdate)
    return data
}

// delete Task Service
const deleteTaskService = async ( taskId, userId ) => {
    const data = await deleteTaskRepo(taskId, userId)
    return data
}



module.exports = {
    getAllTaskService,
    addTaskService,
    updateTaskService,
    deleteTaskService
}
