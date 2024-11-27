import React from "react";

const InstagramAdScreen = () => {
  return (
    <div className="relative bg-white h-screen flex flex-col sm:flex-row justify-center items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="./Images/image-removebg-preview (1).png" // Update path as per your project folder
        alt="Background"
        className="absolute inset-y-5 w-full h-full object-cover"
      />

      {/* Main Content - Text */}
      <div className="relative z-10 px-4 max-w-md sm:max-w-xl text-center sm:text-left sm:absolute sm:left-20">
        <h1 className="text-3xl sm:text-5xl font-bold text-black font-serif mb-4">
          Be Your Own Boss
          <br />
          With 7 Course Mart!
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Partner with us and enjoy unmatched guidance, marketing support, and
          access to a loyal customer base.
          <br />
          Start your journey now!
        </p>
      </div>

      {/* Instagram Logo */}
      <div className="relative z-10 flex flex-col items-center mt-6 sm:mt-0 sm:absolute sm:right-20 sm:mr-42  sm:transform  sm:flex-row">
        <img
          src="./Images/Instagram-logo-3-removebg-preview.png" // Ensure this path is correct for your project
          alt="Instagram Logo"
          className="h-36  sm:h-max" // Larger height for mobile, smaller for desktop
        />
    
      </div>
    </div>
  );
};

export default InstagramAdScreen;
