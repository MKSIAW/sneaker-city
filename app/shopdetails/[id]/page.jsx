'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// Import your CartContext if needed
// import { useCart } from '@/app/CartContext/page';

const SneakerDetail = ({ params }) => {
  const { id } = params;
  // const { addToCart } = useCart();
  const [sneaker, setSneaker] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (id) {
      const fetchSneakerData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/sneakers`); // Correctly fetch from the backend API
          const data = await response.json();
          const foundSneaker = data.find((s) => s.id === parseInt(id));
  
          if (foundSneaker) {
            setSneaker(foundSneaker);
          } else {
            setSneaker(null);
          }
        } catch (error) {
          console.error('Error fetching sneaker data:', error);
        }
      };
  
      fetchSneakerData();
    }
  }, [id]);
  
  
  const handleAddToCart = () => {
    if (selectedSize && sneaker) {
      const itemToAdd = {
        id: sneaker.id,
        brand: sneaker.brand,
        model: sneaker.model,
        price: parseFloat(sneaker.price.replace('$', '')), // Ensure price is parsed correctly
        size: selectedSize,
        quantity: 1,
      };
      // addToCart(itemToAdd); // Call the correct function
      alert(`${sneaker.brand} ${sneaker.model} size ${selectedSize} added to cart!`);
    }
  };

  if (!id) return <div>Loading...</div>;
  if (!sneaker) return <div>Sneaker not found.</div>;

  return (
    <div className="p-4 bg-gray-100 ">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-1/2 mb-4">
          <div className="relative mb-2">
            <img
              src={sneaker.images[0]}
              alt={`${sneaker.brand} ${sneaker.model} main`}
              className="object-cover rounded-lg h-72 w-full transition-transform transform hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {sneaker.images.slice(1).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`${sneaker.brand} ${sneaker.model} ${index + 1}`}
                  className="object-cover rounded-lg h-40 w-full transition-transform transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-1/2 pl-4">
          <h2 className="text-3xl font-bold mb-4 text-green-600">{sneaker.brand} {sneaker.model}</h2>
          <p className="text-lg font-semibold text-gray-800">Price: {sneaker.price}</p>
          <p className="text-gray-500 mb-2">Release Date: {sneaker.releaseDate}</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">⭐</span>
            <span className="font-semibold">{sneaker.rating.toFixed(1)} / 5</span>
          </div>
          <h3 className="text-lg font-semibold">Available Sizes:</h3>
          <ul className="mb-4">
            {Object.entries(sneaker.sizes).map(([size, quantity]) => (
              <li key={size} className="text-gray-700">
                <label>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    onChange={() => setSelectedSize(size)}
                    className="mr-2"
                  />
                  Size: {size} - {quantity > 0 ? `${quantity} available` : 'Out of stock'}
                </label>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4">Description:</h3>
          <p className="text-gray-700 mb-2">{sneaker.description}</p>
          <h3 className="text-lg font-semibold">Product Details:</h3>
          <p className="text-gray-700">{sneaker.productDetails}</p>
          <button
            onClick={handleAddToCart}
            className={`mt-4 p-2 ${selectedSize ? 'bg-green-500' : 'bg-gray-300'} text-white rounded`}
            disabled={!selectedSize}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SneakerDetail;
