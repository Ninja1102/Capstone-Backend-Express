const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'your-secret-key';

exports.generateToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: '30m' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};
