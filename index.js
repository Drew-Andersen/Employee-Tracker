// Imort inquirer
const inquirer = require('inquirer');
// Imort db
const db = require('./db');

init();

function init() {
    console.log(`Funciton init working`);

    userInput();
}

function userInput() {
    inquirer
        prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    {
                        name: 'View all employees',
                        value: 'VIEW_ALL_EMPLOYEES'
                    },
                    {
                        name: 'View employees by department',
                        value: 'VIEW_EMPLOYEES_BY_DEPARTMENT'
                    },
                    {
                        name: 'Add employee',
                        value: 'ADD_EMPLOYEE'
                    },
                    {
                        name: 'Remove employee',
                        value: 'REMOVE_EMPLOYEE'
                    },
                    {
                        name: 'Update employee role',
                        value: 'UPDATE_EMPLOYEE_ROLE'
                    },
                    {
                        name: 'View all roles',
                        value: 'VIEW_ALL_ROLES'
                    },
                    {
                        name: 'Add role',
                        value: 'ADD_ROLE'
                    },
                    {
                        name: 'Romove role',
                        value: 'REMOVE_ROLE'
                    },
                    {
                        name: 'View all departments',
                        value: 'VIEW_ALL_DEPARTMENTS'
                    },
                    {
                        name: 'Add department',
                        value: 'ADD_DEPARTMENT'
                    },
                    {
                        name: 'Remove department',
                        value: 'REMOVE_DEPARTMENT'
                    },
                    {
                        name: 'Quit',
                        value: 'QUIT'
                    }
                ]
            }
        ])
        .then((res) => {
            let choice = res.choice;

            // Switch statement to call the appropriate function depending on the users choice
            switch (choice) {
                case 'VIEW_ALL_EMPLOYEES':
                    viewAllEmployees();
                    break;
                case 'VIEW_EMPLOYEES_BY_DEPARTMENT':
                    viewAllEmployeesByDepartment();
                    break;
                case 'ADD_EMPLOYEE':
                    createEmployee();
                    break;
                case 'REMOVE_EMPLOYEE':
                    deleteEmployee();
                    break;
                case 'VIEW_ALL_ROLES':
                    updateEmployeeManager();
                    break;
                case 'ADD_ROLE':
                    addRole();
                    break;
                case 'REMOVE_ROLE':
                    deleteRole();
                    break;
                case 'VIEW_ALL_DEPARTMENTS':
                    veiwAllDepartments();
                    break;
                case 'ADD_DEPARTMENT':
                    addDepartment();
                    break;
                case 'Remove department':
                    deleteDepartment();
                    break;
                default:
                    quit();
            }
        })
}

function viewAllEmployees() {
    db.findAllEmployees()
        .then(({ rows }) => {
            let employees = rows;
            console.table(employees)
        })
        .then(() => userInput());
}