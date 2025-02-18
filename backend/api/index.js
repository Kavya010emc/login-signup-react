const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Login API Route
app.post("/api/login", (req, res) => {
  const username = "kavya";
  const password = "1234";

  if (req.body.username === username && req.body.password === password) {
    res.json({ message: "Login Success" });
  } else {
    res.json({ message: "Login Failed" });
  }
});

// Export for Vercel
module.exports = app;
