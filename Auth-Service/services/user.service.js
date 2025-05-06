const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwtService = require('./jwt.service');

exports.register = async ({ userName, password, role }) => {
  const existingUser = await User.findOne({ userName });
  if (existingUser) throw new Error('Username already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ userName, password: hashedPassword, role });
  return await user.save();
};

exports.login = async ({ userName, password }) => {
  const user = await User.findOne({ userName });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  return jwtService.generateToken({ id: user._id, role: user.role });
};

exports.getUserById = async (id) => {
  const user = await User.findById(id).select('-password');
  if (!user) throw new Error('User not found');
  return user;
};
