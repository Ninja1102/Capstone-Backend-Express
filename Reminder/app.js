require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const reminderRoutes = require('./routes/reminderRoutes');
const scheduleTasks = require('./utils/scheduler');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

connectDB().then(() => {
  scheduleTasks(); // start scheduled jobs after DB connection
}).catch(err => console.error('MongoDB connection error:', err));

app.use('/api/reminders', reminderRoutes);

const PORT = process.env.PORT || 9993;
app.listen(PORT, () => {
  console.log(`Reminder service is running on port ${PORT}`);
});
