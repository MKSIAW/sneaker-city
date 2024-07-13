import Link from 'next/link';

const ShopNow = () => {
  const sneakers = [
    {
      id: 1,
      brand: 'Nike',
      model: 'Air Max',
      image: '/images/shopnow1.avif',
      price: '$80',
    },
    {
      id: 2,
      brand: 'Nike',
      model: 'Air Max Pink',
      image: '/images/shopnow2.avif',
      price: '$180',
    },
    {
      id: 3,
      brand: 'Nike',
      model: 'Air Force 1 Brown',
      image: '/images/shopnow3.avif',
      price: '$120',
    },
    {
      id: 4,
      brand: 'Nike',
      model: 'Trainers',
      image: '/images/shopnow4.avif',
      price: '$107',
    },
    {
      id: 5,
      brand: 'Puma',
      model: 'Smash Perf',
      image: '/images/shopnow5.avif',
      price: '$320',
    },
    {
      id: 6,
      brand: 'Nike',
      model: 'Air Jordan 12 Gym Red',
      image: '/images/shopnow6.avif',
      price: '$250',
    },
    {
      id: 7,
      brand: 'Puma',
      model: 'Trinomic Wedge',
      image: '/images/shopnow7.avif',
      price: '$125',
    },
    {
      id: 8,
      brand: 'Puma',
      model: '',
      image: '/images/shopnow8.avif',
      price: '$180',
    },
    {
        id: 9,
        brand: 'Nike',
        model: 'Air Jordan 13',
        image: '/images/shopnow9.avif',
        price: '$185',
      },
      {
        id: 10,
        brand: 'New Balance',
        model: 'X-90',
        image: '/images/shopnow10.avif',
        price: '$176',
      },
      {
        id: 11,
        brand: 'Adidas',
        model: 'Yeezy Boost 359 v2',
        image: '/images/shopnow11.avif',
        price: '$320',
      },
      {
        id: 12,
        brand: 'Yeezy',
        model: '600',
        image: '/images/shopnow12.avif',
        price: '$430',
      },
      {
        id: 13,
        brand: 'Adidas',
        model: 'EQT ADV Grey',
        image: '/images/shopnow13.avif',
        price: '$123',
      },
      {
        id: 14,
        brand: 'Fila',
        model: 'Disruptor',
        image: '/images/shopnow14.avif',
        price: '$70',
      },
      {
        id: 15,
        brand: 'Converse X COMME des GARCONs',
        model: 'Play',
        image: '/images/shopnow15.avif',
        price: '$150',
      },
      {
        id: 16,
        brand: 'Adidas',
        model: 'EQT ADV 91-18',
        image: '/images/shopnow16.avif',
        price: '$255',
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