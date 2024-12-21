const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    phone:{ type:Number, required: true},
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    guestNo: { type: Number, required: true },
    roomID: { type: Number, required: true},
    specialR: { type: String, required: false },
    
});

const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;