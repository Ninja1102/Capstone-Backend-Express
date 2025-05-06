const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');

router.post('/', reminderController.createReminder);
router.post('/:id/send-sms', reminderController.sendSmsReminder);
router.post('/:id/send-call', reminderController.sendCallReminder);

module.exports = router;
