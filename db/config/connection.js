require('dotenv').config();
// Create a pool connection to the database
const { Pool } = require('pg');

// Create a pool object to handle requests to the database
const pool = new Pool (
    {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        databse: process.env.NAME,
        host: 'localhost'
    },
    console.log(`Connected to the employee_db database.`)
)

// Connect the pool object to the database passed in the initialization
pool.connect();

module.exports = pool;