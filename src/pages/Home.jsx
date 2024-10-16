import React from 'react';
import hotelImage from '../assets/hotel-hero.jpg';
import HotelDetails from '../components/HotelDetails';

const Home = () => {
  return (
    <div>
      <div className="relative">
        <img src={hotelImage} alt="Hotel" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold ">Welcome to Hotel Flex</h1>
        </div>
      </div>
      <HotelDetails />
    </div>
  );
};

export default Home;
