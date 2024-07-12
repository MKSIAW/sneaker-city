'use client';
import React from 'react';
import Link from 'next/link';

const MainPage = () => {
  return (
    <div className="p-4">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg p-8 mb-8">
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Welcome to Sneaker City</h1>
          <p className="text-lg mb-4">Find your perfect pair of sneakers today!</p>
          <Link href="/latest-sneakers">
            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Sneakers */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Sneakers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Placeholder sneakers */}
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative bg-white rounded-lg p-4 text-center transition-transform transform hover:scale-105"
            >
              <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Image</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Sneaker {item}</h3>
              <p className="text-gray-500">Description</p>
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

export default MainPage;