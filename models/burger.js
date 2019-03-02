// ====================================================
// Import ORM
// ====================================================
const orm = require("../config/orm.js");

// ====================================================
// Code That Will Call the ORM Functions
// ====================================================
const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    add: function(value, cb) {
        orm.insertOne("burgers", "burger_name", value, function(res) {
            cb(res);
        });
    },
    update: function(eatenId, cb) {
        orm.updateOne("burgers", "devoured", 1, "id", eatenId, function(res) {
            cb(res);
        });
    }
};

// ====================================================
// Export Burger
// ====================================================
module.exports = burger;