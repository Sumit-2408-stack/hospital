const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple test route
app.get("/", (req, res) => {
  res.send(" Backend is running and connected!");
});

// API Route to check form submission
app.post("/submit", (req, res) => {
  console.log(" Data received from frontend:", req.body);

  res.json({
    success: true,
    message: "Form data received successfully!",
    data: req.body, // send back what we got
  });
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);