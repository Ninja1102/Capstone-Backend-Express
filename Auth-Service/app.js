require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // clearer naming
const initAdmin = require('./config/defaultAdmin');

const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(process.env.PORT || 9996, async () => {
  console.log(`Auth service running on port ${process.env.PORT || 9996}`);
  await connectDB();
  await initAdmin();
});
