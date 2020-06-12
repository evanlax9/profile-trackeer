const { prompt } = require("inquirer");
const db = require("./db");

mainMenu();



// Async await function that will prompt "list" named "choice" with a "message"= what do u wanna do
async function mainMenu() {
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            message: "what would you like to do?",
            choices: [
                {
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES",

                },
                {
                    name: "View all employees by department",
                    value: "VIEW_ALL_EMPLOYEES_BY_DEPARTMENT",

                },
                {
                    name: " View all employees by manager",
                    value: "VIEW_ALL_EMPLOYEES_BY_MANAGER",

                },
                {
                    name: "Add employee",
                    value: "ADD_EMPLOYEE"

                },
                {
                    name: "Remove employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "Update employee role",
                    value: "UPDATE_EMPLOYEE_ROLE",
                },
                {
                    name: "Update employee manager",
                    value: "UPDATE_EMPLOYEE_MANAGER",
                },
                {
                    name: "View all roles",
                    value: "VIEW_ALL_ROLES"
                },
                {
                    name: "Add role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Remove role",
                    value: "REMOVE_ROLE",
                },
                {
                    name: "View all departments",
                    value: "VIEW_ALL_DEPARTMENTS"
                },
                {
                    name: "Add department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Remove department",
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }


            ]
        }
    ])


    switch (choice) {
        case "VIEW_EMPLOYEES":
            return viewEmployees();
        case "VIEW_ALL_EMPLOYEES_BY_DEPARTMENT":
            return viewEmployeesByDepartment();
        case "VIEW_ALL_EMPLOYEES_BY_MANAGER":
            return viewEmployeesByManager();
        case "ADD_EMPLOYEE":
            return addEmployee();
        case "REMOVE_EMPLOYEE":
            return removeEmployee();
        case "UPDATE_EMPLOYEE_ROLE":
            return updateEmployeeRole();
        case "UPDATE_EMPLOYEE_MANAGER":
            return updateEmployeManager();
        case "VIEW_ALL_ROLES":
            return viewAllRoles();
        case "ADD_ROLE":
            return addRole();

        case "REMOVE_ROLE":
            return removeRole();
        case "VIEW_ALL_DEPARTMENTS":
            return viewAllDepartments();
        case "ADD_DEPARTMENT":
            return addDepartment();
        case "REMOVE_DEPARTMENT":
            return removeDepartment();
        default: return quit();
    }
}

async function viewEmployees() {
    const employees = await db.findAllEmployees();
    console.table(employees);
    mainMenu();

}

async function viewEmployeesByDepartment() {
}

async function viewEmployeesByManager() {

}

async function addEmployee() {

}
async function removeEmployee() {

}
async function updateEmployeeRole() {

}
async function updateEmployeManager() {

}
async function viewAllRoles() {

}
async function addRole() {

}
async function removeRole() {

}
async function viewAllDepartments() {

}
async function addDepartment() {

}
async function removeDepartment() {

}
function quit() {
    console.log("Goodbye");
    process.exit();
};

// choices array containing objects with name: "view all employees", value: ""
// switch cases 
// check gif

// test with node index.js