const res = require('express/lib/response')
const {getAllTaskRepo, addTaskRepo, deleteTaskRepo, editTaskRepo} = require('../repository/taskRepository')

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

// editTask Service
const editTaskService = ( idTask ) => {

}

// delete Task Service
const deleteTaskService = async ( taskId, userId ) => {
    const data = await deleteTaskRepo(taskId, userId)
    if(data.message){
        res.status(200).json(data)
    }
}



module.exports = {
    getAllTaskService,
    addTaskService,
    editTaskService,
    deleteTaskService
}
