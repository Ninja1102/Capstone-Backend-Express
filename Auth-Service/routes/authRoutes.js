const express = require('express');
const router = express.Router();
const { register, login, validate } = require('../controllers/authController');

router.post('/register', register);
router.post('/validate/user', login);
router.get('/validate/token', validate);

module.exports = router;
