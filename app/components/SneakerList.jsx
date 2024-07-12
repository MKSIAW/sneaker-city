import React from 'react';

const sneakers = [
  {
    id: 1,
    brand: 'Nike',
    model: 'Air Force 1',
    price: '$90',
    image: '/images/air-force-1.jpg',
    releaseDate: '2023-05-01',
  },
  {
    id: 2,
    brand: 'Adidas',
    model: 'Ultraboost',
    price: '$180',
    image: '/images/ultraboost.jpg',
    releaseDate: '2023-06-15',
  },
  // Add more sneaker objects (up to 10)
];

const SneakerList = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      {sneakers
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
        .slice(0, 10)
        .map(sneaker => (
          <div key={sneaker.id} className="flex items-center mb-4 border-b pb-2">
            <img src={sneaker.image} alt={sneaker.model} className="rounded-lg w-16 h-16 mr-4" />
            <div>
              <h2 className="text-lg font-bold">{sneaker.brand} {sneaker.model}</h2>
              <p className="text-gray-700">{sneaker.releaseDate}</p>
              <p className="text-xl font-semibold">{sneaker.price}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SneakerList;
