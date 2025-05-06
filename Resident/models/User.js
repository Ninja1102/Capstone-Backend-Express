const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: String,
  email: String,
  phoneNumber: String,
  image: String,
  status: String,
});

module.exports = mongoose.model("User", UserSchema);
