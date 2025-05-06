const express = require("express");
const connectDB = require("./config/db");
const residentRoutes = require("./routes/residentRoutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = 9991;

connectDB();

app.use(bodyParser.json());
app.use("/api/residents", residentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
