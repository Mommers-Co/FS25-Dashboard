const express = require("express");
const router = express.Router();
const { insertWeather } = require("../models/weatherModel");

// POST request to add weather data
router.post("/", async (req, res) => {
    try {
        await insertWeather(req.body);
        res.status(200).send("Weather data stored");
    } catch (err) {
        res.status(500).send("Error storing weather data");
    }
});

module.exports = router;
