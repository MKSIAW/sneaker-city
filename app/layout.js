import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: 'Sneaker City',
  description: 'The latest in sneaker trends',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-white shadow">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="Sneaker City Logo" className="w-10 h-10 mr-2" />
              <h1 className="text-xl font-bold">Sneaker City</h1>
            </div>
            <nav className="flex space-x-4">
              <Link href="/help"><id className="text-gray-700">Help</id></Link>
              <Link href="/join-us"><id className="text-gray-700">Join Us</id></Link>
              <Link href="/sign-in"><id className="text-gray-700">Sign In</id></Link>
            </nav>
          </div>
          <div className="container mx-auto p-2 flex justify-between items-center">
            <nav className="flex space-x-4">
              <Link href="/new-featured"><id className="text-gray-700">New & Featured</id></Link>
              <Link href="/men"><id className="text-gray-700">Men</id></Link>
              <Link href="/women"><id className="text-gray-700">Women</id></Link>
              <Link href="/kids"><id className="text-gray-700">Kids</id></Link>
            </nav>
            <div className="flex items-center space-x-2">
            <input
  type="text"
  placeholder="Search..."
  className="p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-lg"
/>

<Link href="/favorites">
  <span className="text-gray-800 text-2xl">❤️</span>
</Link>
<Link href="/cart">
  <span className="text-gray-700 text-2xl">🛒</span>
</Link>

            </div>
          </div>
        </header>

        <main className="container mx-auto p-4">
          {children}
        </main>

        <footer className="bg-white shadow mt-8 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <nav className="flex space-x-4">
              <Link href="/about-us"><id className="text-gray-700">About Us</id></Link>
              <Link href="/contact-us"><id className="text-gray-700">Contact Us</id></Link>
              <Link href="/contact-us"><id className="text-gray-700">Social</id></Link>

              {/* <id href="https://facebook.com" className="text-gray-700">Facebook</id>
              <id href="https://twitter.com" className="text-gray-700">Twitter</id>
              <id href="https://instagram.com" className="text-gray-700">Instagram</id> */}
            </nav>
            <p className="text-gray-700">&copy; {new Date().getFullYear()} Sneaker City. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}