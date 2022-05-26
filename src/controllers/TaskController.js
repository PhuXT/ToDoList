const { getAllTaskService, addTaskService } = require('../services/taskService')

const getAllTask = (req, res) => {
    // const idUser = req.params.id
    // getAllTask(idUser)
}

const addTask = async (req, res) => {
    req.body.user = req.params.idUser
    const data =   await addTaskService(req.body)
    if(data.message) {
        return res.status(200).json(data)
    }
    return res.status(400).json(data)
      
}

module.exports = {
    getAllTask,
    addTask
}
