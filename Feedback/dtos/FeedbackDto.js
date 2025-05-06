class FeedbackDto {
    constructor({ feedbackId, feedbackMessage, eventId, userId }) {
      this.feedbackId = feedbackId;
      this.feedbackMessage = feedbackMessage;
      this.eventId = eventId;
      this.userId = userId;
    }
  }
  
  module.exports = FeedbackDto;
  