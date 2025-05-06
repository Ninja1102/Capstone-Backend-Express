const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  userId: { type: String, required: true },
  needSms: { type: Boolean, default: false },
  needCall: { type: Boolean, default: false },
  needEmail: { type: Boolean, default: false },
  scheduledTime: { type: Date, required: true }
});

module.exports = mongoose.model('Reminder', reminderSchema);
