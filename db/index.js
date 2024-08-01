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

    // Creates a new employee to the database
    createEmployee(employee) {
        const { employee_name, role_id, manager } = employee;
        return this.query(
            `INSERT INTO employee (employee_name, role_id, manager) VALUES ($1 $2 $3)`,
            [employee_name, role_id, manager]
        );
    }

    // Deletes an employee from the database
    deleteEmployee(emplyoeeID) {
        return this.query(
            'DELETE FROM employee WHERE id = $1', 
            [employeeID]
        )
    }

    // Find all the roles available
    viewAllRoles() {
        return this.query(
            'SELECT role.id, role.title, department.department_name, role.salary FROM role LEFT JOIN department on role.department_id = department.id;'
        )
    }

    // Add a new role to the database
    addRole(role) {
        const { title, salary, department_id} = role;
        return this.query (
            'INSERT INTO role (title, salary, department_id) VALUES ($! $2 $3)',
            [title, salary, department_id]
        )
    }

    // Deletes a role from the database
    deleteRole(roleID) {
        this.query (
            'DELETE FROM role WHERE id = $1',
            [roleID]
        )
    }

    // Finds all the departments available
    veiwAllDepartments() {
        return this.query (
            'SELECT department.id, department.department_name FROM department'
        )
    }

    // Adds a department to the database
    addDepartment(departmentID) {
        this.query (
            'INSERT INTO department (department_name) VALUES ($1)',
            [department_name]
        )
    }

    // Deletes a department from the database
    deleteDepartment(departmentID) {
        return this.query (
            'DELETE FROM department WHERE id = $1',
            [departmentID]
        )
    }

    // Finds all employees in a given department
    viewAllEmployeesByDepartment(departmentID) {
        return this.query (
            'SELECT employee.id, employee.employee_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id WHERE department.id = $1;',
            [departmentID]
        )
    }
}
module.exports = new DB();