-- Drop the employee_db if it already exists
DROP DATABASE IF EXISTS employee_db;
-- Creates the employee_db
CREATE DATABASE employee_db;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

