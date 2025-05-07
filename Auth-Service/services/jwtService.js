const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const generateToken = (userName) => {
  return jwt.sign({ userName }, JWT_SECRET, { expiresIn: '30m' });
};

const validateToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid Token');
  }
};

module.exports = { generateToken, validateToken };
