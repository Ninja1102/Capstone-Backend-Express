const EventService = require("../services/eventService");

const addEvent = async (req, res) => {
  try {
    const event = await EventService.addEvent(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllEvents = async (req, res) => {
  const events = await EventService.getAllEvents();
  res.json(events);
};

const updateEvent = async (req, res) => {
  const updatedEvent = await EventService.updateEvent(req.params.eventId, req.body);
  updatedEvent ? res.json(updatedEvent) : res.status(404).send();
};

const deleteEvent = async (req, res) => {
  await EventService.deleteEvent(req.params.eventId);
  res.sendStatus(204);
};

const getEvent = async (req, res) => {
  const event = await EventService.getEvent(req.params.eventId);
  event ? res.json(event) : res.status(404).send();
};

const getEventsByUserId = async (req, res) => {
  const events = await EventService.getEventsByUserId(req.params.userId);
  res.json(events);
};

module.exports = { addEvent, getAllEvents, updateEvent, deleteEvent, getEvent, getEventsByUserId };
