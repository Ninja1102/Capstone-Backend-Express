const express = require("express");
const router = express.Router();
const controller = require("../controllers/eventController");

router.post("/add", controller.addEvent);
router.get("/getAllEvents", controller.getAllEvents);
router.put("/updateEvent/:eventId", controller.updateEvent);
router.delete("/deleteEvent/:eventId", controller.deleteEvent);
router.get("/getEvent/:eventId", controller.getEvent);
router.get("/getbyUserId/:userId", controller.getEventsByUserId);

module.exports = router;
