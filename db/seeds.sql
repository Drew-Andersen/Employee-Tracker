INSERT INTO department (name) VALUE 
('Human Resources'),
('Sales'),
('Customer Support'),
('Software Engineer'),
('Testing'),
('Development');

INSERT INTO roll (title, salary, department) VALUES
('Sales Lead', '100000', 2),
('Salesperson', '80000', 2),
('Lead Engineer', '150000', 4),
('Software Engineer', '125000', 4),
('Account Manager', '160000', 2);
('Support Lead', '100000', 6),
('Support Member', '65000', 3),
('Test Engineer', '120000', 5);

INSERT INTO employee (first_name, last_name, roll, manager) VALUES
('John', 'Doe', 1, 'Tonya Smith'),
('Samantha', 'Adams', 6, 'Andrew Lyons'),
('Mitchael', 'Hall', 4, 'John Liliston'),
('Jack', 'Smith', 4, 'John Liliston'),
('Oscar', 'Robles', 3, 'Ava Andersen'),
('Tim', 'Tester', 1, 'Tonya Smith'),
('Rick', 'Ross', 2, 'Tina Helper'),
('Ally', 'Smith', 3, 'Ava Andersen'),
('Shelly', 'Hemmet', 2, 'Tina Helper'),
('Lisa', 'Gibbs', 5, 'Tonya Smith'),
();

SELECT * FROM department;
SELECT * FROM roll;
SELECT * FROM employee;
