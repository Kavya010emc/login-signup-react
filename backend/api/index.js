const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from a .env file

const app = express();
app.use(cors()); 
app.use(express.json()); // Middleware to parse JSON requests

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Login API Route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  // Use environment variables instead of hardcoding
  const storedUsername = process.env.USERNAME || "kavya";
  const storedPassword = process.env.PASSWORD || "1234";

  if (username === storedUsername && password === storedPassword) {
    res.status(200).json({ message: "Login Success" });
  } else {
    res.status(401).json({ message: "Login Failed" });
  }
});

// Export for Vercel
module.exports = app;
