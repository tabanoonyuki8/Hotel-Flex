// src/pages/Robot.jsx
import React from 'react';

const Robot = () => {
  // Function to handle button click and show alert
  const handleButtonClick = (service) => {
    alert(`You have selected the ${service} service. Our robot will assist you shortly!`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Friendship with Robot</h1>
      <img 
        src="https://img.freepik.com/premium-photo/there-is-robot-carrying-food-tray-serving-customers-restaurant-robot-has-cheerful-expression-bright-eyes-creating-friendly-atmosphere_717906-65217.jpg" 
        alt="Robot Image" 
        className="w-64 h-64 object-cover mb-4 rounded-lg shadow-lg"
      />
      
      <p className="text-lg mb-6">
        Our innovative robot assistant is more than just a piece of technology; it's your dedicated companion during your stay. 
        Designed to deliver a seamless experience, the robot offers a range of services tailored to meet your needs, making your visit 
        as comfortable and hassle-free as possible. From taking care of everyday tasks to providing a touch of luxury, the robot's presence 
        ensures that you're well-cared for at all times. Its friendly demeanor and precise functionality transform your hotel experience 
        into something truly special, combining efficiency with a personalized touch.
      </p>

      {/* Buttons with alert functionality */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button 
          onClick={() => handleButtonClick('Breakfast')} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Breakfast
        </button>
        <button 
          onClick={() => handleButtonClick('Cleaning')} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Cleaning
        </button>
        <button 
          onClick={() => handleButtonClick('Fast Aid')} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Fast Aid
        </button>
        <button 
          onClick={() => handleButtonClick('Food Order')} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Food Order
        </button>
        <button 
          onClick={() => handleButtonClick('Others')} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Others
        </button>
      </div>
      <p className="text-lg mb-6">
        Emergencies can happen at any time, and our robot is prepared to assist with prompt and reliable fast aid services. Equipped with 
        the latest first aid supplies, the robot can deliver essential medical items to your room in seconds, providing peace of mind to you 
        and your loved ones. Whether it’s a minor cut or a more urgent need, our robot is ready to respond quickly, offering a level of service 
        that combines technology with compassion and care.
      </p>

      <p className="text-lg mb-6">
        Keeping your room clean and tidy has never been easier. Our robot assistant is equipped with advanced cleaning tools and sensors that 
        allow it to navigate your room with ease, removing dust, vacuuming floors, and ensuring every corner is spotless. It’s not just a 
        cleaning machine; it's a meticulous helper that respects your personal space while maintaining a high level of cleanliness. So, whether 
        you're stepping out for a meeting or relaxing in your room, you can trust that our robot will keep your surroundings fresh and orderly.
      </p>

      <p className="text-lg mb-6">
        The convenience of not having to carry your bags yourself is one of the many perks of our robot service. Whether you're checking in or 
        checking out, our robot is there to assist you by carrying your luggage directly to your room or vehicle. It's like having a personal 
        bellhop who never tires, ensuring that your transition from the lobby to your room is smooth and effortless. This feature is especially 
        helpful after a long journey when all you want to do is relax and let the robot take care of the heavy lifting.
      </p>

      <div className="mt-8">
        <button 
          onClick={() => alert('Live chat service is available now! How can we help you today?')} 
          className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 shadow-md"
        >
          Live Chat
        </button>
      </div>
    </div>
  );
};

export default Robot;
