import React from 'react';
import roomImage1 from '../assets/room1.jpg';
import roomImage2 from '../assets/room2.jpg';
import { FaWifi, FaSwimmingPool, FaConciergeBell, FaUtensils, FaSpa, FaShuttleVan } from 'react-icons/fa';

const HotelDetails = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">About Our Hotel</h2>
      <p className="text-center text-lg mb-8">
        Nestled in the heart of the city, our hotel is a luxurious oasis designed to offer comfort, convenience, and unforgettable experiences. 
        From the moment you step into our grand lobby, you are welcomed with warm hospitality and an ambiance that exudes elegance and sophistication.
        Whether you're here for business, leisure, or a family vacation, we ensure that your stay with us is nothing short of extraordinary.
      </p>

      {/* Our Story Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
        <p className="mb-4">
          Our journey began in 2005 with a dream to redefine the standard of luxury and service in the hospitality industry. From a modest start, 
          we have grown into a renowned establishment, known for blending modern comforts with timeless elegance. Our hotel is a sanctuary for those 
          seeking a unique combination of top-tier facilities and personalized service.
        </p>
        <p className="mb-4">
          Over the years, our hotel has hosted countless travelers from around the globe, earning a reputation for excellence and innovation in hospitality.
          Our commitment to delivering exceptional experiences has been recognized by numerous awards, and we continue to set the benchmark for luxury 
          in the city. Every detail of our hotel is carefully crafted to ensure our guests feel at home, with a touch of sophistication that defines who we are.
        </p>
      </div>

      {/* Hotel Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaWifi className="text-blue-600 mr-2" /> Enjoy high-speed internet connectivity throughout the hotel, ensuring you're always connected whether you’re relaxing in your room or by the pool.
            </li>
            <li className="flex items-center">
              <FaSwimmingPool className="text-blue-600 mr-2" /> Dive into our sparkling outdoor swimming pool, the perfect place to unwind and soak up the sun with comfortable lounge chairs and refreshing poolside drinks.
            </li>
            <li className="flex items-center">
              <FaConciergeBell className="text-blue-600 mr-2" /> Our concierge service is available 24/7 to assist with all your needs, from making dinner reservations to organizing city tours and providing local tips.
            </li>
            <li className="flex items-center">
              <FaUtensils className="text-blue-600 mr-2" /> Indulge in a culinary journey at our in-house restaurant, where we serve a diverse menu featuring international and local delicacies, prepared by our master chefs.
            </li>
            <li className="flex items-center">
              <FaSpa className="text-blue-600 mr-2" /> Relax and rejuvenate at our full-service spa, offering a range of treatments including massages, facials, and wellness therapies to revitalize your body and mind.
            </li>
            <li className="flex items-center">
              <FaShuttleVan className="text-blue-600 mr-2" /> We provide a complimentary shuttle service to and from the airport, ensuring your journey to our hotel is as smooth and hassle-free as possible.
            </li>
          </ul>
        </div>

        {/* Room Details Section */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-2xl font-semibold mb-4">Our Rooms</h3>
          <p className="mb-4">
            Our rooms are thoughtfully designed to offer a blend of comfort and style. Each room features modern furnishings, premium bedding, 
            and all the amenities you need for a restful stay. Wake up to stunning cityscape views, enjoy a morning coffee in your spacious living 
            area, and unwind after a long day in the tranquility of your private space.
          </p>
          <p className="mb-4">
            We offer a range of room types, from cozy singles to luxurious suites, all equipped with air-conditioning, flat-screen TVs, mini-bars, 
            and complimentary toiletries. Every room is a peaceful retreat, meticulously cleaned and maintained to the highest standards.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src={roomImage1} alt="Deluxe Room" className="w-full h-40 object-cover rounded-md shadow-md" />
            <img src={roomImage2} alt="Suite Room" className="w-full h-40 object-cover rounded-md shadow-md" />
          </div>
        </div>
      </div>

      {/* Dining Experience Section */}
      <div className="bg-blue-50 p-6 rounded-md shadow-md mb-10">
        <h3 className="text-2xl font-bold text-center mb-4">Dining Experience</h3>
        <p className="text-center mb-4">
          Delight your senses with an exquisite dining experience at our hotel's signature restaurant. Our chefs curate seasonal menus that showcase 
          the best of international and local cuisines, using fresh ingredients sourced from local farms and markets.
        </p>
        <p className="text-center mb-4">
          Enjoy your meals in an elegant dining room or choose to dine al fresco on our terrace with breathtaking views of the city skyline. 
          Our rooftop bar is the perfect place to end your day, offering a wide selection of wines, cocktails, and light bites in a relaxed atmosphere.
        </p>
      </div>

      {/* Guest Reviews Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-2xl font-bold text-center mb-4">Guest Reviews</h3>
        <p className="text-center mb-4">
          Our guests consistently praise our attention to detail, exceptional service, and welcoming environment. Here's what some of our guests have to say:
        </p>
        <p className="italic text-center mb-2">"An amazing stay! The staff was friendly, the rooms were spotless, and the view was breathtaking! Highly recommended for anyone looking for a luxurious experience."</p>
        <p className="italic text-center mb-2">"Best hotel experience I've ever had. The spa was incredibly relaxing, and the food was out of this world! I can't wait to come back!"</p>
        <p className="italic text-center">"I highly recommend this hotel for its excellent service, fantastic amenities, and the overall sense of tranquility it offers."</p>
      </div>
    </div>
  );
};

export default HotelDetails;
