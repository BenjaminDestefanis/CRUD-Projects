const pool = require('../db')

const getAllTasks = (req, res) => {
    res.send("Obteniendo lista de tareas")
}


const getTask =  (req, res) => {
    res.send("Obteniendo una tarea")
}

const createTask = async (req, res) => {
    const { title, description } = req.body;
    console.log(title, description)

    

    try{

        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description]) 
        res.json(result.rows[0])

    } catch (error){
        console.log(error.message)
    }

    /* Cada valor del array de acuerdo a su posicion , ocupara un lugar en los que estan acompañados por el signo dolar */

    /* res.send("Subiendo una Tarea") */
    /* console.log(result) */
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