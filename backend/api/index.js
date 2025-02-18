const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({
    origin: "https://login-signup-black.vercel.app/", // Change this to your actual frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

  

// Set up the login credentials
var username = "kavya";
var password = 1234;

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // This ensures the backend can read JSON data

app.post("/login", function (req, res) {
    console.log(req.body); // Log the entire request body to see what's being sent
    if (req.body.username === username && Number(req.body.password) === password) {
      res.send("Login Success");
    } else {
      res.send("Login Failed");
    }
  });
  


// Start the server on port 5000
app.listen(5000, function () {
  console.log("server started...");
});
