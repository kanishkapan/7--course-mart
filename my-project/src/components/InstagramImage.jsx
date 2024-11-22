import React from 'react';

const InstagramImage = () => {
  const imageStyle = {
    width: '100%', // Make the image take full width of the container
    height: 'auto', // Maintain aspect ratio
    display: 'block', // Prevent extra gaps for inline elements
  };

  return (
    <div>
      <div>
        <img
          src=".//Images/image 37.png" 
          // Replace with your image URL
          alt="First"
          style={imageStyle}
        />
      </div>
      <div>
        <img
          src=".//Images/image 36.png"  // Replace with your image URL
          alt="Second"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default InstagramImage;
