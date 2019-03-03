// ====================================================
// Dependencies
// ====================================================
const mysql = require("mysql");

// ====================================================
// Set Up MySql Connection
// ====================================================
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burger_db"
    });
};

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