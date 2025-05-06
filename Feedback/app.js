const express = require('express');
const mongoose = require('mongoose');
const feedbackRoutes = require('./routes/feedbackRoutes');
const FeedbackDto = require('./dtos/FeedbackDto');

const app = express();
app.use(express.json());
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/feedback', feedbackRoutes);

app.listen(9995, () => console.log('Server running on port 9995'));
