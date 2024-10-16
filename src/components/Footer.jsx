import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center p-4 mt-8">
      <div className="flex justify-center space-x-4 mb-2">
        <FaFacebook className="hover:text-gray-300 cursor-pointer" />
        <FaTwitter className="hover:text-gray-300 cursor-pointer" />
        <FaInstagram className="hover:text-gray-300 cursor-pointer" />
      </div>
      <p>&copy; 2024 Hotel Flex. All rights reserved.Developed By Tabanoon mim</p>
    </footer>
  );
};

export default Footer;