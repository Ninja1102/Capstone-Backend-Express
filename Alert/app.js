require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const alertRoutes = require('./routes/alertRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(console.error);

app.use('/api/alert', alertRoutes);

const PORT = process.env.PORT || 9994;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
