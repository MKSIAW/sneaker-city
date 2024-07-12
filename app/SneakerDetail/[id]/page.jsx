'use client';
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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
        '/images/airforce1.png',
        '/images/airforce2.jpg',
        '/images/airforce3.png',
        '/images/airforce4.png',
        '/images/airforce5.png',
      ],
      releaseDate: '2023-01-15',
      sizes: {
        '8': 5,
        '9': 3,
        '10': 2,
      },
       description: 'The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
        productDetails: 'Fits large; we recommend ordering a half size down',
        rating: 4.5,
    },

    {
        id: 2,
        brand: 'Adidas',
        model: 'Ultra Boost',
        price: '$180',
        images: [
          '/images/ultraboost.avif',
          '/images/ultraboost1.avif',
          '/images/ultraboost2.avif',
          '/images/ultraboost3.avif',
          '/images/ultraboost4.avif',
        ],
        releaseDate: '2023-02-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'From a walk in the park to a weekend run with friends, these adidas Ultraboost 1.0 shoes are designed to keep you comfortable. An adidas PRIMEKNIT upper gently hugs your feet while BOOST on the midsole cushions from the first step to the last mile. The Stretchweb outsole flexes naturally for an energized ride, and Continental™ Rubber gives you the traction you need to keep that pep in your step.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 3,
        brand: 'Fenty X Puma',
        model: 'Creeper Phatty',
        price: '$120',
        images: [
          '/images/fenty.avif',
          '/images/fenty1.avif',
          '/images/fenty2.avif',
          '/images/fenty3.avif',
          '/images/fenty4.avif',
        ],
        releaseDate: '2024-05-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
        description: 'Class is in session. The new FENTY x PUMA Creeper Phatty by Rihanna is wrapped in soft',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 4,
        brand: 'New Balance',
        model: '550 Low-Top',
        price: '$107',
        images: [
          '/images/balance1.webp',
          '/images/balance2.webp',
          '/images/balance3.webp',
          '/images/balance4.webp',
          '/images/balance5.webp',
        ],
        releaseDate: '2020-06-12',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'The original 550 debuted in 1989 and made its mark on basketball courts from coast to coast. After its initial run, the 550 was filed away in the archives, before being reintroduced in limited-edition releases in late 2020, and returned to the full-time lineup in 2021, quickly becoming a global fashion favorite. The 550’s low top, streamlined silhouette offers a clean take on the heavy-duty designs of the late ‘80s, while the dependable leather upper construction is a classic look in any era.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 5,
        brand: 'Chloe',
        model: 'Nama Platform Sneaker',
        price: '$795',
        images: [
          '/images/chloe1.webp',
          '/images/chloe2.webp',
          '/images/chloe3.webp',
          '/images/chloe4.webp',
          '/images/chloe5.webp',
        ],
        releaseDate: '2019-01-18',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: "Chloé's iconic Nama sneakers are revisited in a bicolor version crafted from a calfskin mix for a subtle textural interplay elevated by the line's distinctive hand-stitching.",
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 6,
        brand: 'Veja',
        model: 'Impala ',
        price: '$160',
        images: [
          '/images/veja1.jpg',
          '/images/veja2.jpg',
          '/images/veja3.jpg',
          '/images/veja4.jpg',
          '/images/veja5.jpg',
        ],
        releaseDate: '2023-07-25',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'This knitting technique “Engineered-Mesh” offers a tailor-made placement of breathable and supportive areas. The mesh alternates between tight stitches and spaced-out stitches. Ethylene vinyl acetate',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 7,
        brand: 'Adidas',
        model: 'Samba vegan',
        price: '$75',
        images: [
          '/images/samba1.avif',
          '/images/samba2.avif',
          '/images/samba3.avif',
          '/images/samba4.avif',
          '/images/samba5.avif',
        ],
        releaseDate: '2022-11-11',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: "An indoor football staple, adapted for skateboarding by adidas. The Samba ADV shoes feature an upgraded T-toe design with two layers of reinforcement in high-abrasion areas and all-suede construction for the classic feel, flick and durability that's made the Samba an icon. Known for its locked-in fit, the Molded sockliner and signature tongue wings create a stabilizing fit, while the grippy cupsole ensures the feel and board control.",
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
          '/images/cortez1.png',
          '/images/cortez2.png',
          '/images/cortez3.png',
          '/images/cortez4.png',
          '/images/cortez5.png',
        ],
        releaseDate: '2023-02-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'This Cortez is all about the accessories. Inspired by the colors and graphics of LA, choose from classic neutrals and dreamy pastels in suede, nylon and leather. Then top it off with a special Swoosh logo crafted from leather, patent leather or the sweetest candy paint metallic. Make sure to customize everything from the backtab all the way to the dubrae, which comes in gold and silver.',
        productDetails: 'Designed for neutral runners, featuring a breathable upper and responsive cushioning.',
        rating: 4.5,
      },

      {
        id: 10,
        brand: 'Nike',
        model: 'Air Jordan 1 Retro High OG "First in Flight"',
        price: '$180',
        images: [
          '/images/jordan1.jpg',
          '/images/jordan2.jpg',
          '/images/jordan3.jpg',
          '/images/jordan4.jpg',
          '/images/jordan5.jpg',
        ],
        releaseDate: '2023-02-20',
        sizes: {
            '8': 5,
            '9': 3,
            '10': 2,
          },
          description: 'This "First in Flight" edition of the AJ1 honors the home of the high flyers. It celebrates the historic moments in flight, as well as the pioneers that first set our gaze on the skies. Earning its wings, the leather and nubuck design layers University Blue and Midnight Navy over a Sail upper with pops of University Gold, giving praise to the Tar Heel State that laid the foundation. SKU: FD2596-400',
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

const recommendedSneakers = [
 // Mock data for recommended sneakers
 {
   id: 1,
   brand: 'Nike',
   model: 'Air Force 1',
   price: '$90',
   image: '/images/airforce1.avif',
 },
 {
   id: 2,
   brand: 'Adidas',
   model: 'Ultra Boost',
   price: '$180',
   image: '/images/ultraboost.avif',
 },
 {
   id: 3,
   brand: 'Fenty X Puma',
   model: 'Creeper Phatty',
   price: '$120',
   image: '/images/fenty.webp',
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
  image: '/images/veja.webp',
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


];

if (!id) return <div>Loading...</div>;
if (!sneaker) return <div>Sneaker not found.</div>;

return (
 <div className="p-4 bg-gray-100 ">
   <div className="flex flex-col md:flex-row justify-between">
     <div className="flex flex-col md:w-1/2 mb-4">
       <div className="relative mb-2">
         <img
           src={sneaker.images[0]}
           alt={`${sneaker.brand} ${sneaker.model} main`}
           className="object-cover rounded-lg h-72 w-full transition-transform transform hover:scale-105"
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

   {/* You Might Also Like Section */}
   <div className="mt-8">
     <h2 className="text-2xl font-bold mb-4">You Might Also Like</h2>
     <div className="flex overflow-x-auto space-x-4 pb-4">
       {recommendedSneakers.map((recSneaker) => (
         <div key={recSneaker.id} className=" p-4 flex-none w-40">
           <img
             src={recSneaker.image}
             alt={`${recSneaker.brand} ${recSneaker.model}`}
             className="object-cover rounded-lg h-32 w-full mb-2"
           />
           <h3 className="text-lg font-semibold">{recSneaker.brand} {recSneaker.model}</h3>
           <p className="text-gray-800 font-semibold">{recSneaker.price}</p>
           <Link href={`/sneaker/${recSneaker.id}`}>
             <button className="mt-2 p-1 bg-blue-500 text-white rounded w-full">View Details</button>
           </Link>
         </div>
       ))}
     </div>
   </div>


 </div>
);
};

export default SneakerDetail;