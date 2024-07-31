-- Drop the employee_db if it already exists
DROP DATABASE IF EXISTS employee_db;
-- Creates the employee_db
CREATE DATABASE employee_db;

-- Creates the department table
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Creates the roll table
CREATE TABLE roll (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES department(id)
    ON DELETE SET NULL
);

-- Creates the employee table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roll_id INTEGER,
    maneager VARCHAR(50) NOT NULL,
    FOREIGN KEY (roll_id) REFERENCES roll(id)
    ON DELETE SET NULL
);