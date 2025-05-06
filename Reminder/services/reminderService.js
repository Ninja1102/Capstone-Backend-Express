const Reminder = require('../models/Reminder');
const client = require('../config/twilio');


const createReminder = async (data) => {
  const reminder = new Reminder(data);
  return await reminder.save();
};

const sendSms = async (to, message) => {
  return await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to,
  });
};

const sendCall = async (to, message) => {
  return await client.calls.create({
    twiml: `<Response><Say>${message}</Say></Response>`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to,
  });
};

module.exports = {
  createReminder,
  sendSms,
  sendCall,
};
