const Event = require("../models/Event");
const EventDto = require("../dtos/EventDto");
const alertClient = require("../clients/alertClient");

class EventService {
  static async addEvent(eventData) {
    const event = new Event(new EventDto(eventData));
    const savedEvent = await event.save();
    await alertClient.createAlert(savedEvent._id);
    return savedEvent;
  }

  static async getAllEvents() {
    return await Event.find();
  }

  static async updateEvent(eventId, updatedData) {
    const event = await Event.findById(eventId);
    if (!event) return null;

    Object.assign(event, updatedData);
    return await event.save();
  }

  static async deleteEvent(eventId) {
    await Event.findByIdAndDelete(eventId);
  }

  static async getEvent(eventId) {
    return await Event.findById(eventId);
  }

  static async getEventsByUserId(userId) {
    return await Event.find({ userId });
  }
}

module.exports = EventService;
