const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const mongouri = "mongodb://localhost:27017/user"; // MongoDB URI
const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(mongouri)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3001, () => console.log("App started on port 3000"));
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
app.get("/login", async (req, res) => {
  await User.findOne(
    { name: req.query.name, password: req.query.password },
    (err, data) => {
      if (err) throw err;
      if (data) {
        res.send("Login successful");
        res.redirect("/#home");
      } else {
        res.send("Invalid credentials");
      }
    }
  );
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
      return res
        .status(404)
        .json({ message: `Cannot find any user with ID ${req.params.id}` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new user
app.post("/register", async (req, res) => {
  try {
    const userParam = req.body;
    // Check if the email already exists
    const userr=await User.findOne( {username: userParam.username})
    console.log(userr);
      if(userr){
        return res.status(400).send(`Username "${userParam.username}" already exists.`);  // Change to appropriate error message as needed.  For example, username already exists.  You can use the same logic for email as well.  The email validation in the server-side code is omitted for brevity.  For production code, consider adding email validation.  Also, you may want to hash the password before saving it in the database to enhance security.  In this example, we are just storing the password as plain text.  You should consider using a secure hashing algorithm like bcrypt or Argon2.  For the purpose of this example, we will keep it simple.  You should also consider implementing rate limiting to prevent brute force attacks.  You can use libraries like express-rate-limit for this purpose.  For the purpose of this example, we will keep it simple.  You should consider implementing rate limiting to prevent brute force
      }

    // if (await User.findOne({ email: userParam.email })) {
    //   return res.status(400).send(`Email "${userParam.email}" already exists.`);
    // }

    const user = new User(userParam);
    await user.save();
    res.redirect('/login');
  } catch (err) {
    res.status(500).send(`Server error: ${err.message}`);
  }
});

// Update user by ID (optional, as needed)
app.put("/user/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// app.listen(3001);
