const axios = require('axios');
const { USER_SERVICE_URL } = process.env;

exports.getAllUsers = async () => {
    const res = await axios.get(`${USER_SERVICE_URL}/allUsers`);
    return res.data;
};
