import React, { useState } from 'react';

const Booking = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const roomPrices = {
    room1: 1000,
    room2: 7000,
    room3: 5000,
  };

  const handleRoomSelection = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handleUserChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (selectedRoom && checkIn && checkOut) {
      const roomPrice = roomPrices[selectedRoom];
      alert(
        `Booking Successful!\n\nUser Information:\nName: ${userInfo.name}\nEmail: ${userInfo.email}\nPhone: ${userInfo.phone}\n\nCheck-in Date: ${checkIn}\nCheck-out Date: ${checkOut}\n\nSelected Room: ${selectedRoom}\nPrice: ${roomPrice} Taka`
      );
      // Add logic to save booking details to your database here
    } else {
      alert('Please fill in all fields before making the payment.');
    }
  };

  return (
    <div className="booking-container p-8">
      <h2 className="text-2xl font-bold mb-4">Book a Room</h2>

      <div className="room-selection mb-6">
        <h3 className="text-xl font-semibold mb-2">Select a Room:</h3>
        <select
          className="border p-2 w-full mb-4"
          value={selectedRoom}
          onChange={handleRoomSelection}
        >
          <option value="">Choose a Room</option>
          <option value="room1">Deluxe  - 10000 Taka</option>
          <option value="room2">Suite - 7000 Taka</option>
          <option value="room3">Standard - 5000 Taka</option>
        </select>
      </div>

      <form onSubmit={handlePaymentSubmit} className="payment-form">
        <h3 className="text-xl font-semibold mb-2">User Information:</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border p-2 w-full mb-4"
          value={userInfo.name}
          onChange={handleUserChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border p-2 w-full mb-4"
          value={userInfo.email}
          onChange={handleUserChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="border p-2 w-full mb-4"
          value={userInfo.phone}
          onChange={handleUserChange}
          required
        />

        <h3 className="text-xl font-semibold mb-2">Check-in and Check-out:</h3>
        <input
          type="date"
          name="checkIn"
          placeholder="Check-in Date"
          className="border p-2 w-full mb-4"
          value={checkIn}
          onChange={handleCheckInChange}
          required
        />
        <input
          type="date"
          name="checkOut"
          placeholder="Check-out Date"
          className="border p-2 w-full mb-4"
          value={checkOut}
          onChange={handleCheckOutChange}
          required
        />

        <h3 className="text-xl font-semibold mb-2">Payment Details:</h3>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          className="border p-2 w-full mb-4"
          value={paymentDetails.cardNumber}
          onChange={handlePaymentChange}
          required
        />
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date (MM/YY)"
          className="border p-2 w-full mb-4"
          value={paymentDetails.expiryDate}
          onChange={handlePaymentChange}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          className="border p-2 w-full mb-4"
          value={paymentDetails.cvv}
          onChange={handlePaymentChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Make Payment
        </button>
      </form>
    </div>
  );
};

export default Booking;
