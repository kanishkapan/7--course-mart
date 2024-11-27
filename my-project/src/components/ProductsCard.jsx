import React from "react";

const ProductCard = () => {
  const products = [
    {
      title: "International Gourmet",
      description: "Premium chocolates, cheese, oils, pasta, sauces, and more from around the world.",
      image: "Images/IMG_20241119_174055.jpg", // Replace with actual image URLs
      rating: 5.0,
    },
    {
      title: "Premium Beverages",
      description: "Exclusive collection of international drinks and brewing essentials.",
      image: "Images/IMG_20241119_173843.jpg", // Replace with actual image URLs
      rating: 5.0,
    },
    {
      title: "Personal Care",
      description: "Luxury beauty and personal care products from global brands.",
      image: "Images/IMG_20241119_180741.jpg", // Replace with actual image URLs
      rating: 5.0,
    },
    {
      title: "Kitchen & Home",
      description: "Luxury beauty and personal care products from global brands.",
      image: "Images/photo-1534723452862-4c874018d66d.jpg", // Replace with actual image URLs
      rating: 5.0,
    },
    {
      title: "Global Snacks",
      description: "Luxury beauty and personal care products from global brands.",
      image: "Images/IMG_20241119_180718.jpg", // Replace with actual image URLs
      rating: 5.0,
    },
    {
      title: "Health & Wellness",
      description: "Luxury beauty and personal care products from global brands.",
      image: "Images/premium_photo-1664527305901-a3c8bec62850.avif", // Replace with actual image URLs
      rating: 5.0,
    },
  ];

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              {/* Rating Badge */}
              <div className="absolute top-2 left-2 bg-yellow-400 text-white text-sm font-bold rounded-full px-3 py-1 flex items-center">
                ⭐ {product.rating}
              </div>
            </div>

            {/* Product Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">{product.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-indigo-500 text-sm">Explore Choices !</span>
                <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  Grab Them
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
