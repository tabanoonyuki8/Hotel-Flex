import React, { useState } from 'react';
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';

const BookingForm = () => {
  const [guestName, setGuestName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Thank you, ${guestName}! Your booking for a ${roomType} from ${checkInDate} to ${checkOutDate} for ${numGuests} guest(s) has been received.`);
    // Here you would typically send this data to your server
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Check-in Date</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Check-out Date</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select a room type</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Suite Room">Suite Room</option>
            <option value="Standard Room">Standard Room</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Number of Guests</label>
          <input
            type="number"
            value={numGuests}
            onChange={(e) => setNumGuests(e.target.value)}
            min="1"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Book Now
        </button>
      </form>
      {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
    </div>
  );
};

const Bookings = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Hotel Booking</h1>
      <BookingForm />
    </div>
  );
};

export default Bookings;
