const reminderService = require('../services/reminderService');

const createReminder = async (req, res) => {
  try {
    const reminder = await reminderService.createReminder(req.body);
    res.status(201).json(reminder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const sendSmsReminder = async (req, res) => {
  try {
    const { phoneNumber, message } = req.body;
    const result = await reminderService.sendSms(phoneNumber, message);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const sendCallReminder = async (req, res) => {
  try {
    const { phoneNumber, message } = req.body;
    const result = await reminderService.sendCall(phoneNumber, message);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReminder,
  sendSmsReminder,
  sendCallReminder,
};
