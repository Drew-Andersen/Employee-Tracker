// Import connection
const pool = require('./config/connection');

class DB {
    constructor() {}

    // Find all employees, joined with roles and departments tables to display their roles, salaries, departments, and managers
    findAllEmployees() {
        return this.query(
            'SELECT employee.id, employee_name, role.title, department.department_name AS department, role.salary, manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id;'
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
    deleteEmployee(employeeId) {
        return this.query(
            'DELETE FROM employee WHERE id = $1', 
            [employeeId]
        )
    }

    // Find all the roles available
    viewAllRoles() {
        return this.query(
            'SELECT role.id, role.title, department.department_name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;'
        )
    }

    // Add a new role to the database
    addRole(role) {
        const { title, salary, department_id} = role;
        return this.query (
            'INSERT INTO role (title, salary, department_id) VALUES ($1 $2 $3)',
            [title, salary, department_id]
        )
    }

    // Deletes a role from the database
    deleteRole(roleId) {
        this.query (
            'DELETE FROM role WHERE id = $1',
            [roleId]
        )
    }

    // Updates an employee's role
    updateEmployeeRole(employeeId, roleId) {
        return this.query(
            'UPDATE employee SET role_id = $1 WHERE id = $2',
            [roleId, employeeId]
        )
    }    

    // Finds all the departments available
    veiwAllDepartments() {
        return this.query (
            'SELECT department.id, department.department_name FROM department'
        )
    }

    // Adds a department to the database
    addDepartment(department) {
        this.query (
            'INSERT INTO department (department_name) VALUES ($1)',
            [department.department_name]
        )
    }

    // Deletes a department from the database
    deleteDepartment(departmentId) {
        return this.query (
            'DELETE FROM department WHERE id = $1',
            [departmentId]
        )
    }

    // Finds all employees in a given department
    findAllEmployeesByDepartment(departmentId) {
        return this.query (
            'SELECT employee.id, employee.employee_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id WHERE department.id = $1;',
            [departmentId]
        )
    }
}
module.exports = new DB();