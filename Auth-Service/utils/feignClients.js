const axios = require('axios');
const { USER_SERVICE_URL, ALERT_SERVICE_URL } = process.env;

const createUser = async (userId) => {
  await axios.post(`${USER_SERVICE_URL}/create/${userId}`);
};

const createAlert = async (userId) => {
  await axios.post(`${ALERT_SERVICE_URL}/createAlertforUsers/${userId}`);
};

module.exports = { createUser, createAlert };
