import React, { useState, useEffect } from 'react';
import './checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    nameOnCard: '',
    creditCardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
  });

  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const roomId = queryParams.get('roomId');
    setRoomId(roomId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Checkout failed');
      const result = await response.json();
      console.log('Payment successful:', result);
      alert('Payment Successful!');
    } catch (error) {
      console.error('Error:', error);
      alert('Payment Failed!');
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h1>HOTEL CHECKOUT FORM</h1>
          <h2>Receipt Form</h2>
          <p>Room No.: <strong>{roomId}</strong></p>
          <p>Room Charges: <strong>$500.00</strong></p>
          <p>Service Charges: <strong>$10.00</strong></p>
          <p>VAT: <strong>$0.00</strong></p>
          <h3>Total: <strong>${formData.totalAmount}</strong></h3>
          <h2>Payment Information</h2>
          <input
            type="text"
            name="nameOnCard"
            placeholder="Name on Credit Card"
            value={formData.nameOnCard}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="creditCardNumber"
            placeholder="Credit Card Number"
            value={formData.creditCardNumber}
            onChange={handleChange}
            required
          />
          <div className="expiry-cvc">
            <select name="expiryMonth" value={formData.expiryMonth} onChange={handleChange} required>
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select name="expiryYear" value={formData.expiryYear} onChange={handleChange} required>
              <option value="">Year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={formData.cvc}
              onChange={(e) => {
                const { value } = e.target;
                if (/^\d{0,3}$/.test(value)) {
                  setFormData({ ...formData, cvc: value });
                }
              }}
              maxLength={3}
              required
            />
          </div>
          <button type="submit" className="checkout-button">BOOK SECURELY</button>
        </form>
        <div className="hotel-info">
          <h3>ROYAL PALACE</h3>
          <p>$250.00 / night</p>
          <p>Entire Room for 5 members.</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
