const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // This ensures the backend can read JSON data

// Set up the login credentials
const username = "kavya";
const password = "1234"; // Treat password as a string for comparison

app.post("/login", function (req, res) {
    console.log(req.body); // Log the entire request body to see what's being sent
    if (req.body.username === username && req.body.password === password) {
        res.json({ message: "Login Success" });
    } else {
        res.json({ message: "Login Failed" });
    }
});

// Export the Express app for Vercel Serverless Functions
module.exports = app;
