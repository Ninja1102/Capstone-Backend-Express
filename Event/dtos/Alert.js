// dtos/Alert.js
class Alert {
    constructor(alertId, eventId, userId, hasSeen = false) {
      this.alertId = alertId;
      this.eventId = eventId;
      this.userId = userId;
      this.hasSeen = hasSeen;
    }
  }
  
  module.exports = Alert;
  