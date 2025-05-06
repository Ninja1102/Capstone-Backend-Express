const cron = require('node-cron');
const Reminder = require('../models/Reminder');
const { sendSms, sendCall } = require('../services/reminderService');

// Placeholder for actual user data
const dummyUserData = {
  '+1234567890': {
    name: 'John Doe',
    preferredContact: 'sms'
  }
};

const scheduleTasks = () => {
  cron.schedule('* * * * *', async () => {
    const now = new Date();
    const upcoming = new Date(now.getTime() + 60000); // next minute

    const reminders = await Reminder.find({
      scheduledTime: { $lte: upcoming, $gte: now }
    });

    for (const reminder of reminders) {
      const to = '+1234567890'; // Replace with actual lookup
      const message = `Reminder for Event ID: ${reminder.eventId}`;

      try {
        if (reminder.needSms) await sendSms(to, message);
        if (reminder.needCall) await sendCall(to, message);
        // Remove or mark as sent
        await Reminder.deleteOne({ _id: reminder._id });
      } catch (err) {
        console.error('Error sending reminder:', err.message);
      }
    }
  });

  console.log('Scheduled job initialized (runs every minute)');
};

module.exports = scheduleTasks;
