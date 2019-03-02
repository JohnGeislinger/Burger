// ====================================================
// Dependencies
// ====================================================
const mysql = require("mysql");

// ====================================================
// Set Up MySql Connection
// ====================================================
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
});

// ====================================================
// Make Connection
// ====================================================
connection.connect(function(err) {
    if (err) {
        console.error("Error Connection: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

// ====================================================
// Export Connection
// ====================================================
module.exports = connection;