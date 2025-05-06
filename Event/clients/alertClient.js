const axios = require("axios");
require("dotenv").config();

const ALERT_SERVICE_URL = process.env.ALERT_SERVICE_URL;

const alertClient = {
  async createAlert(eventId) {
    try {
      const response = await axios.post(`${ALERT_SERVICE_URL}/createAlert/${eventId}`);
      return response.data;
    } catch (error) {
      console.error("Alert creation failed:", error.message);
    }
  },
};

module.exports = alertClient;
