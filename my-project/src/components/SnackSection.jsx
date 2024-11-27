import React from 'react';

const SnacksSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-auto px-4 sm:px-8 py-8 bg-white">
      {/* Image */}
      <div className="w-full mb-8">
        <img
          src="./Images/IMG_20241119_174301.jpg" // Replace with the uploaded image URL if available
          alt="Monster Drink"
          className="w-full h-64 sm:h-80 md:h-[600px] object-cover rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="text-left mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-michroma text-center">
          Snacks so rare, your friends will think you smuggled them.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center mb-8">
          Curious to explore more? Let’s connect and redefine your taste journey with 7 Course Mart.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-2/3">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">850+</h3>
          <p className="text-sm sm:text-lg text-gray-600">Daily Walk-in</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">1000+</h3>
          <p className="text-sm sm:text-lg text-gray-600">Brands</p>
        </div>
        <div className="col-span-2 text-center">
          <h3 className="text-2xl mt-3 sm:text-3xl font-bold text-gray-800">35000+</h3>
          <p className="text-sm sm:text-lg text-gray-600">Products</p>
        </div>
      </div>
    </section>
  );
};

export default SnacksSection;
