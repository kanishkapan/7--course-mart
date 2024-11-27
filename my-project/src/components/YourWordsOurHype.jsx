import React from 'react';

const YourWordsOurHype = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4 md:p-8">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center text-center space-x-2 mb-4">
        {/* <span className="text-5xl md:text-6xl">&ldquo;</span> */}
        <span>Your Words, Our Hype!</span>
        {/* <span className="text-5xl md:text-6xl">&rdquo;</span> */}
      </h1>

      {/* Image Grid */}
      <div className="flex mt-4 flex-col space-y-6 w-full md:w-4/5">
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
        <img 
  src="Images/happy-1836445_640.jpg" 
  alt="Person 1" 
  className="w-20 h-20 rounded-[20px] mx-auto sm:mx-0 shadow-lg border-2 border-gray-400 "
/>          <p className="text-sm text-center sm:text-left border-2 border-gray-300 p-4 bg-gray-50 rounded-lg">
            "I grabbed Prime Hydration here before anyone else! Seriously, this store is where trends are born. My friends can't stop asking where I got it—it's my secret weapon for staying ahead of the game!"
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          <img src="Images/attractive-1869761_1280.jpg" alt="Person 2"  className="w-20 h-20 rounded-[20px] mx-auto sm:mx-0 shadow-lg border-2 border-gray-400 " />
          <p className="text-sm text-center sm:text-left border-2 border-gray-300 p-4 bg-gray-50 rounded-lg">
            "I grabbed Prime Hydration here before anyone else! Seriously, this store is where trends are born. My friends can't stop asking where I got it—it's my secret weapon for staying ahead of the game!"
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          <img src="Images/beard-1845166_640.jpg" alt="Person 3"  className="w-20 h-20 rounded-[20px] mx-auto sm:mx-0 shadow-lg border-2 border-gray-400 " />
          <p className="text-sm text-center sm:text-left border-2 border-gray-300 p-4 bg-gray-50 rounded-lg">
            "I grabbed Prime Hydration here before anyone else! Seriously, this store is where trends are born. My friends can't stop asking where I got it—it's my secret weapon for staying ahead of the game!"
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          <img src="Images/boy-6281260_640.jpg" alt="Person 4" className="w-20 h-20 rounded-[20px] mx-auto sm:mx-0 shadow-lg border-2 border-gray-400 " />
          <p className="text-sm text-center sm:text-left border-2 border-gray-300 p-4 bg-gray-50 rounded-lg">
            "I grabbed Prime Hydration here before anyone else! Seriously, this store is where trends are born. My friends can't stop asking where I got it—it's my secret weapon for staying ahead of the game!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourWordsOurHype;
