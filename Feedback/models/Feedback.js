const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  feedbackId: { type: String },
  feedbackMessage: { type: String },
  eventId: { type: String },
  userId: { type: String },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
