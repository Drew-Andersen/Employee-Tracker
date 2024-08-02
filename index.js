// Imort inquirer
const { prompt } = require('inquirer');
// Imort db
const db = require('./db');

init();

function init() {
    console.log('Function init() working');

    userInput();
}

function userInput() {
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
                updateEmployeeRole();
                break;
            case 'UPDATE_EMPLOYEE_ROLE':
                updateEmployeeRole()
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

// Function to view all the employees
function viewAllEmployees() {
    db.findAllEmployees()
        .then(({ rows }) => {
            let employees = rows;
            console.table(employees)
        })
        .then(() => {
            userInput();
        });
}

// Function to view all employees that are in a given department
function viewAllEmployeesByDepartment() {
    db.veiwAllDepartments()
        .then(({ rows }) => {
            let departments = rows;
            const departmentOptions = departments.map(({ id, department_name }) => ({
                name: department_name,
                value: id
            }))
        prompt([
            {
                type: 'list',
                name: 'departmentID',
                message: 'What department would you like to see employees from?',
                choices: departmentOptions
            }
        ])
        .then((res) => {
            db.findAllEmployeesByDepartment(res.departmentId)
        })
        .then(({ rows }) => {
            let employees = rows;
            console.table(employees)
        })
        .then (() =>{
            userInput();
        })
        })
}

// Deletes an employee
function deleteEmployee() {
    db.findAllEmployees()
        .then(({ rows }) => {
            let employees = rows;
            const employeeOptions = employees.map(({ id, employee_name }) => ({
                name: `${employee_name}`,
                value: id
            }))
        })
        prompt([
            {
                type: 'list',
                name: 'employeeId',
                message: 'Which employee would you like to delete?',
                choices: employeeOptions
            }
        ])
        .then((res) => {
            db.deleteEmployee(res.employeeId)
        })
        .then(() => {
            console.log('Employee removed from the database.');
        })
        .then(() => {
            userInput();
        })
}

// Update an employee's role
function updateEmployeeRole() {
    db.findAllEmployees()
        .then(({ rows }) => {
            let employees = rows;
            const employeeOptions = employees.map(({ id, employee_name}) => ({
                name: `${employee_name}`,
                value: id
            }))

        prompt([
            {
                type: 'list',
                name: 'employeeId',
                message: 'Which employee role would you like to update?',
                choices: employeeOptions
            }
        ])
        .then((res) => {
            let employeeId = res.employeeId;
            db.viewAllRoles()
                .then(({ rows }) => {
                    let roles = rows;
                    const roleChoices = roles.map(({ id, title }) => ({
                        name: title,
                        value: id,
                      }))
                
                    prompt([
                        {
                            type: 'list',
                            name: 'roleId',
                            message: 'Which role do you want to assign to the selected employee?',
                            choices: roleOptions
                        }
                    ])
                    .then((res) => {
                        db.updateEmployeeRole(employeeId, res.roleId)
                    })
                    .then(() => {
                        console.log("Updated employee's role");
                    })
                    .then(() => {
                        userInput();
                    })
                })
            })
        })
}

// Funciton to view all the roles
function viewRoles() {
    db.viewAllRoles()
        .then(({ rows }) => {
            let roles = rows;
            console.table(roles);
        })
        .then(() => {
            userInput();
        });
}

// Function to add a role
function addRole() {
    db.veiwAllDepartments()
        .then(({ rows }) => {
            let departments = rows;
            const departmentOptions = departments.map(({ id, department_name }) => ({
                name: department_name,
                value: id
            }))
            prompt([
                {
                    name: 'title',
                    message: 'what is the name of the new role?'
                },
                {
                    name: 'salary',
                    message: 'What is the new salary for this role?'
                },
                {
                    type: 'list',
                    name: 'department_id',
                    message: 'Which department would you like this role to belong to?',
                    choices: departmentOptions
                }
            ])
            .then((role) => {
                db.addRole(role)
                    .then(() => {
                        console.log('New role added to the database');
                    })
                    .then(() => {
                        userInput();
                    })
            })
        })
}

// Function to remove a role
function deleteRole() {
    db.viewAllRoles()
        .then(({ rows }) => {
            let roles = rows;
            const roleOptions = roles.map(({ id, title }) => ({
                name: title,
                vlaue: id
            }))
        })
        prompt([
            {
                type: 'list',
                name: 'roleId',
                message: 'Which role would you like to delete?',
                choices: roleOptions
            }
        ])
        .then((res) => {
            db.deleteRole(res.roleId)
        })
        .then(() => {
            console.log(`Role removed from the database`);
        })
        .then(() => {
            userInput();
        })
}

// Function to add a department
function veiwAllDepartments() {
    db.viewAllDepartments()
        .then(({ rows }) => {
            let departments = rows;
            console.table(departments);
        })
        .then(() => {
            userInput();
        })
}

// Function to add a department
function addDepartment() {
    prompt([
        {
            name: 'name',
            message: 'What is the name of the department you would likle to add?'
        }
    ])
    .then((res) => {
        let name = res;
        db.addDepartment(name)
            .then(() => {
                console.log('New department added to teh database.');
            })
            .then(() =>{
                userInput();
            })
    })
}

// Function to remove a department
function deleteDepartment() {
    db.viewAllDepartments()
        .then(({ rows }) => {
            let departments= rows;
            const departmentOptions = departments.map(({ id, department_name }) => ({
                name: department_name,
                value: id
            }))
        })
        prompt([
            {
                type: 'list',
                name: 'departmentID',
                message: 'Which department would you like to delete?',
                choices: departmentOptions
            }
        ])
        .then((res) => {
            db.deleteDepartment(res.departmentId)
        })
        .then(() => {
            console.log('Department removed from the database.');
        })
        .then(() => {
            userInput();
        })
}

// Function to add an Employee
function addEmployee() {
    prompt([
        {
            name: 'employee_name',
            message: 'What is the employee name you would like to add (full name)?'
        }
    ])
    .then((res) => {
        let fullName = res.employee_name;
        db.viewAllRoles()
            .then(({ rows }) => {
                let roles = rows;
                const roleOptions = roles.map(({ id, title }) => ({
                    name: title,
                    value: id
                }))
            })
            prompt([
                {
                    type: 'list', 
                    name: ' roleId',
                    message: "What is the employee's role?",
                    choices: roleOptions
                }
            ])
            .then((res) => {
                let roleId = res.roleId;
                db.findAllEmployees()
                    .then(({ rows }) => {
                        let employees = rows;
                        const employeeOptions = employees.map(({ id, employee_name}) => ({
                            name: `${employee_name}`,
                            value: id
                        }))
                    })
                    .then((res) => {
                        let employee = {
                            role_id: roleId,
                            full_name: employee_name,
                            manager: manager
                        }
                        
                        db.createEmployee(employee)
                    })
                    .then(() => {
                        console.log('Employee added the the database.');
                    })
                    .then(() => {
                        userInput();
                    })
            })
    })
}

// Function to quit the application
function quit() {
    console.log('Goodbye');
    process.exit();
}