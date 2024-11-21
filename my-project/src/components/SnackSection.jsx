import React from 'react';

const SnacksSection = () => {
  return (
    <section className="relative flex items-center justify-between h-screen px-8 bg-white">
      {/* Image on the left */}
      <div className="w-1/2">
        <img
          src=".//Images/IMG_20241119_174301.jpg" // Replace with the uploaded image URL if available
          alt="Monster Drink"
          className="w-full h-[600px] object-cover rounded-lg"
        />
      </div>

      {/* Text Content on the right */}
      <div className="w-1/2 text-left pl-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 font-michroma">
          Snacks so rare, your friends will think you smuggled them.
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Curious to explore more? Let’s connect and redefine your taste journey with 7 Course Mart
        </p>
        <div className="flex space-x-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">850+</h3>
            <p className="text-lg text-gray-600">Daily Walk-in</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">1000+</h3>
            <p className="text-lg text-gray-600">Brands</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">35000+</h3>
            <p className="text-lg text-gray-600">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnacksSection;
