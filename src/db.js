const {Pool} = require('pg')

//Esto es la coneccion con nuestra base de datos, 
const pool = new Pool( {
    user: 'postgres',
    password: 'Elc4b4ll0emb4r4z4d0',
    host: 'localhost',
    port: 5432,
    database: 'tasksdb'
});

module.exports = pool