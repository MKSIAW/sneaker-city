'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const CategoryPage = () => {
  const pathname = usePathname();
  const category = pathname.split('/').pop();
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const fetchSneakers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/sneakers?category=${category}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setSneakers(data);
      } catch (error) {
        console.error('Error fetching sneakers:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSneakers();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!category) return <div>No category found.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category} Sneakers</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sneakers.map((sneaker) => (
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
            <button className="bg-gray-800 text-white px-4 py-2 rounded mt-2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
