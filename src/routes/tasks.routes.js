//metodos HTTP - GEP - POST - PUT - DELETE

const { Router } = require('express')
const pool = require('../db')

const { getAllTasks, getTask, postTask, updateTask, deleteTask } = require('../controllers/task.controller')


const router = Router()


//Esto seria el famosos CRUD

/* router.get('/tasks', async (req, res) => {
    const result = await pool.query('SELECT NOW()') // Sirve para cheaquear la conceccion con la base de datos
    console.log(result)
    res.json(result.rows[0].now) // si obtenemos la fecha , quiere decir que ya postgres esta conectado con nuestra APP
}) */

router.get('/tasks', getAllTasks)
router.post('/tasks', postTask )
router.delete('/tasks', deleteTask)
router.put('/tasks', updateTask)
router.get('/tasks/10', getTask) 


module.exports = router;