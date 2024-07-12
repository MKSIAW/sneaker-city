'use client';
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SneakerDetail = ({ params }) => {
  // const router = useRouter();
  const { id } = params // Get the sneaker ID from the URL
  const [sneaker, setSneaker] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [cart, setCart] = useState([]);


  useEffect(() => {
    if (id) {
  // Mock data for sneaker details 
  const mockData = [
     {
      id: 1,
      brand: 'Nike',
      model: 'Air Force 1',
      price: '$90',
      image: '/images/airforce1.avif',
      releaseDate: '2023-01-15',
      sizes: {
        '8': 5,
        '9': 3,
        '10': 2,
      },
    },
    {
        id: 2,
        brand: 'Adidas',
        model: 'Ultra Boost',
        price: '$180',
        image: '/images/ultraboost.avif',
        releaseDate: '2023-02-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
      },
      {
        id: 3,
        brand: 'Fenty X Puma',
        model: 'Creeper Phatty',
        price: '$120',
        image: '/images/fenty.webp',
        releaseDate: '2024-05-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
      },
      {
        id: 4,
        brand: 'New Balance',
        model: '550 Low-Top',
        price: '$107',
        image: '/images/newbalance.webp',
        releaseDate: '2020-06-12',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
      },
      {
        id: 5,
        brand: 'Chloe',
        model: 'Nama Platform Sneaker',
        price: '$795',
        image: '/images/chloe.webp',
        releaseDate: '2019-01-18',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
      },
      {
        id: 6,
        brand: 'Veja',
        model: 'Impala ',
        price: '$160',
        image: '/images/veja.webp',
        releaseDate: '2023-07-25',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
      },
      {
        id: 7,
        brand: 'Adidas',
        model: 'Samba vegan',
        price: '$75',
        image: '/images/samba.webp',
        releaseDate: '2022-11-11',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
      },
      {
        id: 8,
        brand: 'New Balance',
        model: 'Fresh Form X 1080v13',
        price: '$164.99',
        image: '/images/freshform.jpg',
        releaseDate: '2024-07-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
      },
      {
        id: 9,
        brand: 'Nike',
        model: 'Cortez',
        price: '$90',
        image: '/images/cortez.webp',
        releaseDate: '2023-02-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
      },
      {
        id: 10,
        brand: 'Nike',
        model: 'Air Jordan 1 Retro High OG "First in Flight"',
        price: '$180',
        image: '/images/jordan.png',
        releaseDate: '2023-02-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
      },
    ];

   // Find the sneaker based on ID
   const foundSneaker = mockData.find((s) => s.id === parseInt(id));
   if (foundSneaker) {
     setSneaker(foundSneaker);
   } else {
     setSneaker(null); // Clear sneaker if ID is invalid
   }
 }
}, [id]);

const handleAddToCart = () => {
  if (selectedSize && sneaker) {
    const itemToAdd = {
      id: sneaker.id,
      brand: sneaker.brand,
      model: sneaker.model,
      price: sneaker.price,
      size: selectedSize,
    };
    setCart([...cart, itemToAdd]);
    alert(`${sneaker.brand} ${sneaker.model} size ${selectedSize} added to cart!`);
  }
};

if (!id) return <div>Loading...</div>;
if (!sneaker) return <div>Sneaker not found.</div>;

return (
 <div className="p-4">
   <h2 className="text-2xl font-bold mb-4">{sneaker.brand} {sneaker.model}</h2>
   <img src={sneaker.image} alt={sneaker.model} className="w-full h-60 object-cover rounded-lg mb-4" />
   <p className="text-lg font-semibold">Price: {sneaker.price}</p>
   <p className="text-gray-500 mb-2">Release Date: {sneaker.releaseDate}</p>
   <h3 className="text-lg font-semibold">Available Sizes:</h3>
   <ul>
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
      <button
        onClick={handleAddToCart}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        disabled={!selectedSize}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default SneakerDetail;