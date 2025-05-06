const express = require('express');
const router = express.Router();
const controller = require('../controllers/alertController');

router.get('/user/:userId', controller.getAlertsByUser);
router.post('/createAlert/:eventid', controller.createAlertForEvent);
router.post('/createAlertforUsers/:userId', controller.createAlertForUser);
router.put('/seen/:userid/:eventid', controller.markAlertSeen);
router.get('/getAll', controller.getAllAlerts);

module.exports = router;
