const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");

const mongouri = "mongodb://localhost:27017/lab1db"; // MongoDB URI
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(mongouri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(8000, () => console.log("App started on port 8000"));
  })
  .catch((error) => {
    console.error("Can't connect to MongoDB", error);
  });

// Routes

// Welcome route
app.get("/", (req, res) => {
  res.send("Hello World, from cs309");
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user by ID
app.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete user by ID
app.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: `Cannot find any user with ID ${req.params.id}` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new user
app.post("/adduser", async (req, res) => {
  try {
    const userParam = req.body;
    // Check if the email already exists
    if (await User.findOne({ email: userParam.email })) {
      return res.status(400).send(`Email "${userParam.email}" already exists.`);
    }
    const user = new User(userParam);
    await user.save();
    res.status(201).send("User added successfully");
  } catch (err) {
    res.status(500).send(`Server error: ${err.message}`);
  }
});

// Update user by ID (optional, as needed)
app.put("/user/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
