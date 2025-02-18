const express = require("express")
const cors = require("cors");
const app = express();

app.use(cors({
    origin: "http://localhost:5173", // Make sure to use the correct protocol and port
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Set up the login credentials
const username = "kavya";
const password = "1234"; // Treat password as a string for comparison

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // This ensures the backend can read JSON data

app.post("/login", function (req, res) {
    console.log(req.body); // Log the entire request body to see what's being sent
    if (req.body.username === username && req.body.password === password) {
        res.status(200).send("Login Success");
    } else {
        res.status(401).send("Login Failed"); // Return 401 status for failed login
    }
});

// Start the server on port 5000
app.listen(5000, function () {
  console.log("Server started on port 5000...");
});
