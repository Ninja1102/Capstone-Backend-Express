const express = require("express");
const connectDB = require("./config/db");
const eventRoutes = require("./routes/eventRoutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 9992;

connectDB();
app.use(bodyParser.json());
app.use("/event", eventRoutes);

app.listen(PORT, () => {
  console.log(`Event service running on port ${PORT}`);
});
