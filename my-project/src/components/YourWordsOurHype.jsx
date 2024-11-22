import React from 'react';

const YourWordsOurHype = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center text-center space-x-2">
        <span className="text-5xl md:text-6xl">&ldquo;</span>
        <span>Your Words, Our Hype!</span>
        <span className="text-5xl md:text-6xl">&rdquo;</span>
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-5xl">
        {/* First row */}
        <img
          src="https://via.placeholder.com/300" // Replace with the image URL
          alt="Child"
          className="w-full rounded-md"
        />
        <img
          src="https://via.placeholder.com/300" // Replace with the image URL
          alt="Bearded Man"
          className="w-full border-4 border-blue-400 rounded-md"
        />
        <img
          src="https://via.placeholder.com/300" // Replace with the image URL
          alt="Older Man"
          className="w-full rounded-md"
        />

        {/* Second row */}
        <img
          src="https://via.placeholder.com/300" // Replace with the image URL
          alt="Woman"
          className="w-full md:col-span-3 rounded-md"
          className="w-full md:col-span-3 rounded-md"
          

        />
      </div>
    </div>
  );
};

export default YourWordsOurHype;
