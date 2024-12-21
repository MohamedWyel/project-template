import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar";
import "./book.css";

const Book = () => {
    const [formData, setFormData] = useState({
        fullName: "", email: "", phone: "", checkIn: new Date(), checkOut: new Date(),
        roomType: "", guests: 1, specialRequests: ""
    });
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const validateForm = () => {
            setIsFormValid(
                formData.fullName && formData.email && formData.phone && formData.checkIn &&
                formData.checkOut && formData.roomType && formData.guests > 0
            );
        };
        validateForm();
    }, [formData]);

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleDateChange = (date, name) => setFormData({ ...formData, [name]: date });
    const resetForm = () => setFormData({ fullName: "", email: "", phone: "", checkIn: new Date(), checkOut: new Date(), roomType: "", guests: 1, specialRequests: "" });

    const handleSubmit = e => {
        e.preventDefault();
        if (isFormValid) {
            // Handle form submission here
            alert(`Booking Confirmed:\n\n${JSON.stringify(formData, null, 2)}`);
            window.location.href = "/checkout"; //go to checkout page
            resetForm(); //resest form
        }
    };

    const formFields = [
        { label: "Full Name", name: "fullName", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone Number", name: "phone", type: "tel" },
        { label: "Guests", name: "guests", type: "number", min: 1, max: 50 },
        { label: "Special Requests", name: "specialRequests", type: "textarea" }
    ];

    return (
        <div className="body">
            <div className="booking-container">
                <Navbar />
                <h2 className="booking-title">Book Your Stay</h2>
                <form className="booking-form" onSubmit={handleSubmit}>
                    {formFields.map(({ label, name, type, min, max }) => (
                        <label key={name}>
                            {label}:
                            {type === "textarea" ? (
                                <textarea
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    placeholder={`Enter your ${label.toLowerCase()}`}
                                />
                            ) : (
                                <input
                                    type={type}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    min={min}
                                    max={max}
                                    required
                                />
                            )}
                        </label>
                    ))}
                    <label>Check-In Date:
                        <DatePicker selected={formData.checkIn} onChange={(date) => handleDateChange(date, 'checkIn')} minDate={new Date()} dateFormat="yyyy-MM-dd" required />
                    </label>
                    <label>Check-Out Date:
                        <DatePicker selected={formData.checkOut} onChange={(date) => handleDateChange(date, 'checkOut')} minDate={formData.checkIn} dateFormat="yyyy-MM-dd" required />
                    </label>
                    <label>Room Type:
                        <select name="roomType" value={formData.roomType} onChange={handleChange} required>
                            <option value="">Select Room Type</option>
                            <option value="single">Single Room</option>
                            <option value="double">Double Room</option>
                            <option value="suite">Suite</option>
                        </select>
                    </label>
                    <div className="button-container">
                        <button type="submit" className="booking-button" disabled={!isFormValid}>Confirm Booking</button>
                        <button type="button" className="clear-button" onClick={resetForm}>Clear Form</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Book;
