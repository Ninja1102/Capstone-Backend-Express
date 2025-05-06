const axios = require("axios");
const baseURL = "http://localhost:9996/auth";

const authClient = {
  async getUser(userId) {
    const response = await axios.get(`${baseURL}/getuser/${userId}`);
    return response.data;
  },

  async deleteUser(userId) {
    const response = await axios.delete(`${baseURL}/delete/${userId}`);
    return response.data;
  },
};

module.exports = authClient;
