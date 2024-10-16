import React from 'react';

const roomsData = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: (
      <div>
        <p>
          Our Deluxe Room offers a blend of luxury and comfort, featuring a king-size bed adorned with premium linens and plush pillows. This spacious room is designed with elegant decor, providing a tranquil atmosphere for relaxation. 
        </p>
        <p>
          Guests can enjoy stunning city views from the large windows that allow natural light to flood the room. The room includes a well-appointed seating area, perfect for enjoying a cup of coffee or reading a book. 
        </p>
        <p>
          Modern amenities such as a flat-screen TV with cable channels, a mini-bar stocked with beverages, and complimentary high-speed Wi-Fi ensure you stay connected and entertained. 
        </p>
        <p>
          The en-suite bathroom features a luxurious soaking tub and a separate walk-in shower, along with complimentary toiletries for your convenience.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Suite Room',
    description: (
      <div>
        <p>
          The Suite Room is the epitome of luxury and space, ideal for guests seeking an upscale experience. This room includes a separate living area with a comfortable sofa and coffee table, providing ample space for relaxation or entertaining guests.
        </p>
        <p>
          The bedroom is furnished with a king-size bed, ensuring a restful night’s sleep. Guests will appreciate the high-end amenities, including a large flat-screen TV, a sound system, and a fully stocked mini-bar.
        </p>
        <p>
          Enjoy the convenience of a dining table for in-room dining or business meetings. The Suite Room also features a lavish en-suite bathroom, complete with a soaking tub, double vanity, and a walk-in shower, along with plush bathrobes and slippers for a touch of indulgence.
        </p>
        <p>
          Personalized services, such as concierge assistance and room service, are available to enhance your stay.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: 'Standard Room',
    description: (
      <div>
        <p>
          Our Standard Room is perfect for budget-conscious travelers who still want a comfortable and enjoyable stay. This cozy room features a double bed with soft bedding and essential furnishings for a pleasant experience.
        </p>
        <p>
          Designed with simplicity and functionality in mind, the Standard Room includes a workspace for those needing to catch up on work, as well as a flat-screen TV for entertainment. 
        </p>
        <p>
          The room is equipped with essential amenities such as complimentary Wi-Fi, a small refrigerator, and tea/coffee making facilities for added convenience.
        </p>
        <p>
          The en-suite bathroom is well-equipped with a shower, fresh towels, and complimentary toiletries, ensuring that guests have everything they need for a pleasant stay.
        </p>
      </div>
    ),
  },
];

const Rooms = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Our Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roomsData.map((room) => (
          <div key={room.id} className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
            <p className="text-gray-700">{room.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
