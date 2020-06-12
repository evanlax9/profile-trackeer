const mysql = require("mysql");
const util = require("util");


const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "root",
    database: "employees",
    port: 8889
});

connection.connect(function (error) {
    if (error) { console.log(error) }
    else { console.log("conn") }
})



connection.query = util.promisify(connection.query)

module.exports = connection;