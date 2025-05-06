const express = require('express');
const router = express.Router();
const controller = require('../controllers/feedbackController');


router.post('/create-feedback', controller.createFeedback);
router.get('/get-feedbacks', controller.getAllFeedbacks);
router.delete('/delete/:feedbackId', controller.deleteFeedback);
router.put('/update-feedback/:feedbackId', controller.updateFeedback);
router.get('/get-feedback-by-eventId/:eventId', controller.getByEventId);
router.get('/get-feedback-by-userId/:userId', controller.getByUserId);
router.get('/get-feedback-by-UserId-EventId/:eventId/:userId', controller.getByEventIdAndUserId);

module.exports = router;
