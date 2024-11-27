import React from "react";

const ImportedVibes = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-6 bg-white space-y-6 lg:space-y-0">
      {/* Left Section */}
      <div className="text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-michroma text-black leading-tight">
          Imported vibes, <br />
          <span>no passport needed.</span>
        </h1>
      </div>

      {/* Description Section */}
      <p className="text-sm md:text-base lg:text-lg text-center lg:text-left text-gray-500 max-w-md">
        Uncover a curated selection of premium <br /> international products
        across diverse categories.
      </p>

      {/* Right Section - Navigation Buttons */}
      <div className="flex items-center space-x-4 justify-center lg:justify-start">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 transition">
          <span className="text-2xl mb-2 font-semibold mt-0 text-gray-500">←</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition">
          <span className="text-2xl mb-2 font-semibold text-white">→</span>
        </button>
      </div>
    </div>
  );
};

export default ImportedVibes;
