const res = require('express/lib/response')
const {getAllTaskRepo, addTaskRepo} = require('../repository/taskRepository')

const getAllTaskService =  (idUSer) =>{
    return getAllTaskRepo(idUser)   
}

const addTaskService = async ( objTask ) =>  {
    const data = await addTaskRepo(objTask) 
    return data
}

module.exports = {
    getAllTaskService,
    addTaskService,
}
