'use client';
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
//import { useCart } from '@/app/CartContext/page';

const SneakerDetail = ({ params }) => {
  const { id } = params;
 // const { addToCart } = useCart();
  const [sneaker, setSneaker] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (id) {
  // Mock data for sneaker details 
  const mockData = [
     {
      id: 1,
      brand: 'Nike',
      model: 'Air Force 1',
      price: '$90',
      images: [
        '/images/freshform.webp',
        '/images/freshform1.webp',
        '/images/freshform2.webp',
        '/images/freshform3.webp',
        '/images/freshform4.webp',
      ],
      releaseDate: '2023-01-15',
      sizes: {
        '8': 5,
        '9': 3,
        '10': 2,
      },
      description: 'The Fresh Foam X 1080v13 provides a plush and cushioned ride with a stylish design.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
    },

    {
        id: 2,
        brand: 'Adidas',
        model: 'Ultra Boost',
        price: '$180',
        images: [
          '/images/freshform.webp',
          '/images/freshform1.webp',
          '/images/freshform2.webp',
          '/images/freshform3.webp',
          '/images/freshform4.webp',
        ],
        releaseDate: '2023-02-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'The Fresh Foam X 1080v13 provides a plush and cushioned ride with a stylish design.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 3,
        brand: 'Fenty X Puma',
        model: 'Creeper Phatty',
        price: '$120',
        images: [
          '/images/freshform.webp',
          '/images/freshform1.webp',
          '/images/freshform2.webp',
          '/images/freshform3.webp',
          '/images/freshform4.webp',
        ],
        releaseDate: '2024-05-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'The Fresh Foam X 1080v13 provides a plush and cushioned ride with a stylish design.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 4,
        brand: 'New Balance',
        model: '550 Low-Top',
        price: '$107',
        images: [
          '/images/freshform.webp',
          '/images/freshform1.webp',
          '/images/freshform2.webp',
          '/images/freshform3.webp',
          '/images/freshform4.webp',
        ],
        releaseDate: '2020-06-12',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'The Fresh Foam X 1080v13 provides a plush and cushioned ride with a stylish design.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 5,
        brand: 'Chloe',
        model: 'Nama Platform Sneaker',
        price: '$795',
        images: [
          '/images/freshform.webp',
          '/images/freshform1.webp',
          '/images/freshform2.webp',
          '/images/freshform3.webp',
          '/images/freshform4.webp',
        ],
        releaseDate: '2019-01-18',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'The Fresh Foam X 1080v13 provides a plush and cushioned ride with a stylish design.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 6,
        brand: 'Veja',
        model: 'Impala ',
        price: '$160',
        images: [
          '/images/freshform.webp',
          '/images/freshform1.webp',
          '/images/freshform2.webp',
          '/images/freshform3.webp',
          '/images/freshform4.webp',
        ],
        releaseDate: '2023-07-25',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'The Fresh Foam X 1080v13 provides a plush and cushioned ride with a stylish design.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 7,
        brand: 'Adidas',
        model: 'Samba vegan',
        price: '$75',
        images: [
          '/images/freshform.webp',
          '/images/freshform1.webp',
          '/images/freshform2.webp',
          '/images/freshform3.webp',
          '/images/freshform4.webp',
        ],
        releaseDate: '2022-11-11',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'The Fresh Foam X 1080v13 provides a plush and cushioned ride with a stylish design.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 8,
        brand: 'New Balance',
        model: 'Fresh Form X 1080v13',
        price: '$164.99',
        images: [
          '/images/freshform.webp',
          '/images/freshform1.webp',
          '/images/freshform2.webp',
          '/images/freshform3.webp',
          '/images/freshform4.webp',
        ],
        releaseDate: '2024-07-20',
        sizes: {
          '8': 5,
          '9': 3,
          '10': 2,
        },
        description: 'The Fresh Foam X 1080v13 provides a plush and cushioned ride with a stylish design.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 9,
        brand: 'Nike',
        model: 'Cortez',
        price: '$90',
        images: [
          '/images/freshform.webp',
          '/images/freshform1.webp',
          '/images/freshform2.webp',
          '/images/freshform3.webp',
          '/images/freshform4.webp',
        ],
        releaseDate: '2023-02-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'The Fresh Foam X 1080v13 provides a plush and cushioned ride with a stylish design.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },
      
      {
        id: 10,
        brand: 'Nike',
        model: 'Air Jordan 1 Retro High OG "First in Flight"',
        price: '$180',
        images: [
          '/images/freshform.webp',
          '/images/freshform1.webp',
          '/images/freshform2.webp',
          '/images/freshform3.webp',
          '/images/freshform4.webp',
        ],
        releaseDate: '2023-02-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'The Fresh Foam X 1080v13 provides a plush and cushioned ride with a stylish design.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },
    ];

   // Find the sneaker based on ID
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
        price: sneaker.price,
        size: selectedSize,
      };
      alert(`${sneaker.brand} ${sneaker.model} size ${selectedSize} added to cart!`);
    }
  };

  if (!id) return <div>Loading...</div>;
  if (!sneaker) return <div>Sneaker not found.</div>;

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-1/2 mb-4">
          <div className="relative mb-2">
            <img
              src={sneaker.images[0]}
              alt={`${sneaker.brand} ${sneaker.model} main`}
              className="object-cover rounded-lg h-72 w-full shadow-md transition-transform transform hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {sneaker.images.slice(1).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`${sneaker.brand} ${sneaker.model} ${index + 1}`}
                  className="object-cover rounded-lg h-40 w-full shadow-sm transition-transform transform hover:scale-105"
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