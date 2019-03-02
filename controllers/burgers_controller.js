// ====================================================
// Dependencies
// ====================================================
const express = require("express");
const router = express.Router();

// ====================================================
// Import Burger
// ====================================================
const burger = require("../models/burger.js");

// ====================================================
// Routes
// ====================================================
router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.add(req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        res.json(result);
    });
});

// ====================================================
// Export Routes
// ====================================================
module.exports = router;