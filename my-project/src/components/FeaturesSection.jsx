import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Expert Staff Assistance",
      description: ["Country-wise Sections", "Clear Categories", "Easy Navigation"],
      image: "./Images/IMG_20241119_182823.jpg", // Replace with actual image URLs
    },
    {
      title: "Intuitive Store Layout",
      description: ["Country-wise Sections", "Clear Categories", "Easy Navigation"],
      image: "./Images/IMG_20241119_180718.jpg", // Replace with actual image URLs
    },
    {
      title: "Product Sampling",
      description: ["Weekly Tastings", "Product Demos", "Chef Interactions"],
      image: "./Images/IMG_20241119_180532.jpg", // Replace with actual image URLs
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-4 sm:px-8 py-6 sm:py-10">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center text-gray-900 mb-8 sm:mb-12 px-4">
        “Our cravings are basic, our shelves are international. Let’s fix that, shall we?”
      </h1>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl group"
          >
            {/* Feature Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{feature.title}</h2>
                <ul className="space-y-1 text-sm sm:text-lg">
                  {feature.description.map((item, i) => (
                    <li key={i} className="opacity-80 group-hover:opacity-100">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-blue-500 group-hover:animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
