const express = require("express");
const calendarController = require("../controllers/calendarController");

const router = express.Router();

router.get("/", calendarController.getCalendarData);
router.post("/", calendarController.addCalendarEvent);

module.exports = router;
