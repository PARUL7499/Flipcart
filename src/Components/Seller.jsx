import React, { useRef } from 'react';
import seller from '../Data/seller2.json';

function Seller() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div dir="ltr" className="bg-white">
      <div className="flex justify-center gap-8 w-full p-4 posiition-absolute left-1%">
        {/* Seller Items Section */}
        <div className="w-[70vw] relative">
          <h2 className="text-lg font-semibold mb-4">Best of Electronics</h2>

          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full z-10 hover:bg-gray-100 px-2 py-1"
          >
            ‹
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full z-10 hover:bg-gray-100 px-2 py-1"
          >
            ›
          </button>

          {/* Unified Background Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto h-[40vh] bg-white scroll-smooth no-scrollbar"
          >
            {seller.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center w-36 mx-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-contain mx-auto"
                />
                <span className="block mt-2 text-sm font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Promotional Card */}
        <div className="w-60 h-90 shadow-lg flex items-center justify-center">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1060/1620/image/ce3cf81edb760559.jpg?q=60"
            alt="Promotional"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Seller;
