const express = require("express");
const router = express.Router();
const { insertFieldData } = require("../models/fieldModel");

// POST request to add field data
router.post("/", async (req, res) => {
    try {
        await insertFieldData(req.body);
        res.status(200).send("Field data stored");
    } catch (err) {
        res.status(500).send("Error storing field data");
    }
});

module.exports = router;
