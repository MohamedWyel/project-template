const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const booking = require("./models/booking");
const mongouri = "mongodb://127.0.0.1:27017/user"; // MongoDB URI
const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(mongouri)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => console.log("App started on port 3000"));
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
        return res.status(400).send(`Username "${userParam.username}" already exists.`);
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

// Book a service
app.post("/book", async (req, res) => {
  try {
    const { checkIn, checkOut, roomID } = req.body;
    const newCheckIn = new Date(checkIn);
    const newCheckOut = new Date(checkOut);
    const existingBookings = await booking.find({ roomID });

    for (let i = 0; i < existingBookings.length; i++) {
      const CheckIn = existingBookings[i].checkIn;
      const CheckOut = existingBookings[i].checkOut;


      if (newCheckIn < CheckOut && newCheckOut > CheckIn) {
        return res.status(400).json({ message: "Room is already booked for the requested dates." });
      }
    }


    const newBooking = new booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/book", async (req, res) => {
  try {
    const { checkIn, checkOut, roomID } = req.body;
    const newCheckIn = new Date(checkIn);
    const newCheckOut = new Date(checkOut);
    const existingBookings = await booking.find({ roomID });
    
    // Check if its valid
    for (let i = 0; i < existingBookings.length; i++) {
      const CheckIn = existingBookings[i].checkIn;
      const CheckOut = existingBookings[i].checkOut;


      if (newCheckIn < CheckOut && newCheckOut > CheckIn) {
        return res.status(400).json({ message: "Room is already booked for the requested dates." });
      }
    }


    const newBooking = new booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// Update a booking
app.patch("/book", async (req, res) => {
  try {
    const {  oldCheckIn, oldCheckOut, oldRoomID,checkIn, checkOut, roomID } = req.body;
    const newCheckIn = new Date(checkIn);
    const newCheckOut = new Date(checkOut);
    const existingBookings = await booking.find({ roomID });

    // Find the booking being updated
    const target = await booking.findOne({checkIn: new Date(oldCheckIn),
      checkOut: new Date(oldCheckOut),
      roomID: oldRoomID,
    });
    if (!target) {
      return res.status(404).json({ message: "Booking not found" });
    }
    // Check if its valid
    for (let i = 0; i < existingBookings.length; i++) {
      const existingCheckIn = existingBookings[i].checkIn;
      const existingCheckOut = existingBookings[i].checkOut;

      if (existingBookings[i]._id.toString() != target._id.toString()){
        if (newCheckIn < existingCheckOut && newCheckOut > existingCheckIn) {
        return res.status(400).json({ message: "Room is already booked for the requested dates." });
        }
      }
    }


    target.checkIn = newCheckIn;
    target.checkOut = newCheckOut;
    target.roomID = roomID;
    if (req.body.name) target.name = req.body.name;
    if (req.body.email) target.email = req.body.email;
    if (req.body.phone) target.phone = req.body.phone;
    if (req.body.guestNo) target.guestNo = req.body.guestNo;
    if (req.body.specialR) target.specialR = req.body.specialR;

    await target.save();
    res.status(200).json(target);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//delet bookings

app.delete("/book", async (req, res) => {
  try {
    const { checkIn, checkOut, roomID } = req.body;
    const book = await booking.findOneAndDelete({
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      roomID,
    });

    if (!book) {
      return res
        .status(404)
        .json({ message: "Cannot find any booking with the provided Dates." });
    }

    res.status(200).json({
      message: "Booking successfully deleted",
      deletedBooking: book,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});