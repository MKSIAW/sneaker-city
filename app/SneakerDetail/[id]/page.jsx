'use client';
import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { CartContext } from '@/app/CartContext';


const SneakerDetail = ({ params }) => {
  const { id } = params;
  const { addToCart } = useContext(CartContext); // Use CartContext
  const [sneaker, setSneaker] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (id) {
      const mockData = [ /* your mock data */ ]; // Your mock data here

      const foundSneaker = mockData.find((s) => s.id === parseInt(id));
      if (foundSneaker) {
        setSneaker(foundSneaker);
      } else {
        setSneaker(null);
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (selectedSize && sneaker) {
      const itemToAdd = {
        id: sneaker.id,
        brand: sneaker.brand,
        model: sneaker.model,
        price: parseFloat(sneaker.price.replace('$', '')), // convert price to number
        size: selectedSize,
        quantity: 1,
      };
      addToCart(itemToAdd); // Add item to cart
      alert(`${sneaker.brand} ${sneaker.model} size ${selectedSize} added to cart!`);
    }
  };

  if (!id) return <div>Loading...</div>;
  if (!sneaker) return <div>Sneaker not found.</div>;

  return (
    <div className="p-4 bg-gray-100">
      {/* Sneaker detail UI */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-1/2 mb-4">
          <img src={sneaker.images[0]} alt={`${sneaker.brand} ${sneaker.model}`} className="object-cover rounded-lg h-72 w-full" />
          {/* Additional images... */}
        </div>
        <div className="flex flex-col justify-between md:w-1/2 pl-4">
          <h2 className="text-3xl font-bold mb-4">{sneaker.brand} {sneaker.model}</h2>
          <p className="text-lg font-semibold">Price: {sneaker.price}</p>
          {/* Available sizes and description... */}
          <button
            onClick={handleAddToCart}
            className={`mt-4 p-2 ${selectedSize ? 'bg-green-500' : 'bg-gray-300'} text-white rounded`}
            disabled={!selectedSize}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Recommended sneakers section */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-4">You Might Also Like</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {/* Recommended sneakers rendering... */}
        </div>
      </div>
    </div>
  );
};

export default SneakerDetail;
