'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CartPage = ({ discount }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const response = await fetch('/api/cart');
    const data = await response.json();
    setCartItems(data);
  };

  const addItemToCart = async (item) => {
    const response = await fetch('/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    const updatedCart = await response.json();
    setCartItems(updatedCart);
  };

  const updateQuantity = async (id, quantity) => {
    const quantityNumber = Number(quantity);
    if (isNaN(quantityNumber) || quantityNumber < 0) return; // Prevent invalid quantities
    
    const updatedItem = cartItems.find(item => item.id === id);
    if (updatedItem) {
      // Ideally, send a request to update the quantity on the server
      // await fetch(`/api/cart/update`, { method: 'PUT', body: JSON.stringify({ id, quantity: quantityNumber }) });
    }

    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: quantityNumber } : item))
    );
  };

  const removeItem = async (id) => {
    await fetch(`/api/cart/delete`, { method: 'DELETE', body: JSON.stringify({ id }) });
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total - (discount || 0); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-center font-bold mb-6">Your Cart</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Product</th>
                <th className="text-left py-2">Quantity</th>
                <th className="text-left py-2">Price</th>
                <th className="text-left py-2">Total</th>
                <th className="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                      className="w-16 p-1 border rounded"
                    />
                  </td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
        <Link href="/CheckOut">
          <button className="bg-green-500 text-white px-3 py-1 rounded mt-4">
            Proceed to Checkout
          </button>
        </Link>
        <div className="mt-4 flex justify-end">
          <Link href="/Trivia">
            <div className="rounded-full bg-green-500 text-white px-4 py-2 animate-pulse bounce cursor-pointer">
              Try Our Sneaker Trivia for Discounts!
            </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default CartPage;
