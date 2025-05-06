const alertService = require('../services/alertService');

exports.getAlertsByUser = async (req, res) => {
    const events = await alertService.getAlertsByUserId(req.params.userId);
    if (!events.length) return res.status(404).send();
    res.json(events);
};

exports.createAlertForEvent = async (req, res) => {
    const message = await alertService.createAlertForEvent(req.params.eventid);
    res.status(201).send(message);
};

exports.createAlertForUser = async (req, res) => {
    const message = await alertService.createAlertForUser(req.params.userId);
    res.status(201).send(message);
};

exports.markAlertSeen = async (req, res) => {
    await alertService.markAlertSeen(req.params.userid, req.params.eventid);
    res.sendStatus(200);
};

exports.getAllAlerts = async (req, res) => {
    const alerts = await alertService.getAllAlerts();
    res.json(alerts);
};
