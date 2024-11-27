import React from 'react';

const InstagramImage = () => {
  return (
    <div className="space-y-6 p-6 m-4">
      <div className="p-4 bg-white rounded-sm shadow-md">
        <img
          src=".//Images/image 37.png" // Replace with your image URL
          alt="First"
          className="w-full h-auto block rounded-lg"
        />
      </div>
      <div className="p-4 bg-white rounded-sm shadow-md">
        <img
          src=".//Images/image 36.png" // Replace with your image URL
          alt="Second"
          className="w-full h-auto block rounded-lg"
        />
      </div>
    </div>
  );
};

export default InstagramImage;
