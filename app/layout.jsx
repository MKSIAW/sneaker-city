
import "./globals.css";
import Link from 'next/link';
//import { CartProvider } from "./CartContext/page";
//import { useCart } from "./CartContext/page";

export const metadata = {
  title: 'Sneaker City',
  description: 'The latest in sneaker trends',
};

const Header = () => {
  // const { cart } = useCart();
  // const itemCount = cart.length;

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-2 md:mb-0">
        <Link href="/">
  <img src="/images/logo.png" alt="Sneaker City Logo" className="w-32 h-32 mr-2 cursor-pointer" />
</Link>

          <h1 className="text-2xl font-bold">Sneaker City</h1>
        </div>
        <nav className="flex space-x-4 mb-2 md:mb-0">
          <Link href="/Help"><span className="text-gray-700">Help</span></Link>
          <Link href="/JoinUs"><span className="text-gray-700">Join Us</span></Link>
          <Link href="/SignIn"><span className="text-gray-700">Sign In</span></Link>
        </nav>
      </div>
      <div className="container mx-auto p-2 flex flex-col md:flex-row justify-between items-center">
      <nav className="flex justify-center space-x-4 mb-2 md:mb-0 w-full">
  <Link href="/LatestSneakers">
    <span className="text-gray-700 text-lg">Latest Sneakers</span>
  </Link>
  <Link href="/men">
    <span className="text-gray-700 text-lg">Men</span>
  </Link>
  <Link href="/women">
    <span className="text-gray-700 text-lg">Women</span>
  </Link>
  <Link href="/kids">
    <span className="text-gray-700 text-lg">Kids</span>
  </Link>
</nav>


        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-lg"
          />
          {/* <Link href="/favorites">
            <span className="text-gray-800 text-2xl">❤️</span>
          </Link> */}
          <Link href="/Cart">
            <span className="text-gray-700 text-3xl">🛒   </span>
        </Link>
        </div>
      </div>
    </header>
  );
};

export default function RootLayout({ children }) {
  return (

      <html lang="en">
        <body className="bg-gray-100">
          <Header />
          <main className="container mx-auto p-4">
            {children}
          </main>
          <footer className="bg-white shadow mt-8 p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <nav className="flex space-x-4 mb-2 md:mb-0">
                <Link href="/About"><span className="text-gray-700">About Us</span></Link>
                <Link href="/Contact"><span className="text-gray-700">Contact Us</span></Link>
                <Link href="/SocialMedia"><span className="text-gray-700">Social</span></Link>
              </nav>
              <p className="text-gray-700 text-center md:text-right">&copy; {new Date().getFullYear()} Sneaker City. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
   
  );
}
