const FeedbackService = require('../services/feedbackService');
const FeedbackDto = require('../dtos/FeedbackDto');

exports.createFeedback = async (req, res) => {
  const created = await FeedbackService.addFeedback(req.body);
  res.status(201).json(created);
};

exports.getAllFeedbacks = async (req, res) => {
  const all = await FeedbackService.getAllFeedbacks();
  res.json(all);
};

exports.deleteFeedback = async (req, res) => {
  await FeedbackService.deleteFeedback(req.params.feedbackId);
  res.send(`Feedback with ID: ${req.params.feedbackId} successfully deleted!`);
};

exports.updateFeedback = async (req, res) => {
  const updated = await FeedbackService.updateFeedback(req.params.feedbackId, req.body);
  res.json(updated);
};

exports.getByEventId = async (req, res) => {
  const feedbacks = await FeedbackService.getFeedbackByEventId(req.params.eventId);
  res.json(feedbacks);
};

exports.getByUserId = async (req, res) => {
  const feedbacks = await FeedbackService.getFeedbackByUserId(req.params.userId);
  res.json(feedbacks);
};

exports.getByEventIdAndUserId = async (req, res) => {
  const feedback = await FeedbackService.getFeedbackByEventIdAndUserId(req.params.eventId, req.params.userId);
  res.json(feedback);
};
