const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    eventId: String,
    userId: String,
    hasSeen: { type: Boolean, default: false }
});

module.exports = mongoose.model('Alert', alertSchema);
