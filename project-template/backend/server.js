const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/hotel", { useNewUrlParser: true, useUnifiedTopology: true });

// API Routes
app.use("/api", authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port 5000`);
});
