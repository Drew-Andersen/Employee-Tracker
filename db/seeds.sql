INSERT INTO department (department_name) VALUES
('Human Resources'),
('Sales'),
('Customer Support'),
('Software Engineer'),
('Testing'),
('Development');

INSERT INTO roll (title, salary, department_id) VALUES
('Sales Lead', '100000', 2),
('Salesperson', '80000', 2),
('Lead Engineer', '150000', 4),
('Software Engineer', '125000', 4),
('Account Manager', '160000', 2),
('Support Lead', '100000', 6),
('Support Member', '65000', 3),
('Test Engineer', '120000', 5);

INSERT INTO employee (employee_name, manager, roll_id) VALUES
('John Doe', 'Tonya Smith', 1),
('Samantha Adams', 'Andrew Lyons', 6),
('Mitchael Hall', 'John Liliston', 4),
('Jack Smith', 'John Liliston', 4),
('Oscar Robles', 'Ava Andersen', 3),
('Tim Tester', 'Tonya Smith', 1),
('Rick Ross', 'Tina Helper', 2),
('Ally Smith', 'Ava Andersen', 3),
('Shelly Hemmet', 'Tina Helper', 2),
('Lisa Gibbs', 'Tonya Smith', 5),
('Kyle Pratt', 'Andrew Lyons', 6);

