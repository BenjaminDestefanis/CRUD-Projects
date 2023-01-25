const pool = require('../db')

const getAllTasks = async (req, res) => {

    try{
        const allTasks = await pool.query('SELECT * FROM task')
        res.json(allTasks.rows)

    } catch(error){
        console.log(error)
    }
    
}


const getTask =  (req, res) => {
    res.send("Obteniendo una tarea")
}

const createTask = async (req, res) => {
    const { title, description } = req.body;
    console.log(title, description)

    
    /* Aqui hay un ejemplo de try - catch - en caso de que falla la consulta , que no se rompa la plaicaion y devuelva el mensaje */

    try{

        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description]) 
        res.json(result.rows[0])

    } catch (error){
        /* console.log(error.message) */
        res.json(error.message) //Esto sirve para desarrollo - para nuestra app siempre devolver errores ejempls 404 500 etc
    }

    /* Cada valor del array de acuerdo a su posicion , ocupara un lugar en los que estan acompañados por el signo dolar */

    /* res.send("Subiendo una Tarea") */
    /* console.log(result) */
}


/* ------------------------------------------------------------  MIN 46:30 --------------------------------------------------- */

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