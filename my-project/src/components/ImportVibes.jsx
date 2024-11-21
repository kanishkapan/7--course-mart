import React from "react";

const ImportedVibes = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 lg:px-20 py-6 bg-white">
      {/* Left Section */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-michroma text-black leading-tight">
          Imported vibes, <br />
          <span>no passport needed.</span>
        </h1>
       
      </div>
      <p className="text-sm md:text-base lg:text-lg mt-2 text-gray-500">
          Uncover a curated selection of premium <br /> international products
          across diverse categories.
        </p>

      {/* Right Section - Navigation Buttons */}
      <div className="flex space-x-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200">
          <span className="text-xl text-gray-500">←</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-gray-800">
          <span className="text-xl text-white">→</span>
        </button>
      </div>
    </div>
  );
};

export default ImportedVibes;
