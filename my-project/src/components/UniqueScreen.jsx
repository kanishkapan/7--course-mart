import React from "react";

const UniqueScreen = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 lg:px-20 py-10 bg-white">
      {/* Left Section */}
      <div className="lg:w-1/2 text-left">
        <h1 className="text-3xl lg:text-5xl font-bold font-michroma leading-tight text-black">
          What’s Unique About Us? <br />
          <span className="block mt-2">
            We make Beverages feel like VIPs
          </span>
        </h1>
        <p className="text-lg lg:text-xl mt-4 text-gray-700">
          At 7 Course Mart, we bring the world closer to your doorstep with an
          exclusive range of international products you won’t find anywhere
          else in India. From gourmet essentials to indulgent treats, our
          curated selection of 1,000+ premium brands and 35,000+ products
          ensures unmatched variety under one roof. Since 2020, we’ve been
          redefining the shopping experience, not just by offering products but
          by creating a culinary journey with expertly trained staff to guide
          you through every flavor and choice. Whether it’s exploring global
          tastes or finding your favorite international brands, we are your
          gateway to a world of flavors, crafted to elevate every visit into an
          unforgettable experience.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-semibold rounded-md">
          Join us Franchise Family
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img
          src="./Images/IMG_20241119_181302.jpg" // Replace with the correct image path
          alt="Beverage Shelf"
          className="rounded-lg shadow-lg w-full max-w-md object-cover max-h-[400px] lg:max-h-[500px]"
        />
      </div>
    </div>
  );
};

export default UniqueScreen;
