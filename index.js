const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./db");
const todoRoutes = require("./todoRoutes");

const app = express();
const port = 3040;
// Connect to MongoDB
connectDB();

// Configure middleware
app.use(bodyParser.json());

// Use todoRoutes for handling /api/todos endpoints
app.use("/api/todos", todoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
