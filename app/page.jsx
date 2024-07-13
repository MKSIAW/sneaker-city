// /pages/page.jsx
'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import { CartProvider  } from './CartContext/page';

const MainPage = () => {
 // const { addToCart } = useContext(CartContext);

  const featuredSneakers = [
    {
      id: 1,
      name: 'Nike Air Force 1',
      description: 'Classic style with modern comfort.',
      price: 90,
      image: '/images/airforce1.png',
    },
    {
      id: 2,
      name: 'Adidas Ultra Boost',
      description: 'Ultimate performance and style combined.',
      price: 120,
      image: '/images/ultraboost.avif',
    },
    {
      id: 3,
      name: 'Puma Creeper',
      description: 'A bold look for the daring sneakerhead.',
      price: 80,
      image: '/images/fenty1.avif',
    },
    {
      id: 4,
      name: 'New Balance 550',
      description: 'Retro vibes with a fresh twist.',
      price: 70,
      image: '/images/balance1.webp',
    },
  ];

  return (
    <div className="p-4">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg p-8 mb-8 flex items-center">
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <div className="relative z-10 flex-1">
          <h1 className="text-4xl font-bold mb-2">Welcome to Sneaker City</h1>
          <p className="text-lg mb-4">Find your perfect pair of sneakers today!</p>
          <Link href="/ShopNow">
            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="relative z-10 flex-1">
          <img src="/images/banner.avif" alt="Sneakers" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Featured Sneakers */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Sneakers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredSneakers.map((sneaker) => (
            <div
              key={sneaker.id}
              className="relative bg-white rounded-lg p-4 text-center transition-transform transform hover:scale-105"
            >
              <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
                <img src={sneaker.image} alt={sneaker.name} className="h-full w-full object-cover rounded-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{sneaker.name}</h3>
              <p className="text-gray-500">{sneaker.description}</p>
              <p className="text-lg font-bold text-gray-800">${sneaker.price}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => addToCart(sneaker)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Men', 'Women', 'Kids', 'New Arrivals'].map((category) => (
            <Link key={category} href={`/category/${category.toLowerCase()}`}>
              <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg p-8 text-center transition-transform transform hover:scale-105">
                <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Brands */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Popular Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Nike', logo: '/images/nikelogo.jpg' },
            { name: 'Adidas', logo: '/images/adidaslogo.jpg' },
            { name: 'Puma', logo: '/images/puma.jpg' },
            { name: 'New Balance', logo: '/images/balancelogo.jpg' },
          ].map((brand) => (
            <Link key={brand.name} href={`/brand/${brand.name.toLowerCase()}`}>
              <div className="relative bg-white rounded-lg p-4 text-center transition-transform transform hover:scale-105">
                <div className="bg-gray-200 h-20 rounded-lg mb-4 flex items-center justify-center">
                  <img src={brand.logo} alt={`${brand.name} logo`} className="h-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{brand.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const PageWithCartProvider = () => (
    <CartProvider>
      <MainPage />
    </CartProvider>
  );

export default MainPage;
