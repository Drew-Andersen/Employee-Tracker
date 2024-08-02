require('dotenv').config();
// Create a pool connection to the database
const { Pool } = require('pg');

// Create a pool object to handle requests to the database
const pool = new Pool (
    {
        username: 'employee_db',
        password: process.env.DB_PASSWORD,
        databse: process.env.NAME,
        host: 'localhost'
    },
    console.log(`Connected.`)
)

// Connect the pool object to the database passed in the initialization
pool.connect();

module.exports = pool;