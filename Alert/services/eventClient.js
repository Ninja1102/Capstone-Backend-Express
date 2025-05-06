const axios = require('axios');
const { EVENT_SERVICE_URL } = process.env;

exports.getEvent = async (eventId) => {
    const res = await axios.get(`${EVENT_SERVICE_URL}/getEvent/${eventId}`);
    return res.data;
};

exports.getAllEvents = async () => {
    const res = await axios.get(`${EVENT_SERVICE_URL}/getAllEvents`);
    return res.data;
};
