
use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering');
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2);



INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Joanna', 'Doe', 2, 1),
    ('Evan', 'Walker', 3, NULL),
    ('John', 'Smith', 4, 3);
