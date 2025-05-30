const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['RESIDENT', 'ADMIN'], default: 'RESIDENT' }
});

module.exports = mongoose.model('User', userSchema);
