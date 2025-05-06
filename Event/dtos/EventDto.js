// dtos/EventDto.js
class EventDto {
    constructor({ eventTitle, eventDescription, eventImg, eventDate, eventType, userId }) {
      this.eventTitle = eventTitle;
      this.eventDescription = eventDescription;
      this.eventImg = eventImg;
      this.eventDate = eventDate;
      this.eventType = eventType || "EVENT";
      this.userId = userId;
    }
  }
  
  module.exports = EventDto;
  