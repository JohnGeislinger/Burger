// ====================================================
// Import Connection
// ====================================================
const connection = require("./connection.js");

// ====================================================
// Object for All MySQL Statement Functions
// ====================================================
const orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(tableInput, colName, value, cb) {
        let value = connection.escape(value);
        let queryString = "INSERT INTO " + tableInput + " (" + colName + ") VALUES (" + value + ");";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(tableInput, colName, value, idColName, id, cb) {
        let queryString = "UPDATE " + tableInput + " SET " + colName + " = " + value + " WHERE " + idColName + " = " + id + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// ====================================================
// Export ORM
// ====================================================
module.exports = orm;