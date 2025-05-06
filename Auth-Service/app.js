require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const app = express();

const authRoutes = require('./routes/auth.routes');
const initAdmin = require('./config/defaultAdmin');

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(process.env.PORT || 9996, async () => {
  console.log(`Auth service running on port ${process.env.PORT || 9996}`);
  await mongoose();
  await initAdmin();
});
