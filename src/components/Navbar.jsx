import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hotel Flex</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/bookings" className="hover:text-gray-300">Bookings</Link>
          <Link to="/rooms" className="hover:text-gray-300">Rooms</Link>
          <Link to="/customers" className="hover:text-gray-300">Customers</Link>
          <li><Link to="/robot">Robot</Link></li> 
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
