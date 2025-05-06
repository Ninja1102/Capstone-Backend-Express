const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventTitle: String,
  eventDescription: String,
  eventImg: String,
  eventDate: Date,
  eventType: { type: String, default: "EVENT" },
  userId: String,
});

module.exports = mongoose.model("Event", eventSchema);
