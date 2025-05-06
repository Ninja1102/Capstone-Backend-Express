const Feedback = require('../models/Feedback');
const axios = require('axios');
const FeedbackDto = require('../dtos/FeedbackDto');

const USER_SERVICE = 'http://localhost:9991/api/residents';
const EVENT_SERVICE = 'http://localhost:9992/event';

class FeedbackService {
  static async addFeedback(feedbackDto) {
    const feedback = new Feedback(feedbackDto);
    const saved = await feedback.save();
    return new FeedbackDto(saved);
  }

  static async getAllFeedbacks() {
    const feedbacks = await Feedback.find();
    return feedbacks.map(fb => new FeedbackDto(fb));
  }

  static async deleteFeedback(feedbackId) {
    await Feedback.deleteOne({ feedbackId });
  }

  static async updateFeedback(feedbackId, newDto) {
    const updated = await Feedback.findOneAndUpdate(
      { feedbackId },
      { feedbackMessage: newDto.feedbackMessage },
      { new: true }
    );
    return updated ? new FeedbackDto(updated) : null;
  }

  static async getFeedbackByEventId(eventId) {
    const feedbacks = await Feedback.find({ eventId });

    return await Promise.all(feedbacks.map(async (f) => {
      const userRes = await axios.get(`${USER_SERVICE}/${f.userId}`);
      const user = userRes.data;

      return {
        feedbackId: f.feedbackId,
        feedbackMessage: f.feedbackMessage,
        eventId: f.eventId,
        userId: f.userId,
        userName: user.userName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        image: user.image,
        status: user.status,
        // Optionally: eventTitle, eventDescription via EVENT_SERVICE
      };
    }));
  }

  static async getFeedbackByUserId(userId) {
    return await Feedback.find({ userId });
  }

  static async getFeedbackByEventIdAndUserId(eventId, userId) {
    const feedback = await Feedback.findOne({ eventId, userId });
    return feedback ? new FeedbackDto(feedback) : null;
  }
}

module.exports = FeedbackService;
