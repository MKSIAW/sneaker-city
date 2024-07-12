import Link from 'next/link';

const ShopNow = () => {
  const sneakers = [
    {
      id: 1,
      brand: 'Nike',
      model: 'Air Force 1',
      image: '/images/airforce1.avif',
      price: '$90',
    },
    {
      id: 2,
      brand: 'Adidas',
      model: 'Ultra Boost',
      image: '/images/ultraboost.avif',
      price: '$180',
    },
    {
      id: 3,
      brand: 'Puma',
      model: 'Creeper',
      image: '/images/puma.jpg',
      price: '$120',
    },
    {
      id: 4,
      brand: 'New Balance',
      model: '550 Low-Top',
      image: '/images/newbalance.webp',
      price: '$107',
    },
    {
      id: 5,
      brand: 'Chloe',
      model: 'Nama Platform Sneaker',
      image: '/images/chloe.webp',
      price: '$795',
    },
    {
      id: 6,
      brand: 'Veja',
      model: 'Impala',
      image: '/images/veja.webp',
      price: '$160',
    },
    {
      id: 7,
      brand: 'Adidas',
      model: 'Samba',
      image: '/images/samba.webp',
      price: '$75',
    },
    {
      id: 8,
      brand: 'Nike',
      model: 'Air Jordan 1',
      image: '/images/jordan.png',
      price: '$180',
    },
    {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
      {
        id: 8,
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: '/images/jordan.png',
        price: '$180',
      },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="text-center text-black py-10">
        <h1 className="text-5xl font-bold mb-2">Shop Your Sneakers</h1>
        <p className="text-xl mb-6">Explore our latest collection of stylish sneakers!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {sneakers.map((sneaker) => (
          <div key={sneaker.id} className=" overflow-hidden transform transition-transform hover:scale-105">
            <img src={sneaker.image} alt={sneaker.model} className="w-full h-80 object-cover" />
            <div className="p-4 text-center bg-transparent">
              <h2 className="text-lg font-semibold text-black">{sneaker.brand} {sneaker.model}</h2>
              <p className="text-black font-bold">{sneaker.price}</p>
              <Link href={`/sneaker/${sneaker.id}`}>
                <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopNow;