// Import connection
const pool = require('./config/connection');

class DB {
    constructor() {}

    // Find all employees, joined with rolls and departments tables to display their roles, salaries, departments, and managers
    findAllEmployees() {
        return this.query(
            'SELECT employee_name, roll.title, department.department_name AS department, roll.salary, manager FROM employee LEFT JOIN roll on employee.roll_id = roll.id LEFT JOIN department on roll.department_id = department.id;'
        );
    }

    // Creates a new employee
    createEmployee(employee) {
        const { employee_name, role_id, manager } = employee;
        return this.query(
            `INSERT INTO employee (employee_name, role_id, manager) VALUES ($1 $2 $3)`,
            [employee_name, role_id, manager]
        );
    }

    // Deletes an employee
    deleteEmployee() {

    }

    // Find all the roles available
    viewAllRoles() {

    }

    // Add a new role
    addRole() {

    }

    // Deletes a role
    deleteRole() {

    }

    // Finds all the departments available
    veiwAllDepartments() {

    }

    // Adds a department 
    addDepartment() {

    }

    // Deletes a department
    deleteDepartment() {

    }
}