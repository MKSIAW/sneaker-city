'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const LatestSneakers = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    // Mock data 
    const mockData = [
      {
        id: 1,
        brand: 'Nike',
        model: 'Air Force 1',
        price: '$90',
        image: '/images/airforce1.avif',
        releaseDate: '2023-01-15',
      },
      {
        id: 2,
        brand: 'Adidas',
        model: 'Ultra Boost',
        price: '$180',
        image: '/images/ultraboost.avif',
        releaseDate: '2023-02-20',
      },
      {
        id: 3,
        brand: 'Fenty X Puma',
        model: 'Creeper Phatty',
        price: '$120',
        image: '/images/fenty.webp',
        releaseDate: '2024-05-20',
      },
      {
        id: 4,
        brand: 'New Balance',
        model: '550 Low-Top',
        price: '$107',
        image: '/images/newbalance.webp',
        releaseDate: '2020-06-12',
      },
      {
        id: 5,
        brand: 'Chloe',
        model: 'Nama Platform Sneaker',
        price: '$795',
        image: '/images/chloe.webp',
        releaseDate: '2019-01-18',
      },
      {
        id: 6,
        brand: 'Veja',
        model: 'Impala ',
        price: '$160',
        image: '/images/veja1.jpg',
        releaseDate: '2023-07-25',
      },
      {
        id: 7,
        brand: 'Adidas',
        model: 'Samba vegan',
        price: '$75',
        image: '/images/samba.webp',
        releaseDate: '2022-11-11',
      },
      {
        id: 8,
        brand: 'New Balance',
        model: 'Fresh Form X 1080v13',
        price: '$164.99',
        image: '/images/freshform1.webp',
        releaseDate: '2024-07-20',
      },
      {
        id: 9,
        brand: 'Nike',
        model: 'Cortez',
        price: '$90',
        image: '/images/cortez.webp',
        releaseDate: '2023-02-20',
      },
      {
        id: 10,
        brand: 'Nike',
        model: 'Air Jordan 1 Retro High OG "First in Flight"',
        price: '$180',
        image: '/images/jordan.png',
        releaseDate: '2023-02-20',
      },
     
      
    ];

    // Sort sneakers by release date
    const sortedSneakers = mockData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    setSneakers(sortedSneakers.slice(0, 10)); 
  }, []);

  return (
    <div className="p-4">
      <ul className="space-y-6">
        {sneakers.map((sneaker) => (
          <li key={sneaker.id} className="border rounded-lg p-4 bg-white transition-transform transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <img src={sneaker.image} alt={sneaker.model} className="w-64 h-64 object-cover rounded-lg" /> {/* Adjust size as needed */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800">
                  <Link href={`/SneakerDetail/${sneaker.id}`}>
                    {sneaker.brand} {sneaker.model}
                  </Link>
                </h3>
                <p className="text-gray-700 mt-1">{sneaker.price}</p>
                <p className="text-gray-500 mt-1">Release Date: {sneaker.releaseDate}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
  
};

export default LatestSneakers;
