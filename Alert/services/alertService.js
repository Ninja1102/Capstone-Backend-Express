const Alert = require('../models/Alert');
const eventClient = require('./eventClient');
const userClient = require('./userClient');

exports.getAlertsByUserId = async (userId) => {
    const alerts = await Alert.find({ userId, hasSeen: false });
    const events = await Promise.all(alerts.map(a => eventClient.getEvent(a.eventId)));
    return events;
};

exports.createAlertForEvent = async (eventId) => {
    const users = await userClient.getAllUsers();
    await Promise.all(users.map(user => {
        const alert = new Alert({ userId: user.userId, eventId });
        return alert.save();
    }));
    return 'saved all';
};

exports.createAlertForUser = async (userId) => {
    const events = await eventClient.getAllEvents();
    const now = new Date();
    await Promise.all(events
        .filter(e => new Date(e.eventDate) > now)
        .map(event => {
            const alert = new Alert({ userId, eventId: event.eventId });
            return alert.save();
        }));
    return 'saved all';
};

exports.markAlertSeen = async (userId, eventId) => {
    const alert = await Alert.findOne({ userId, eventId });
    if (alert) {
        alert.hasSeen = true;
        await alert.save();
    }
};

exports.getAllAlerts = async () => {
    return await Alert.find();
};
