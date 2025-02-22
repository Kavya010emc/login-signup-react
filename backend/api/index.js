const app = express(); 

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Login API Route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const storedUsername = process.env.USERNAME || "kavya";
  const storedPassword = process.env.PASSWORD || "1234";

  if (username === storedUsername && password === storedPassword) {
    return res.status(200).json({ message: "Login Success" });
  } else {
    return res.status(401).json({ message: "Login Failed" });
  }
});

// Export for Vercel
module.exports = app;