
const getAllTasks = (req, res) => {
    res.send("Obteniendo lista de tareas")
}


const getTask =  (req, res) => {
    res.send("Obteniendo una tarea")
}

const createTask =  (req, res) => {
    res.send("Subiendo una Tarea")
}

const updateTask =  (req, res) => {
    res.send("Actualizando una tarea")
}

const deleteTask = (req, res) => {
    res.send('Eliminando Tarea')
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}