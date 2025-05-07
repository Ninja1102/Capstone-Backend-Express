const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { createUser, createAlert } = require('../utils/feignClients');

const registerUser = async ({ userName, password, role }) => {
  const existingUser = await User.findOne({ userName });
  if (existingUser) throw new Error('Username already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ userName, password: hashedPassword, role });
  const savedUser = await user.save();

  await createUser(savedUser._id);
  await createAlert(savedUser._id);

  return savedUser;
};

const authenticateUser = async ({ userName, password }) => {
  const user = await User.findOne({ userName });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Incorrect password');

  return user;
};

module.exports = { registerUser, authenticateUser };
