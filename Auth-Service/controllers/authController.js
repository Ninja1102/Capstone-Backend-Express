const { registerUser, authenticateUser } = require('../services/userService');
const { generateToken, validateToken } = require('../services/jwtService');

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await authenticateUser(req.body);
    const token = generateToken(user.userName);
    res.json({ token, userId: user._id });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

const validate = (req, res) => {
  try {
    validateToken(req.query.token);
    res.json({ valid: true });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = { register, login, validate };
