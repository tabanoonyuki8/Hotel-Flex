import React from 'react';

const Rooms = () => {
  return (
    <div className="rooms-container p-8">
      <h2 className="text-2xl font-bold mb-6">Our Rooms</h2>

      {/* Room 1 */}
      <div className="room mb-8">
        <h3 className="text-xl font-semibold mb-2">Room 1 - Deluxe</h3>
        <img
          src="https://www.peninsula.com/en/-/media/12---london-property/rooms/20230918-new-images/london_deluxe-room-king_resized.jpg?mw=905&hash=5EBA7EAB9A5C9EC1B43B72F28067F469" 
          alt="Room 1 - Deluxe"
          className="w-full h-[300px] object-cover mb-4 rounded shadow"
        />
        <p className="mb-2">
          Step into luxury with our Deluxe Suite, featuring a spacious layout adorned with elegant decor. This suite comes equipped with a king-sized bed draped in premium linens, ensuring a restful night’s sleep. 
        </p>
        <p className="mb-2">
          The en-suite bathroom boasts modern fixtures, a soaking tub, and a separate rainfall shower for your relaxation. Enjoy stunning views of the city skyline from your private balcony, perfect for morning coffees or evening cocktails.
        </p>
        <p className="mb-2">
          Additional amenities include a flat-screen TV, a mini-bar stocked with refreshments, and complimentary high-speed Wi-Fi. This room is ideal for couples on a romantic getaway or guests celebrating special occasions.
        </p>
        <p className="font-bold">Price: 10000 Taka per night</p>
      </div>

      {/* Room 2 */}
      <div className="room mb-8">
        <h3 className="text-xl font-semibold mb-2">Room 2 - Suite</h3>
        <img
          src="https://longbeachhotelbd.com/wp-content/uploads/2024/02/presidential_header.jpg" 
          alt="Room 2 - Suite"
          className="w-full h-[300px] object-cover mb-4 rounded shadow"
        />
        <p className="mb-2">
          Perfect for families, our Family Room is designed to accommodate up to four guests comfortably. This spacious room features a queen-sized bed along with two twin beds, ensuring everyone has a cozy spot to relax.
        </p>
        <p className="mb-2">
          The room is equipped with a large wardrobe, a work desk for business travelers, and a family-friendly entertainment system, including a flat-screen TV with access to various channels and streaming services.
        </p>
        <p className="mb-2">
          Enjoy the convenience of a mini-fridge for snacks and drinks, as well as a microwave for quick meals. The en-suite bathroom includes essential toiletries, a shower, and ample space for family needs. This room is the ideal choice for those traveling with children.
        </p>
        <p className="font-bold">Price: 7000 Taka per night</p>
      </div>

      {/* Room 3 */}
      <div className="room mb-8">
        <h3 className="text-xl font-semibold mb-2">Room 3 - Standard </h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hotel-suite-living-room.jpg/640px-Hotel-suite-living-room.jpg"
          alt="Room 3 - Standard"
          className="w-full h-[300px] object-cover mb-4 rounded shadow"
        />
        <p className="mb-2">
          Our Standard Room is the perfect retreat for solo travelers and business professionals seeking comfort without compromising on quality. The room features a comfortable queen-sized bed, a desk area for work, and a plush chair for relaxation.
        </p>
        <p className="mb-2">
          Enjoy modern amenities, including a flat-screen TV, complimentary Wi-Fi, and a coffee maker for your morning brew. The en-suite bathroom is stocked with essential toiletries and features a refreshing shower.
        </p>
        <p className="mb-2">
          Whether you’re here for a short stay or an extended visit, our Standard Room provides all the essentials for a peaceful and productive experience.
        </p>
        <p className="font-bold">Price: 5000 Taka per night</p>
      </div>
    </div>
  );
};

export default Rooms;
